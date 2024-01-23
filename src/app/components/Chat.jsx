'use client'

import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../../firebase";
import Message from "./Message";

function Chat({chatId}) {

  const {data: session} = useSession();

  const [messages, loading, error] = useCollection(
    session && 
    query(
      collection(db, "users", session?.user?.email, "chats", chatId, "messages"),
      orderBy("createdAt", "asc")
      
    )
  )

  return (
    <div className='h-4/5 ScrollBar  overflow-y-scroll py-5 px-3'>
      {
        messages?.docs?.map(message=> <Message key={message?.id} message={message.data()}/>)
      }
    </div>    
  )
}

export default Chat