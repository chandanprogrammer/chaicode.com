import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TweetDisplay from "../components/TweetDisplay";
import LogoCard from "../components/LogoCard";
import LiveClass from "../components/LiveClass";
import Testimonials from "../components/Testimonials";
import CourseSlider from "../components/CourseSlider";
import KeyBenefits from "../components/KeyBenefits";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TweetDisplay />
      <LogoCard />
      <LiveClass />
      <Testimonials />
      <CourseSlider />
      <KeyBenefits />
      <div className="mb-[800px]">

      </div>
    </div>
  );
};

export default Home;
