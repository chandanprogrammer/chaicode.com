import React from "react";
import { Sparkles } from "lucide-react";
import LiveCohortsButton from "./button/LiveCohortsButton";

const HeroSection = () => {
  return (
    <div className="px-2 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex flex-col items-center justify-between text-center tracking-wide z-10">
      {/* ---------- Animated Button type text ---------- */}
      <div className="mt-14 rounded-md group relative [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[15%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,87%),hsl(90,100%,87%),hsl(210,100%,87%),hsl(195,100%,87%),hsl(270,100%,87%))] px-6 py-1.5 inline-flex">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="size-3 text-yellow-500 animate-ping" />
          <span className="p-1 text-sm text-gray-100 animate-pulse">
            Trusted by <span className="font-bold">1.5M+</span> Code Learners
          </span>
          <Sparkles className="size-3 text-yellow-500 animate-ping" />
        </div>
      </div>

      {/* ---------- Hero section heading ---------- */}
      <h2 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-medium text-gray-300 z-10 ">
        Consistency and Community
      </h2>
      <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300 z-10">
        Learning for coding courses
      </h2>

      {/* ---------- Hero section paragraph ---------- */}
      <p className="text-lg text-gray-400 mt-10 md:w-[90%] lg:w-[70%] text-center z-10 ">
        Content is every where, we provide a learning experience that is
        unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
        Alumni Network, Doubt sessions, Group projects and so many other
        activities to keep you on track.
      </p>

      {/* ---------- Live cohort link button ---------- */}
      <div className="z-10">
        <LiveCohortsButton />
      </div>

      {/* ---------- Youtube video display ---------- */}
      <div className="my-8 md:w-[560px] w-[95%] h-[200px] md:h-[315px] rounded-lg ring-2 ring-cyan-500/20 bg-cyan-700 shadow-lg shadow-cyan-500/30 hover:scale-105 transition duration-500 z-10">
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
