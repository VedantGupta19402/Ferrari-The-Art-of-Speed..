import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ children, to, onClick, variant = "outline", className = "" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-3.5 uppercase font-mono text-xs tracking-widest rounded-full transition-all duration-300 relative overflow-hidden select-none group";

  const variants = {
    outline:
      "border border-white/20 text-[#F5F3EE] hover:text-black hover:border-[#d3fd50]",
    solid: "bg-[#F5F3EE] text-black hover:text-black",
  };

  const fillStyle =
    variant === "solid"
      ? "bg-[#d3fd50]" // Solid fills to lime on hover
      : "bg-[#d3fd50]"; // Outline fills to lime on hover

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className={`absolute inset-0 ${fillStyle} translate-y-[102%] transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0 z-0`}
      ></span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export default CustomButton;
