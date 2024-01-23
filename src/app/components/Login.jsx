'use client'
import React from "react";
import ChatGPTLogo from "../ui/svg/ChatGPTLogo";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="h-screen w-screen center-element bg-black flex-col">
      <div className="h-60 text-white center-element">
        <ChatGPTLogo />
      </div>

      <div className="text-white">
        <button className="animate-pulse border border-solid border-white rounded-lg px-5 py-3 font-bold" 
            onClick={()=>signIn()}
        >Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
