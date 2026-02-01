import ScrollDown from "../../components/shared/ScrollDown";
import Title from "../../components/shared/Title";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Title subtitle="Get To Know More" title="About Me" />

        <p className="mt-6 text-gray-600 leading-relaxed  max-w-3xl mx-auto">
          I started my coding journey with curiosity and passion for creating
          beautiful, functional websites. I enjoy building responsive UI,
          solving problems, and learning new technologies. Outside programming,
          I enjoy traveling, football, and graphic design.
        </p>
      </div>

      <ScrollDown target="skills" />
    </section>
  );
};

export default About;
