import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function testWrite() {
  await addDoc(collection(db, "test"), {
    message: "Hello Firestore",
    createdAt: Date.now(),
  });
}
