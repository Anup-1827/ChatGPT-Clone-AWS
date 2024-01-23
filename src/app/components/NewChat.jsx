import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { db } from "../../../firebase";
import PencilSquare from "../ui/svg/PencilSquare";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user.email, "chats"),
      {
        userId: session?.user.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  
  return (
    <div className="cursor-pointer"
        onClick={createNewChat}
    >
      <PencilSquare />
    </div>
  );
}

export default NewChat;
