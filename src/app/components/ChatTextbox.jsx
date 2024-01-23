'use client'
import React, { useState } from 'react'
import UpArrow from '../ui/svg/UpArrow'
import { useSession } from 'next-auth/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';
import toast from 'react-hot-toast';

function ChatTextbox({chatId}) {
  const {data: session} = useSession();

  const [promt, setPromt] = useState("");

  const model = "gpt-3.5-turbo-instruct" // Fetched through SWR

  const handleSearching = async(e)=>{
    if(promt === ""){
      return;
    }

    const input = promt.trim();
    setPromt("");

    const message = {
      text :input,
      createdAt : serverTimestamp(),
      user: {
        _id: session?.user?.email,
        email : session?.user?.email,
        name : session?.user?.name,
        avatar : session?.user?.image
      }
    }

    await addDoc(collection(db, "users", session?.user?.email, "chats", chatId, "messages"),
    message
    )

    // Toast Notification
    const notification = toast.loading("ChatGPT is thinking....")


    await fetch('/api/askQuestion', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        promt : input, chatId, model, session
      })
    })
    .then(res=>{
      toast.success("ChatGPT responded!!!",
      {
        id:notification
      })
    })
    .catch(err=>{})


    setTimeout(()=>{
      
    },3000)
  }

  return (
    <div className="h-10 mb-3 w-full px-2 relative">
          <input
            className="text-black border border-solid border-mainColor rounded-2xl w-full p-3 text-sm outline-none"
            value={promt}
            disabled= {!session}
            onChange={(e)=>setPromt(e.target.value)}
            onKeyDown={(e)=> {
              if(e.keyCode === 13){
              handleSearching()
            }} 
          }
            type="text"
            placeholder="Message ChatGPT..."
          />

          <div className={`absolute top-2 right-[20px] cursor-pointer center-element bg-black text-white rounded-md p-1 scale-90 ${promt=== ""?"opacity-70 pointer-events-none":""}`} onClick={handleSearching}>
            <UpArrow />
          </div>
    </div>
  )
}

export default ChatTextbox