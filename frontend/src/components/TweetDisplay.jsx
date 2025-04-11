import React from "react";
import { Tweet } from "react-tweet";
import HeadingText from "./design/HeadingText";


const TweetDisplay = () => {
  const tweetId = [
    "1910696141286432865",
    "1908919974388695270",
    "1910362013752041596",
    "1910642740490027413",
    "1910628439884710331",
  ];
  // let tweetNumber = Math.floor(Math.random()*3)
  // console.log(tweetNumber);
  
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText
        heading="Tweet Love"
        text="Love that we get from our community"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-x-4 text-[14px]">
        <Tweet id="1908919974388695270" />
        <Tweet id="1910696141286432865" />
        <Tweet id="1910628439884710331" />
      </div>
      
    </div>
  );
};

export default TweetDisplay;
