import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

const ScrollDown = ({ target }) => {
  const handleScroll = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleScroll}
        className="text-2xl text-secondary animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <FaAnglesDown />
      </button>
    </div>
  );
};

export default ScrollDown;
