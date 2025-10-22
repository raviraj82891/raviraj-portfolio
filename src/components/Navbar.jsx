import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Ravi<span className="text-blue-500">.Raj</span>
          </a>
          
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-7 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className={`${
              menuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-[rgba(10,10,10,0.8)]" : "hidden"
            } md:flex md:items-center md:space-x-8`}
          >
            <a href="#home" className="text-gray-300 hover:text-white  transition-colors ">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white  transition-colors ">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white  transition-colors ">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white  transition-colors ">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};