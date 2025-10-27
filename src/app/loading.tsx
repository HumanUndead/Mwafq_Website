import React from "react";
import Image from "next/image";
import logo from "@images/Footer/logo_white.png";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E2364] via-[#2a3189] to-[#1E2364]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-transparent border-b-white border-l-white rounded-full animate-spin-reverse"></div>
        </div>

        <div className="relative p-2 z-10 flex items-center justify-center w-32 h-32">
          <div className="animate-fade">
            <Image
              src={logo}
              alt="Mwafq Logo"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-white text-lg font-semibold tracking-wide">
            Loading
            <span className="inline-block animate-dots">
              <span className="animate-dot1">.</span>
              <span className="animate-dot2">.</span>
              <span className="animate-dot3">.</span>
            </span>
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-float-1 opacity-60"></div>
          <div className="absolute top-10 right-5 w-1.5 h-1.5 bg-white rounded-full animate-float-2 opacity-40"></div>
          <div className="absolute bottom-5 left-10 w-2 h-2 bg-cyan-300 rounded-full animate-float-3 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-white rounded-full animate-float-4 opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
