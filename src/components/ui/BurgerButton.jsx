import React from "react";

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 group cursor-pointer focus:outline-none z-50 select-none py-2 px-1 relative"
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      {/* Label shifting */}
      <span className="font-mono text-xs uppercase tracking-widest text-[#F5F3EE] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {isOpen ? "CLOSE" : "MENU"}
      </span>

      {/* Hamburger / X Icon */}
      <div className="w-8 h-4 relative flex flex-col justify-between">
        <span
          className={`w-full h-[1.5px] bg-[#F5F3EE] transition-all duration-300 ease-in-out origin-center ${
            isOpen ? "rotate-45 translate-y-[7.25px] bg-[#d3fd50]" : "group-hover:translate-x-1"
          }`}
        ></span>
        <span
          className={`w-full h-[1.5px] bg-[#F5F3EE] transition-all duration-300 ease-in-out origin-center ${
            isOpen ? "-rotate-45 -translate-y-[7.25px] bg-[#d3fd50]" : "w-2/3 self-end group-hover:w-full"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default BurgerButton;
