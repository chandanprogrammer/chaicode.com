import React from "react";
import { Rocket } from "lucide-react";
import { Link } from "react-router";

const LiveCohortsButton = () => {
  return (
    <div className="my-10">
      <Link
        to="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
        target=""
      >
        <button
          type="button"
          aria-label="check all live cohorts"
          className="flex items-center gap-3 border px-6 py-3 text-lg rounded text-cyan-300 bg-cyan-500/10 border-cyan-500/30 hover:text-red-300 hover:bg-red-500/10 hover:border-red-500/30 hover:scale-95 transition delay-150 duration-300 ease-in-out cursor-pointer tracking-wider"
        >
          <Rocket size={20} color="#00BCFF" />
          Check all Live Cohorts
          <div className="pt-1">
            <span className="relative flex h-2 w-2">
              <span className="h-full w-full rounded-full bg-red-600"></span>
              <span className="h-full w-full rounded-full bg-red-500 absolute animate-ping "></span>
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LiveCohortsButton;
