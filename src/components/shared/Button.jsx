import React from "react";

const Button = ({
  href,
  children,
  target = "_blank",
  className = "",
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`px-4 py-2 border rounded-full text-sm 
      hover:bg-black hover:text-white transition 
      flex justify-center items-center gap-1 
      font-one duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
