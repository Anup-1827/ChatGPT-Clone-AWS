import ChatTextbox from "@/app/components/ChatTextbox";
import Header from "@/app/components/Header";
import Chat from "@/app/components/Chat";
import React from "react";

function ChatPage(props) {
  const {params} = props;
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="w-full h-[90%] pb-3 flex flex-col  justify-between max-w-[700px] mx-auto">
        <Chat chatId={params.id} />
        <ChatTextbox chatId={params.id}/>
      </div>
    </div>
  );
}

export default ChatPage;
