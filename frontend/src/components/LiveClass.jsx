import React, { useRef, useEffect, useState } from "react";
import { coursesData } from "../assets/data/courses-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeadingText from "./design/HeadingText";
import { Link } from "react-router";
import LiveCohortsButton from "./button/LiveCohortsButton";

const LiveClass = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll and reset to start
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % coursesData.length;
      const container = scrollRef.current;
      if (container) {
        const cardWidth = container.scrollWidth / coursesData.length;
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
      }
      setActiveIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / coursesData.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex items-center justify-center flex-col mt-8">
      <HeadingText heading="Cohorts" text="Live training classes" />

      <div className="relative w-full mt-6">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#101426] text-white p-2 rounded-full z-10 hover:bg-gray-600 cursor-pointer hidden lg:flex border border-cyan-500"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#101426] text-white p-2 rounded-full z-10 hover:bg-gray-600 cursor-pointer hidden lg:flex border border-cyan-500"
        >
          <ArrowRight />
        </button>

        {/* Carousel Items */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center overflow-x-auto gap-5 lg:ml-[2.5%] pb-4 scroll-smooth hide-scrollbar lg:w-[95%]"
        >
          {coursesData.map(
            (
              {
                imageUrl,
                title,
                description,
                totalPrice,
                discountPercentage,
                buttonText,
                buttonUrl,
              },
              index,
            ) => (
              <div
                key={index}
                className="bg-[#101426] rounded-lg shadow-sm text-sm min-w-[20rem] max-w-[20rem] border border-gray-600 flex-shrink-0 tracking-wider"
              >
                <img
                  className="rounded-t-md h-[200px] w-full object-cover border-b border-b-gray-600"
                  src={imageUrl}
                  alt={title}
                />
                <p className="max-h-[60px] text-gray-100/80 text-xl font-semibold ml-4 mt-5 line-clamp-2">
                  {title}
                </p>
                <p className="text-gray-400/70 ml-4 mt-2 line-clamp-2">
                  {description}
                </p>
                <div className="mt-3 ml-4">
                  <span className="text-xl font-extrabold text-gray-100/80">
                    ₹
                    {Math.floor(
                      totalPrice - totalPrice * (discountPercentage / 100),
                    )}
                  </span>{" "}
                  <span className="text-lg ml-2 text-gray-300/50">
                    <del>₹{totalPrice}</del>
                  </span>{" "}
                  <span className="ml-2 text-lg text-green-400/80">
                    {discountPercentage}% off
                  </span>
                </div>
                <Link to={buttonUrl} target="_blank">
                  <button
                    type="button"
                    className="w-[50%] mb-6 ml-4 mt-5 text-[16px] font-bold bg-orange-500/80 text-white inline hover:opacity-50 active:scale-95 transition-all px-8 py-2 rounded cursor-pointer tracking-wider"
                  >
                    {buttonText}
                  </button>
                </Link>
              </div>
            ),
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {coursesData.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === activeIndex ? "bg-orange-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <LiveCohortsButton />
    </div>
  );
};

export default LiveClass;
