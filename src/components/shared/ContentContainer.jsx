import React from "react";

const ContentContainer = ({ children, className = "" }) => {
  return (
    <div className={`rounded-4xl border-2 border-stone-400 ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
