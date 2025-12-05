import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
