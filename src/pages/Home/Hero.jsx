import React from "react";
import image from "../../assets/01.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import ScrollDown from "../../components/shared/ScrollDown";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 gap-10 mt-8 md:mt-0"
      >
        {/* Profile Image */}
        <div className="md:mt-20">
          <img
            alt="profile"
            className="w-68 h-68 md:w-80 md:h-80 mx-auto rounded-full object-cover mb-4 shadow-lg"
            src={image}
          />
        </div>

        {/* Hero Content */}
        <div className="md:mt-20 w-full max-w-md text-center flex flex-col items-center">
          <p className="text-sm text-secondary font-one">Hello, I'm</p>
          <h2 className="text-3xl md:text-[42px] my-0 md:my-2 font-bold leading-[72px] text-primary font-two">
            Foysal Islam Emon
          </h2>
          <p className="text-2xl text-secondary mb-8">Frontend Developer</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="px-6 py-3 text-sm font-medium rounded-full border-2 border-primary text-primary hover:bg-black hover:text-white cursor-pointer flex items-center gap-1 transition duration-300">
              Download CV <IoMdDownload />
            </button>

            <a
              href="#contact"
              className="px-12 py-3 text-sm font-medium rounded-full border-2 border-primary text-primary hover:bg-black hover:text-white cursor-pointer flex items-center gap-1 duration-300 transition"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}

          <div className="flex justify-center md:justify-start space-x-6">
            <a
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/emonsimply/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 text-white px-2 font-bold flex items-center justify-center"
            >
              in
            </a>

            <a
              aria-label="GitHub Profile"
              href="https://github.com/emonsimply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition text-3xl "
            >
              <FaGithub />
            </a>
          </div>
        </div>
        
      </section>
      <ScrollDown target="about" />
    </div>
  );
};

export default Hero;
