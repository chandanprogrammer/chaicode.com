import React from "react";
import { Rocket, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center tracking-wide">
      <div className=" mt-12 rounded-md text-base duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,87%),hsl(90,100%,87%),hsl(210,100%,87%),hsl(195,100%,87%),hsl(270,100%,87%))] hover:scale-105 active:scale-95 h-10 px-8 py-6 inline-flex">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300" />
          <span className="ml-1 text-white lg:inline p-2">
            Trusted by 1.5M Code Learners
          </span>
          <Sparkles className="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300" />
        </div>
      </div>

      <h2 className="text-5xl text-center mt-8">Consistency and Community </h2>
      <h2 className="text-6xl mt-4">Learning for coding courses</h2>
      <p className="text-lg text-gray-300 mt-10 w-[70%] text-center">
        Content is every where, we provide a learning experience that is
        unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
        Alumni Network, Doubt sessions, Group projects and so many other
        activities to keep you on track.
      </p>
      <button
        type="button"
        className="flex items-center gap-2.5 border border-gray-500/30 px-6 py-3 text-lg text-gray-800 rounded bg-white hover:text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 active:scale-95 transition delay-150 duration-300 ease-in-out cursor-pointer m-14"
      >
        <Rocket size={20} color="#00BCFF" />
        Check all Live Cohorts
        <div className="flex items-center space-x-2 pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                </div>
      </button>
      <div className="w-[560px] h-[315px] rounded-lg ring-3 ring-cyan-500/20 bg-cyan-700 shadow-lg shadow-cyan-500/30 mb-6">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/yG8JMlldoCE?si=pqXWoH-lIBKuQ4qU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
