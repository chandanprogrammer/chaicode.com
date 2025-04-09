import React, { useRef, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CircleCheck,
  AlarmClockCheck,
  ShoppingCart,
} from "lucide-react";

const CourseSlider = () => {
  const sliderRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png",
  ];

  const totalSlides = images.length;

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

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    const handleResize = () => {
      goToSlide(currentSlide);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center flex-col mt-8">
      <h2 className="text-5xl font-semibold tracking-wider">
        Our Students feedback
      </h2>
      <p className="w-[30%] text-center text-gray-300 mt-5 mb-10">
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>

      <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center flex-rowmt-8 rounded-full">
        <div
          className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50 cursor-pointer"
          ref={prevButtonRef}
          onClick={prevSlide}
        >
          <ChevronLeft size={25} />
        </div>

        <div className="w-full max-w-4xl overflow-hidden relative rounded-lg border-1">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            ref={sliderRef}
          >
            {images.map((src, index) => (
              <div className="w-full flex-shrink-0 bg-gray-900 flex flex-row gap-3 items-center justify-center px-10 py-6 ">
                <div className="w-[80%] text-center">
                  <h2 className="text-2xl mb-5 text-sky-500 font-semibold tracking-wide">
                    Complete web development course
                  </h2>
                  <p className="text-base text-gray-400">
                    Only web development course that you will need. Covers HTML,
                    CSS, Tailwind, Node, React, MongoDB, Prisma, Development etc
                  </p>
                  <div className="text-2xl flex items-center justify-center gap-4">
                    <div class="flex items-center justify-center mt-3 gap-2">
                      {Array.from({ length: 5 }, () => (
                        <Star size={18} strokeWidth={0} fill="yellow" />
                      ))}
                    </div>
                    <p className="text-3xl text-gray-300 mt-5 mb-2 border-2 border-gray-800 px-6 py-2">
                      4.7 Stars
                    </p>
                  </div>
                  <p className="mt-4 text-green-500 text-xl tracking-wider">
                    Top Reated
                  </p>
                </div>
                <div className="w-[50%] bg-amber-50 text-gray-800 rounded-sm">
                  <div className="w-full h-[160px] rounded-sm">
                    <img
                      className="h-full rounded-sm"
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png"
                      alt=""
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
                      <span className="text-2xl font-extrabold">₹399</span>{" "}
                      <span className="text-xl ml-2 text-gray-500">
                        <del>₹3099 </del>
                      </span>{" "}
                      <span className="ml-2 text-lg text-blue-800">
                        87% off
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
                    <div className="flex gap-4 flex-col">
                      <button
                        type="button"
                        class="px-6 py-2 active:scale-95 transition bg-purple-700 rounded text-white shadow-lg shadow-blue-500/30 text-sm font-medium w-[100%] cursor-pointer flex gap-3 items-center justify-center"
                      >
                        <ShoppingCart size={16} /> Add to cart
                      </button>
                      <button
                        type="button"
                        class="bg-white text-gray-500 active:scale-95 transition text-sm px-6 py-2 rounded border border-gray-500 w-[100%] cursor-pointer flex gap-3 items-center justify-center mb-2"
                      >
                       Buy now 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50 cursor-pointer"
          ref={nextButtonRef}
          onClick={nextSlide}
        >
          <ChevronRight size={25} />
        </div>
      </div>

    </div>
  );
};

export default CourseSlider;
