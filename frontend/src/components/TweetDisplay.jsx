import React from "react";
import { Tweet } from "react-tweet";
import { Rocket } from "lucide-react";

const TweetDisplay = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <p className="mt-8 text-lg  tracking-wide">
        Love that we get from our community
      </p>
      <h2 className="m-8 text-5xl font-semibold tracking-wide">Tweet Love</h2>

      <div className="flex gap-4 max-h-[500px]">
        <Tweet id="1908919974388695270" />
        <Tweet id="1909202369113391297" />
        <Tweet id="1908830800964878438" />
      </div>
      <button
        type="button"
        className="flex items-center gap-2.5 border border-gray-500/30 px-6 py-3 text-lg text-gray-800 rounded bg-white hover:text-red-300 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition delay-150 duration-300 ease-in-out cursor-pointer m-14"
      >
        <Rocket size={20} color="#F7BD02" />
        Join Cohorts Live Classes
        <div className="flex items-center space-x-2 pt-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        </div>
      </button>
    </div>
  );
};

export default TweetDisplay;
