import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavItems = ({ isMobile = false, onItemClick }) => {
  const items = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "About", link: "about" },
    { id: 3, text: "Skills", link: "skills" },
    { id: 4, text: "Projects", link: "projects" },
    { id: 5, text: "Contact", link: "contact" },
  ];

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col space-y-4 text-center"
          : "hidden md:flex space-x-8 justify-center"
      }
    >
      {items.map((item) => (
        <li key={item.id}>
          <ScrollLink
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={onItemClick}
            className={`cursor-pointer pb-2 transition font-one text-lg
              ${
                isMobile
                  ? "block text-gray-700 hover:text-indigo-600"
                  : "hover:text-accent hover:underline"
              }`}
          >
            {item.text}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
