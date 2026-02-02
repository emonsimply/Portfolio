import Title from "../../components/shared/Title";
import Container from "../../components/shared/Container";
import ContentContainer from "../../components/shared/ContentContainer";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdHome, MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className="text-center">
          <Title subtitle="Get In Touch" title=" Contact me" />
        </div>

        <ContentContainer className="w-fit mx-auto grid grid-cols-3 flex-wrap items-center justify-center gap-6 p-6 font-one">
          {/* Email */}
          <a
            href=""
            className="flex items-center gap-3 font-medium hover:opacity-80 transition"
          >
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <FaEnvelope />
            </span>
            <span>foysal.emon01@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href=""
            className="flex items-center gap-3 font-medium hover:opacity-80 transition"
          >
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <MdLocalPhone />
            </span>
            <span>+8801631439816</span>
          </a>

          {/* Home */}
          <a
            href="https://www.google.com/maps/place/Barishal,+Bangladesh/@22.7010013,90.3534513,12z/data=!3m1!4b1!4m5!3m4!1s0x37532f10df140a7d:0x7f3f6f6c2f2e4e0!8m2!3d22.7010013!4d90.3534513"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-medium hover:opacity-80 transition"
          >
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <MdHome />
            </span>
            <span>Barishal, Bangladesh</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/emonsimply/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-medium hover:opacity-80 transition"
          >
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <FaLinkedinIn />
            </span>
            <span>LinkedIn</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/emonsimply"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-medium hover:opacity-80 transition"
          >
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
        </ContentContainer>
      </Container>
    </section>
  );
};

export default Contact;
