import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Title from "../../components/shared/Title";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Daisy-UI",
  "Javascript",
  "React JS",
  "Next JS",
  "React Hook Form",
  "React Query",
  "ES6",
  "Firebase",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Figma",
  "Photoshop",
  "Vercel",
  "Surge",
  "JSON Web Tokens",
  "Git",
  "GitHub",
  "Chrome Dev Tool",
  "VS Code",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 text-white">
      <div className="text-center">
        
        <Title subtitle="Explore My" title="Skills" />
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="flex items-center gap-2 bg-gray-800 text-gray-200 py-3 px-4 rounded-xl shadow-md hover:bg-gray-700 duration-200"
            >
              <BadgeCheck className="w-5 h-5 text-gray-300" />
              <span className="text-sm md:text-base font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
