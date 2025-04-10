import React, { useEffect } from "react";

const LinePattern = () => {
  useEffect(() => {
    const particleContainer = document.getElementById("particles");

    if (particleContainer && particleContainer.children.length === 0) {
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random size
        const size = Math.random() * 6 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random animation duration and delay
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particleContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div>
      <div className="line-pattern-design absolute top-0 left-0" />
      <div className="line-pattern-layer-background absolute top-0 left-0" />
      <div className="particles" id="particles" />
    </div>
  );
};

export default LinePattern;
