import React from "react";
import { Tweet } from "react-tweet";
import HeadingText from "./design/HeadingText";
import LiveCohortsButton from "./button/LiveCohortsButton";

const TweetDisplay = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText
        heading="Tweet Love"
        text="Love that we get from our community"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4">
        <Tweet id="1908919974388695270" />
        <Tweet id="1908919974388695270" />
        <Tweet id="1908919974388695270" />
        <Tweet id="1908919974388695270" />
      </div>
      <LiveCohortsButton />
    </div>
  );
};

export default TweetDisplay;
