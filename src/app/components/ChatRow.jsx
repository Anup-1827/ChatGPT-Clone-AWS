import React from 'react'
import Trash from '../ui/svg/Trash'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSession } from 'next-auth/react';
import ChatBubble from '../ui/svg/ChatBubble';

function ChatRow({id}) {
    const pathname = usePathname();
    const router = useRouter();
    const {data: session} = useSession()
    const [messages] = useCollection(collection(db, 'users', session?.user.email, "chats", id, "messages"))


    const deleteChat = async ()=>{
      await deleteDoc(doc(db, "users", session?.user?.email, "chats", id));

      router.replace("/")
    }

  return (
    <Link href={`/chat/${id}`} className={`hover:bg-[#202123] mt-1 p-2 rounded-lg flex items-center justify-between cursor-pointer ${pathname.includes(id)? "bg-[#202123]":""}`}>
        <div className='flex gap-2'>
          <span className='scale-90'><ChatBubble /></span>
          New Chat
        </div>
        <div className='h-5 w-5 scale-75' onClick={deleteChat}> <Trash/> </div>
    </Link>
  )
}

export default ChatRow