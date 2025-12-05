import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "About", link: "about" },
    { id: 3, text: "Skills", link: "skills" },
    { id: 4, text: "Projects", link: "projects" },
    { id: 5, text: "Contact", link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-lg shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 justify-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800 absolute right-4 top-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <p>x</p> : <p>x</p>}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg py-4 space-y-4 px-6 text-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block text-lg text-gray-700 hover:text-indigo-600 transition"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
