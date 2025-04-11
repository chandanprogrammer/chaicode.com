import React from "react";
import { Star, StarHalf } from "lucide-react";
import { testimonialData } from "../assets/data/testiomonial-data";
import HeadingText from "./design/HeadingText";
import LiveCohortsButton from "./button/LiveCohortsButton";

const Testimonials = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center flex-col relative">
      {/* <div className="absolute w-full h-[800px] rotate-80 top-0 left-[-100px] bg-radial-[at_30%_55%] from-via-blue-400/14 to-[#101426] to-90% z-[-1]"></div> */}
      <HeadingText
        heading="Our Students feedback"
        text="Explore the incredible advantages of enrolling in our courses and
        enhancing your skills"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {testimonialData.map(
          ({ imageUrl, imageAlt, username, ratting, message }, index) => (
            <div
              key={index}
              className="w-80 flex flex-col items-center border border-gray-300/60 px-4 py-8 rounded-lg bg-[#101426] relative hover:scale-105 transition duration-500 cursor-pointer hover:bg-radial-[at_20%_65%] hover:from-orange-500/40 hove:via-sky-400/14 hover:to-[#101426]/20 hover:to-90% "
            >
              <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-radial-[at_30%_55%] from-cyan-500/30 via-blue-400/14 to-[#101426]/20 to-90% "></div>
              <div className="relative mb-2">
                <img
                  className="h-15 w-15 rounded-full border-2 border-orange-500"
                  src={imageUrl}
                  alt={imageAlt}
                />
                <svg
                  className="absolute top-0 -right-2"
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
              <h2 className="text-lg text-gray-200/90 font-medium mt-1 z-1">
                {username}
              </h2>
              <div className="flex items-center justify-center mt-3 gap-1 z-1">
                {Array.from({ length: 5 }, (arr, index) => (
                  <Star key={index} size={16} strokeWidth={0} fill="yellow" />
                  // <StarHalf key={index} size={16} strokeWidth={0} fill="yellow"/>
                ))}
              </div>
              <p className="text-center text-[16px] mt-3 text-gray-300/90 z-1 ">
                {message}
              </p>
            </div>
          ),
        )}
      </div>
      <div className="mt-8">
        <LiveCohortsButton />
      </div>
    </div>
  );
};

export default Testimonials;
