import React from "react";
import Title from "../../components/shared/Title";
import Container from "../../components/shared/Container";
import ContentContainer from "../../components/shared/ContentContainer";

import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ScrollDown from "../../components/shared/ScrollDown";

const Skills = () => {
  const frontend = [
    { name: "React JS", icon: FaReact },
    { name: "Next JS", icon: SiNextdotjs },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  const backend = [
    { name: "Node JS", icon: FaNodeJs },
    { name: "Express JS", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    // { name: "JSON Web Tokens", icon: SiJsonwebtokens },
  ];

  const tools = [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    // { name: "Vercel", icon: SiVercel },
    // { name: "Surge", icon: SiVercel },
    { name: "VS Code", icon: VscVscode },
    { name: "Figma", icon: FaFigma },
    { name: "Photoshop", icon: SiAdobephotoshop },
  ];

  return (
    <section id="skills">
      <Container>
        <div className="text-center">
          <Title subtitle="Explore My" title="Skills" />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <ContentContainer className="px-12 py-6">
            <h1 className="font-bold text-center text-secondary mb-5 font-two text-2xl">
              Frontend
            </h1>

            <div className="grid  grid-cols-2 gap-6">
              {frontend.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-center gap-1">
                    <Icon size={40} />
                    <div>
                      <h2 className="font-semibold font-two">{skill.name}</h2>
                      <p className="text-sm font-one flex items-center gap-1 text-gray-500">
                        <RiVerifiedBadgeFill />
                        Intermediate
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentContainer>

          {/* Backend */}
          <ContentContainer className="px-12 py-6">
            <h1 className="font-bold text-center text-secondary mb-5 font-two text-2xl">
              Backend
            </h1>

            <div className="grid  gap-6">
              {backend.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-center gap-1">
                    <Icon size={40} />
                    <div>
                      <h2 className="font-semibold font-two">{skill.name}</h2>
                      <p className="text-sm font-one flex items-center gap-1 text-gray-500">
                        <RiVerifiedBadgeFill />
                        Intermediate
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentContainer>

          {/* Tools */}
          <ContentContainer className="px-12 py-6">
            <h1 className="font-bold text-center  text-secondary mb-6 font-two text-2xl">
              Tools
            </h1>

            <div className="grid  flex-col gap-6">
              {tools.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-center gap-1">
                    <Icon size={40} />
                    <div>
                      <h2 className="font-semibold font-two">{skill.name}</h2>
                      <p className="text-sm font-one flex items-center gap-1 text-gray-500">
                        <RiVerifiedBadgeFill />
                        Intermediate
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentContainer>
        </div>
      </Container>

      <ScrollDown target="projects" />
    </section>
  );
};

export default Skills;
