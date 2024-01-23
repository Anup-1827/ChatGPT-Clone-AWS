"use client";
import { useSession } from "next-auth/react";
import ChatGPTLogo from "../ui/svg/ChatGPTLogo";

function Message({ message }) {
  const { data: session } = useSession();
  console.log(message.id);
  console.log(message?.text);

  const isUser = message?.user?._id === session?.user?.email;
  return (
    <div className="flex gap-3 text-sm mb-4">
      <div className="h-10">
        {isUser ? (
          <img className="h-7 w-7 rounded-full" src={message.user.avatar} />
        ) : (
          <span className="h-7 w-7 center-element text-white bg-mainThemeColor rounded-full">
            <ChatGPTLogo />
          </span>
        )}
      </div>

      <div>
        <div className="font-bold">{isUser ? "You" : "ChatGPT"}</div>
        <div className="mt-1">{message.text}</div>
      </div>
    </div>
  );
}

export default Message;
