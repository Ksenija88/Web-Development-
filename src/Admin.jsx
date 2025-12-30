import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "./firebase";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const q = query(
          collection(db, "contacts"),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } else {
        setMessages([]);
      }
    });

    return () => unsub();
  }, []);

  if (loading) return <div className="p-6 text-white">Loading…</div>;
  if (!user) return <div className="p-6 text-white">Access denied.</div>;

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold">Contact Responses</h1>

      <div className="mt-6 space-y-4">
        {messages.length === 0 ? (
          <div className="text-slate-300">No messages yet.</div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className="border border-white/10 bg-white/5 rounded-xl p-4"
            >
              <div className="text-slate-100 font-medium">{m.name}</div>
              <div className="text-slate-300 text-sm">{m.email}</div>
              <div className="mt-3 text-slate-200">{m.message}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
