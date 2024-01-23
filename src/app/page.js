import Header from "@/app/components/Header";
import Image from "next/image";
import ChatGPTLogo from "./ui/svg/ChatGPTLogo";
import UpArrow from "./ui/svg/UpArrow";
import SuggestedSearches from "./components/SuggestedSearches";
import ChatTextbox from "./components/ChatTextbox";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="h-full max-w-[700px] mx-auto">
        <div className="center-element flex-col h-full">
          <div className="h-16 w-16 center-element border border-solid border-mainColor rounded-full mb-3">
            <ChatGPTLogo />
          </div>
          <div className="text-xl font-bold">How can I help you today?</div>
        </div>
      </div>
      <div className=" max-w-[700px] mx-auto pb-3">
        <SuggestedSearches />
        <ChatTextbox/>
      </div>
    </main>
  );
}
