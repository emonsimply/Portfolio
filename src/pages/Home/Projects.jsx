import { Link } from "react-router";
import ProjectCard from "../../components/shared/ProjectCard";
import toytopiaImage from "/src/assets/toytopia.JPG";
import plateshareImage from "/src/assets/plateshare.JPG";
import Title from "../../components/shared/Title";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-6">
        <Title subtitle="Browse My Recent" title="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <ProjectCard
          image={toytopiaImage}
          title="ToyTopia | A Toy Marketplace"
          githubLink="https://github.com/emonsimply/toytopia"
          liveDemoLink="https://toytopia-emonsimply.netlify.app/"
        />
        <ProjectCard
          image={plateshareImage}
          title="PlateShare | A Food Recipe Sharing Platform"
          githubLink="https://github.com/emonsimply/B12-A10-PlateShare-Client"
          liveDemoLink="https://b12-a10-plateshare-emonsimply.netlify.app/"
        />
        
      </div>
    </section>
  );
};

export default Projects;
