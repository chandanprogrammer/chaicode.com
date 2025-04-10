import React from "react";
import { Rocket } from "lucide-react";


const WhyChaiCode = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-semibold tracking-wider mt-8">
        But Why ChaiCode?
      </h2>
      <p className="mt-3 text-gray-300 text-lg tracking-wide">
        ChaiCode exists because we love tech and teaching
      </p>
      <div className="grid grid-cols-3 w-full mt-8">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm text-gray-400">
              Master key concepts and hands-on skills with clarity and
              confidence. Learn what truly matters, the right way, thorough,
              parctical, and easy to understrand.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm text-gray-400">
              Master key concepts and hands-on skills with clarity and
              confidence. Learn what truly matters, the right way, thorough,
              parctical, and easy to understrand.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm text-gray-400">
              Master key concepts and hands-on skills with clarity and
              confidence. Learn what truly matters, the right way, thorough,
              parctical, and easy to understrand.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm text-gray-400">
              Master key concepts and hands-on skills with clarity and
              confidence. Learn what truly matters, the right way, thorough,
              parctical, and easy to understrand.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Comprehensive Curriculum
              </h3>
              <p className="text-sm text-gray-400">
                Master key concepts and hands-on skills with clarity and
                confidence. Learn what truly matters, the right way, thorough,
                parctical, and easy to understrand.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Comprehensive Curriculum
              </h3>
              <p className="text-sm text-gray-400">
                Master key concepts and hands-on skills with clarity and
                confidence. Learn what truly matters, the right way, thorough,
                parctical, and easy to understrand.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Comprehensive Curriculum
              </h3>
              <p className="text-sm text-gray-400">
                Master key concepts and hands-on skills with clarity and
                confidence. Learn what truly matters, the right way, thorough,
                parctical, and easy to understrand.
              </p>
            </div>
          </div>
        </div>
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

export default WhyChaiCode;
