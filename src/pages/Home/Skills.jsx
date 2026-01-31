import React from "react";
import Title from "../../components/shared/Title";
import Container from "../../components/shared/Container";
import ContentContainer from "../../components/shared/ContentContainer";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const frontend = [
    { name: "React JS", icon: FaReact },
    { name: "Next JS", icon: SiNextdotjs },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    
    
  ];

  return (
    <Container id="skills" className="">
      <div className="text-center">
        <Title subtitle="Explore My" title="Skills" />
      </div>

      <div className="flex items-center justify-center gap-8">
        <ContentContainer className="p-10">
          <h1 className="font-bold mb-5 font-two text-2xl">Frontend</h1>

          <div className="grid grid-cols-2 flex-col gap-6">
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
      </div>
    </Container>
  );
};

export default Skills;
