import React from "react";
import HeadingText from "./design/HeadingText";

const Topics = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText
        heading="Topics Cloud"
        text="You can find videos and courses on topics and much more"
      />
      <div className="grid grid-cols-3 w-full mt-8"> </div>
    </div>
  );
};

export default Topics;
