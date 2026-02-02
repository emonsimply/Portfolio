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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 shadow-lg px-6 py-2 rounded-full"
          : "bg-white/30 backdrop-blur-lg px-8 py-4 rounded-full"
      }`}
    >
      <div className="flex items-center justify-center relative">
        {/* Desktop Menu */}
        <NavItems />

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden absolute right-0 text-2xl text-gray-800"
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
