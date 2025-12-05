import React from "react";
import image from "../../assets/01.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-10"
    >
      {/* Profile Image */}
      <div>
        <img
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover mb-4 shadow-xl"
          src={image}
        />
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-md text-center flex flex-col items-center">
        <p className="text-sm text-gray-500">Hello, I'm</p>

        <h1 className="text-4xl font-bold text-[#333333] mt-1">
          Foysal Islam Emon
        </h1>

        <p className="text-2xl text-gray-600 mt-2 mb-8">Frontend Developer</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button className="px-6 py-3 text-sm font-medium rounded-full border-2 border-gray-800 text-gray-800 hover:bg-black hover:text-white cursor-pointer flex items-center gap-1 transition duration-300">
            Download CV <IoMdDownload />
          </button>

          <a
            href="#contact"
            className="px-12 py-3 text-sm font-medium rounded-full border-2 border-gray-800 text-gray-800 hover:bg-black hover:text-white cursor-pointer flex items-center gap-1 duration-300 transition"
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
  );
};

export default Hero;
