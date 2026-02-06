import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="steps steps-vertical">
        <li className={`step ${activeStep >= 0 && "step-primary"}`}>
          <span className="step-icon">
            <FaHome className="text-lg" />
          </span>
        </li>

        <li className={`step ${activeStep >= 1 && "step-primary"}`}>
          <span className="step-icon">
            i
          </span>
        </li>

        <li className={`step ${activeStep >= 2 && "step-primary"}`}>
          <span className="step-icon">
            <FaProjectDiagram className="text-lg" />
          </span>
        </li>
        <li className={`step ${activeStep >= 2 && "step-primary"}`}>
          <span className="step-icon">
            <FaEnvelope className="text-lg" />
          </span>
        </li>
        <li className={`step ${activeStep >= 2 && "step-primary"}`}>
          <span className="step-icon">
            <FaEnvelope className="text-lg" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSteps;
