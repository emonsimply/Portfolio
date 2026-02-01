import React from "react";
import ContentContainer from "./ContentContainer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Button from "./Button";

const ProjectCard = ({ image, title, githubLink, liveDemoLink }) => {
  return (
    <ContentContainer className="bg-amber-50/15  rounded-3xl overflow-hidden border border-gray-400 flex flex-col items-center transition-shadow duration-300 pt-18  p-6">
      {/* image */}
      <div className="w-44 h-48 md:h-44 overflow-hidden rounded-3xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-center font-two max-w-[250px]">
        {title}
      </h3>

      {/* buttons div*/}
      <div className="mt-4 flex gap-4">
        <Button href={githubLink}>
          GitHub <FaGithub />
        </Button>
        <Button href={liveDemoLink}>
          Live <FiExternalLink />
        </Button>
      </div>
    </ContentContainer>
  );
};

export default ProjectCard;
