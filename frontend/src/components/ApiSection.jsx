import React from "react";
import HeadingText from "./design/HeadingText";
import LoginButton from "./button/LoginButton";

const ApiSection = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText heading="FreeAPI - Open Source" text="" />
        <LoginButton
          text="Check FreeAPI Docs"
          link="https://docs.chaicode.com"
          target="_blank"
        />
      
    </div>
  );
};

export default ApiSection;
