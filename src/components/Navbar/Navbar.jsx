import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import NavItems from "../shared/NavItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`fixed top-0 left-0 w-full md:w-auto z-50 transition-all duration-300
  md:top-2 md:left-1/2 md:-translate-x-1/2

  ${
    scrolled
      ? `
        bg-white/90 shadow-sm
        md:bg-black/5 md:px-3 md:py-2 md:rounded-full md:backdrop-blur-xl
      `
      : `
        bg-white 
        md:bg-white/30 md:backdrop-blur-lg md:px-6 md:py-6 md:rounded-full
      `
  }`}
>

      <div className="flex items-center justify-center relative">
        {/* Desktop Menu */}
        <NavItems />

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden absolute right-2 top-2 text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoCloseOutline /> : <RiMenuFill />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow-lg py-6 rounded-2xl">
          <NavItems isMobile onItemClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;