import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  CircleCheck,
  AlarmClockCheck,
} from "lucide-react";
import HeadingText from "./design/HeadingText";
import { coursesCrousel } from "../assets/data/udemy-course";

const CourseSlider = () => {
  const sliderRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = coursesCrousel.length;

  // Touch states
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      goToSlide(currentSlide);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right
    }

    // Reset
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex items-center justify-center flex-col ">
      <HeadingText
        heading="Udemy"
        text="Not only in India, we are global leaders in tech education"
      />

      <div className="flex items-center justify-center flex-rowmt-8 mt-8 w-[100%]">
        <div
          className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50 cursor-pointer hidden md:inline border border-cyan-500"
          ref={prevButtonRef}
          onClick={prevSlide}
        >
          <ArrowLeft size={25} />
        </div>

        <div className="w-full lg:max-w-4xl overflow-hidden relative rounded-lg border border-gray-200/30 ">
          <div
            className="flex transition-transform duration-500 ease-in-out bg-amber-600"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {coursesCrousel.map(
              (
                {
                  courseTitle,
                  description,
                  ratting,
                  rattingStatus,
                  imageUrl,
                  imageAlt,
                  totalPrice,
                  discountPercentage,
                  buyLink,
                },
                index,
              ) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-gray-900 flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center px-4 py-10 xl:p-4"
                >
                  <div className="text-center md:w-[80%]">
                    <h2 className="text-3xl mb-5 text-gary-200 font-semibold tracking-wide">
                      {courseTitle}
                    </h2>
                    <p className="text-base text-gray-400">{description}</p>
                    <div className="text-2xl flex items-center justify-center gap-4">
                      <div className="flex items-center justify-center mt-3 gap-2">
                        {Array.from({ length: 5 }, (arr, index) => (
                          <Star
                            key={index}
                            size={18}
                            strokeWidth={0}
                            fill="yellow"
                          />
                        ))}
                      </div>
                      <p className="text-3xl text-gray-300 mt-5 mb-2 border-2 border-gray-800 px-6 py-2">
                        {ratting} Stars
                      </p>
                    </div>
                    <p className="mt-4 text-green-500 text-xl tracking-wider">
                      {rattingStatus}
                    </p>
                  </div>
                  <div className="md:w-[80%] lg:w-[50%] bg-amber-50 text-gray-800 rounded-sm">
                    <div className="w-full lg:h-[50%] rounded-sm">
                      <img
                        className="h-auto object-cover rounded-t-sm"
                        src={imageUrl}
                        alt={imageAlt}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex">
                        <p className="w-[50%] border-b-blue-400 border-b-2 pb-1 text-center cursor-pointer">
                          Personal
                        </p>
                        <p className="w-[50%] border-b-gray-300 border-b-2 pb-1 text-center cursor-pointer">
                          Terms
                        </p>
                      </div>
                      <p className="text-purple-500 flex items-center gap-2 text-sm mt-3">
                        <CircleCheck size={16} className="animate-pulse" />
                        This Premium course is included in plans
                      </p>

                      <div className="mt-3">
                        <span className="text-2xl font-extrabold">
                          ₹
                          {Math.floor(
                            totalPrice -
                              totalPrice * (discountPercentage / 100),
                          )}
                        </span>{" "}
                        <span className="text-xl ml-2 text-gray-500">
                          <del>₹{totalPrice}</del>
                        </span>{" "}
                        <span className="ml-2 text-lg text-blue-800">
                          {discountPercentage}% off
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm my-2 text-red-700">
                        <span className="relative">
                          <AlarmClockCheck
                            size={16}
                            className="animate-ping absolute inset-0 text-red-400 opacity-75"
                          />
                          <AlarmClockCheck size={16} className="relative" />
                        </span>
                        45 minutes left at this price
                      </div>
                      <div className="flex gap-4 flex-col mt-4">
                        <Link to={buyLink} target="_blank">
                          <button
                            type="button"
                            className="px-6 py-2 transition bg-purple-700 hover:bg-purple-900 rounded text-white shadow-lg shadow-blue-500/30 text-[18px] font-medium w-[100%] cursor-pointer flex gap-3 items-center justify-center"
                          >
                            Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div
          className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50 cursor-pointer hidden md:inline border border-cyan-500"
          ref={nextButtonRef}
          onClick={nextSlide}
        >
          <ArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
