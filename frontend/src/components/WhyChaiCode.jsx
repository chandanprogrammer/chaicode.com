import React from "react";
import HeadingText from "./design/HeadingText";
import LiveCohortsButton from "./button/LiveCohortsButton";
import { Youtube, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

const WhyChaiCode = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText
        heading="But Why ChaiCode?"
        text="ChaiCode exists because we love tech and teaching"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-8 gap-6">
        <div className="h-full flex flex-col gap-4 items-center justify-between">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm text-gray-400">
              Master key concepts and hands-on skills with clarity and
              confidence. Learn what truly matters, the right way, thorough,
              parctical, and easy to understrand.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              You finish it
            </h3>
            <p className="text-sm text-gray-400">
              Our cohorts are a collaborative journay, students learn together,
              saty motivated, and complete the course on time as a community
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
            <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
              Industry Guests
            </h3>
            <p className="text-sm text-gray-400">
              We're connected with indestry experts and regularly bring them
              into our classes for engaging, fun, and insightful sessions with
              students.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-full bg-[#101426] p-4 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer flex flex-col items-center justify-center">
            <img src="./public/images/hitesh.png" alt="" />
            <h2 className="text-3xl font-semibold text-gray-100/90 my-4">
              Hitesh Choudhary
            </h2>
            <p className="text-base text-cyan-300/60">
              Retired from corporate and full time Youtuber, x founder of
              LOC(acquired), x CTO, Sr. Director at PW. 2 Youtube Channels (950k
              & 470k), stepped into 43 countries.
            </p>
            <h3 className="text-2xl font-semibold text-gray-100 my-3">
              Approach
            </h3>
            <p className="text-base text-gray-300/80">
              Project based cources with peer learning and bounties with many
              activities.
            </p>
            <div className="w-full flex flex-row gap-4 mt-6 mb-2 ml-10">
              <div className="hover:scale-150 transition durantion-500">
                <Link to="https://www.youtube.com/@chaiaurcode" target="_blank">
                  <Youtube size={18} color="red" />
                </Link>
              </div>
              <div className="hover:scale-150 transition durantion-500">
                <Link
                  to="https://www.instagram.com/hiteshchoudharyofficial"
                  target="_blank"
                >
                  <Instagram size={18} color="#F745A0" />
                </Link>
              </div>
              <div className="hover:scale-150 transition durantion-500">
                <Link to="https://x.com/hiteshdotcom" target="_blank">
                  <Twitter size={18} color="#87DEF7" />
                </Link>
              </div>
              <div className="hover:scale-150 transition durantion-500">
                <Link
                  to="https://www.linkedin.com/in/hiteshchoudhary"
                  target="_blank"
                >
                  <Linkedin size={18} color="#1469C7" />
                </Link>
              </div>
              <div className="hover:scale-150 transition durantion-500">
                <Link to="https://github.com/hiteshchoudhary" target="_blank">
                  <Github size={18} color="#ffffff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" h-full flex flex-col gap-4 items-center justify-between">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Code and Chill
              </h3>
              <p className="text-sm text-gray-400">
                Coding should be fun, not frightening. It might feel tought at
                first, but with time and practice, everything starts to click
                and fall into place.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Improve Communication
              </h3>
              <p className="text-sm text-gray-400">
                One of the best ways to boosts communication skills is through
                practice. Our peer classes make it happen whwre co-learners
                tech, share, and grow together.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center cursor-pointer">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 ">
                Bounties
              </h3>
              <p className="text-sm text-gray-400">
                Every cohorts comes with exciting cash prizes and some even
                feature a MacBook giveway. It's our way of keeping the
                motivation high and the learning fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LiveCohortsButton />
    </div>
  );
};

export default WhyChaiCode;
