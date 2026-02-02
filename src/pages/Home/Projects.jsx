import { Link } from "react-router";
import ProjectCard from "../../components/shared/ProjectCard";
import toytopiaImage from "/src/assets/toytopia.JPG";
import plateshareImage from "/src/assets/plateshare.JPG";
import Title from "../../components/shared/Title";
import Container from "../../components/shared/Container";
import ScrollDown from "../../components/shared/ScrollDown";

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <div className="text-center mb-6">
          <Title subtitle="Browse My Recent" title="Projects" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
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
      </Container>

      <ScrollDown target="contact" />
    </section>
  );
};

export default Projects;
