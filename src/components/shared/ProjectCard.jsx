import React from "react";

const ProjectCard = ({ image, title, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-amber-50/15  rounded-3xl overflow-hidden border border-gray-400 flex flex-col items-center p-8 hover:shadow-xl transition-shadow duration-300">
      {/* <div className="h-40"></div> */}
      <div className="w-full h-48 md:h-56 overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>

      <div className="mt-4 flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
        >
          Github
        </a>
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
