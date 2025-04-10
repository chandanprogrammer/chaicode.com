import React from "react";

const LogoCard = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex flex-col items-center justify-center">
      <h2 className="xl:w-[70%] text-center text-yellow-400 text-xl md:text-2xl font-medium tracking-wide">
        Our students are not only working in big tech companies but are now
        founded startups and product creators
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-8">
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
        <img src="./public/images/logo-5.png" alt="" className="bg-gray-300 rounded py-2"/>
      </div>
    </div>
  );
};

export default LogoCard;
