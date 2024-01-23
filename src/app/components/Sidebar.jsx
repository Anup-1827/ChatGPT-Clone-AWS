"use client";

import React, { useState } from "react";
import XMark from "../ui/svg/XMark";
import ChatGPTLogo from "../ui/svg/ChatGPTLogo";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import ChatRow from "./ChatRow";
import ChevronUp from "../ui/svg/ChevronUp";

function Sidebar() {
  const { data: session } = useSession();

  const [showLogoutBtn, setShowLogoutBtn] = useState(false);

  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session?.user?.email, "chats")),
    orderBy("createdAt", "desc")
  );

  return (
    <div className="flex w-full h-full text-white">
      <div className="w-[300px] flex flex-col justify-between h-full bg-black pt-3 pl-3 pr-4">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-white border border-solid border-white center-element rounded-full">
              <ChatGPTLogo color="black" />
            </div>
            <span className="font-bold text-xs">New Chat</span>
          </div>

          <NewChat />
        </div>

        {chats ? (
          <div className="h-full max-h-full overflow-y-scroll w-full my-4 px-2 text-sm hideScrollBar">
            {chats?.docs?.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} chat={chat} />
            ))}
          </div>
        ) : (
          <div>Loading Chats...</div>
        )}

        {session?.user ? (
          <div className="relative w-full h-8 mb-4 flex items-center justify-between px-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <img src={session.user.image} className=" w-8 h-8 rounded-full" />
              <div className="font-bold text-xs">{session.user.name}</div>
            </div>
            <div className="cursor-pointer" onClick={()=> setShowLogoutBtn(prev=> !prev)}>
                <ChevronUp/>
            </div>
            <div className={`absolute bg-[#202123] w-[200px] rounded-xl right-0 mx-3 flex flex-col text-sm p-3 ${showLogoutBtn? "top-[-50px]": "hidden"}`}>
              <div className="hover:bg-[#2f3033] py-2 px-3 rounded-xl" onClick={()=> signOut()}>Logout</div>
            </div>
          </div>
        ) : (
          <div className="pl-3">User Details...</div>
        )}
      </div>
      <div className="bg-black opacity-15 w-full pt-3 pl-3 md:hidden">
        <button className="text-white border-2 border-solid border-white font-bold cursor-pointer">
          <XMark />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
