import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 select-none group text-white tracking-[0.1em] font-extrabold text-2xl md:text-3xl leading-none">
      <span>VELON</span>
      <span className="w-2.5 h-2.5 bg-[#d3fd50] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
    </Link>
  );
};

export default Logo;
