import React from "react";
import HeadingText from "./design/HeadingText";
import "../assets/css/button.css";
import { Link } from "react-router";

const Topics = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center">
      <HeadingText
        heading="Topics Cloud"
        text="You can find videos and courses on topics and much more"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full mt-8 gap-8 tracking-wide">
        <Link to="">
          <div className="button-border-animate">Docker</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">MCP Server</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">Kubernetes</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">Python</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">React Native</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">Django</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">NextJS</div>
        </Link>
      </div>
    </div>
  );
};

export default Topics;
