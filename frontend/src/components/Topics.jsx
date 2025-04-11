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
        <Link to="https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&pp=0gcJCV8EOCosWNin">
          <div className="button-border-animate">Javascript</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">Docker</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=x7ULDYs4X84&list=PLu71SKxNbfoDzco7QLan_WqsRKndIycxH">
          <div className="button-border-animate">Numpy</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=dZyQNy3-HjU">
          <div className="button-border-animate">MCP Server</div>
        </Link>
        <Link to="">
          <div className="button-border-animate">Kubernetes</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s">
          <div className="button-border-animate">Python</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=UwFFsS33xG8&list=PLu71SKxNbfoAKL_sTfg5CgCxlrpH5b2jS">
          <div className="button-border-animate">React Native</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=j6szNSzw4BU&list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy">
          <div className="button-border-animate">Django</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=G9VbtcsPKT0&list=PLu71SKxNbfoBwut0coTT46oHz8q6xl2tO">
          <div className="button-border-animate">NextJS</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&pp=0gcJCV8EOCosWNin">
          <div className="button-border-animate">Backend</div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige">
          <div className="button-border-animate">ReactJS</div>
        </Link>
      </div>
    </div>
  );
};

export default Topics;
