import React from "react";
import { Star, StarHalf, Rocket } from "lucide-react";
import { testiomonialData } from "../assets/testiomonial-data";

const Testimonials = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center flex-col mt-8">
      <h2 className="text-5xl font-semibold tracking-wider">
        Our Students feedback
      </h2>
      <p className="w-[30%] text-center text-gray-300 mt-5">
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {testiomonialData.map(
          ({ imageUrl, imageAlt, username, ratting, message }) => (
            <div class="w-80 flex flex-col items-center border border-gray-300 px-4 py-8 rounded-lg bg-gray-800">
              <div class="relative mb-2">
                <img
                  class="h-15 w-15 rounded-full border-2 border-orange-500"
                  src={imageUrl}
                  alt={imageAlt}
                />
                <svg
                  class="absolute top-0 -right-2"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10.5" cy="10.5" r="8.5" fill="#FF6900" />
                  <path
                    d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h2 class="text-lg text-teal-500 font-medium mt-1">{username}</h2>
              <div class="flex items-center justify-center mt-3 gap-1">
                {Array.from({ length: 5 }, () => (
                  <Star size={16} strokeWidth={0} fill="yellow" />
                ))}
              </div>
              <p class="text-center text-[16px] mt-3 text-gray-400 ">
                {message}
              </p>
            </div>
          ),
        )}
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

export default Testimonials;
