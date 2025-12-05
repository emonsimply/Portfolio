import { Link } from "react-router";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500">Browse My Recent</p>
        <h2 className="text-4xl font-bold text-[#333333]">Projects</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        
        <ProjectCard
          image="/src/assets/toytopia.JPG"
          title="ToyTopia | A Toy Marketplace"
          githubLink="https://github.com/emonsimply/toytopia"
          liveDemoLink="https://toytopia-emonsimply.netlify.app/"
        />
        <ProjectCard
          image="/src/assets/plateshare.JPG"
          title="PlateShare | A Food Recipe Sharing Platform"
          githubLink="https://github.com/emonsimply/B12-A10-PlateShare-Client"
          liveDemoLink="https://b12-a10-plateshare-emonsimply.netlify.app/"
        />
        
      </div>
    </section>
  );
};

export default Projects;
