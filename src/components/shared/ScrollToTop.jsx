"use client";
import { useEffect, useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer text-primary hover:text-green-600 left-6 z-50 rounded-xl transition duration-300"
        >
          <FaCircleChevronUp size={44} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;