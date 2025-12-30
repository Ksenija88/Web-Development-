import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Please fill out name, email, and message before sending.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Your message is a bit short. Please add a little more detail.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        createdAt: Date.now(),
      });

      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
    } catch (err) {
      console.error("Error saving contact:", err);
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-xl mx-auto px-6 py-12">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Contact Me</CardTitle>
          </CardHeader>

          <CardContent>
            {sent ? (
              <div className="space-y-3">
                <p className="text-slate-200">Message sent. Thanks for reaching out!</p>
                <Button
                  type="button"
                  className="w-full"
                  onClick={() => {
                    setSent(false);
                    setError("");
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error ? (
                  <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                ) : null}

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-200">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="min-h-[140px]"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Send"}
                </Button>

                <p className="text-xs text-slate-400">
                  Fields marked are required. Your message is stored securely and used only to reply.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
