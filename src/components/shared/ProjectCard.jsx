import React from "react";
import ContentContainer from "./ContentContainer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ image, title, githubLink, liveDemoLink }) => {
  return (
    <ContentContainer className="bg-amber-50/15  rounded-3xl overflow-hidden border border-gray-400 flex flex-col items-center transition-shadow duration-300 pt-18  p-6">
      {/* image */}
      <div className="w-44 h-48 md:h-44 overflow-hidden rounded-3xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-center font-two">{title}</h3>

      <div className="mt-4 flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition flex justify-center items-center gap-1 font-one  duration-300"
        >
          <FaGithub />
          Github
        </a>
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition flex justify-center items-center gap-1 font-one duration-300"
        >
          Live <FiExternalLink />

        </a>
      </div>
    </ContentContainer>
  );
};

export default ProjectCard;
