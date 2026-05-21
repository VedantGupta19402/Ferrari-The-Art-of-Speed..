import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";
import BurgerButton from "../ui/BurgerButton";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 pointer-events-none">
      {/* Logo */}
      <div className="pointer-events-auto">
        <Logo />
      </div>

      {/* Quick Nav (Desktop) & Burger Menu */}
      <div className="flex items-center gap-6 md:gap-12 pointer-events-auto">
        <nav className="hidden md:flex items-center h-20">
          <ul className="flex items-center h-full m-0 p-0 list-none">
            <li className="h-full relative flex items-center">
              <Link
                to="/projects"
                className={`h-10 flex items-center px-6 font-mono text-xs uppercase tracking-widest no-underline transition-all duration-300 relative overflow-hidden group select-none ${
                  location.pathname === "/projects"
                    ? "bg-[#d3fd50] text-black"
                    : "text-[#F5F3EE] hover:text-black"
                }`}
              >
                <span className="relative z-10">PROJECTS</span>
                <span className="absolute inset-0 bg-[#d3fd50] -translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0 z-0"></span>
              </Link>
            </li>
            <li className="h-full relative flex items-center border-l border-white/10">
              <Link
                to="/agence"
                className={`h-10 flex items-center px-6 font-mono text-xs uppercase tracking-widest no-underline transition-all duration-300 relative overflow-hidden group select-none ${
                  location.pathname === "/agence"
                    ? "bg-[#d3fd50] text-black"
                    : "text-[#F5F3EE] hover:text-black"
                }`}
              >
                <span className="relative z-10">AGENCY</span>
                <span className="absolute inset-0 bg-[#d3fd50] -translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0 z-0"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Trigger */}
        <BurgerButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
