import React from "react";

const HeadingText = ({ heading, text }) => {
  return (
    <div className="text-center my-8 z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-wider">{heading}</h2>
      <p className="mt-2 text-lg md:text-xl text-cyan-300/70 tracking-wide">{text}</p>
    </div>
  );
};

export default HeadingText;
