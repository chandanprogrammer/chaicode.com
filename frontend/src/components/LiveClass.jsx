import React, { useRef } from "react";
import { coursesData } from "../assets/courses-data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LiveClass = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center flex-col mt-8">
      <h2 className="text-5xl font-semibold tracking-wider">Cohorts</h2>
      <p className="mt-3 text-gray-300 text-lg tracking-wide">
        Live training classes
      </p>

      {/* Arrow Buttons */}
      <div className="relative w-full mt-6 ">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600"
        >
          <ArrowRight />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 mt-2 pb-4 scroll-smooth hide-scrollbar"
        >
          {coursesData.map(
            (
              { imageUrl, title, description, buttonText, buttonUrl },
              index,
            ) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-sm text-sm min-w-[18rem] max-w-[18rem] border border-gray-600 flex-shrink-0 "
              >
                <img
                  className="rounded-md max-h-40 w-full object-cover"
                  src={imageUrl}
                  alt={title}
                />
                <p className="text-gray-100 text-xl font-semibold ml-2 mt-2">
                  {title}
                </p>
                <p className="text-gray-300 mt-3 ml-2">{description}</p>
                <a href={buttonUrl}>
                  <button
                    type="button"
                    className="mt-4 mb-3 ml-2 font-medium bg-orange-500 text-white md:inline hidden hover:opacity-90 active:scale-95 transition-all px-6 py-2 rounded cursor-pointer tracking-wider"
                  >
                    {buttonText}
                  </button>
                </a>
              </div>
            ),
          )}
        </div>
      </div>
      
    </div>
  );
};

export default LiveClass;
