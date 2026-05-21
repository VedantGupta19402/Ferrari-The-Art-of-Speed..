import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import FlowingMenu from "./FlowingMenu";
import Clock from "../ui/Clock";

const MenuOverlay = ({ isMenuOpen, setIsMenuOpen }) => {
  const overlayRef = useRef(null);
  const colsRef = useRef([]);

  const menuItems = [
    {
      text: "Home",
      marqueeText: "Go home",
      link: "/",
      image: "/images/menu_home.png",
    },
    {
      text: "Agency",
      marqueeText: "Know us",
      link: "/agence",
      image: "/images/menu_agency.png",
    },
    {
      text: "Projects",
      marqueeText: "See everything",
      link: "/projects",
      image: "/images/menu_work.png",
    },
  ];

  useEffect(() => {
    const cols = colsRef.current;
    const content = overlayRef.current?.querySelector(".menu-content");

    if (!overlayRef.current || cols.length === 0 || !content) return;

    if (isMenuOpen) {
      // Open overlay state
      gsap.set(overlayRef.current, { visibility: "visible" });
      gsap.killTweensOf([cols, content]);

      gsap
        .timeline()
        .set(cols, { transformOrigin: "top center" })
        .to(cols, {
          scaleY: 1,
          duration: 0.65,
          stagger: 0.05,
          ease: "power3.inOut",
        })
        .fromTo(
          content,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.25"
        );
    } else {
      // Close overlay state
      gsap.killTweensOf([cols, content]);

      gsap
        .timeline({
          onComplete: () => {
            gsap.set(overlayRef.current, { visibility: "hidden" });
          },
        })
        .to(content, {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: "power2.in",
        })
        .set(cols, { transformOrigin: "bottom center" })
        .to(
          cols,
          {
            scaleY: 0,
            duration: 0.65,
            stagger: 0.04,
            ease: "power3.inOut",
          },
          "-=0.15"
        );
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 select-none pointer-events-none"
      style={{ visibility: "hidden" }}
    >
      {/* 5-Column sliding background */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (colsRef.current[i] = el)}
            className="bg-[#120F17] h-full w-full scale-y-0"
          />
        ))}
      </div>

      {/* Menu Content */}
      <div className="menu-content absolute inset-0 z-10 flex flex-col justify-between pt-28 pb-8 px-6 md:px-12 pointer-events-auto overflow-hidden">
        {/* Top: Lang switcher */}
        <div className="flex justify-between items-center text-xs font-mono">
          <div className="flex gap-2">
            <span className="text-[#F5F3EE] font-bold">EN</span>
            <span className="text-[#F5F3EE]/30">/</span>
            <button className="text-[#F5F3EE]/40 hover:text-[#F5F3EE] transition-colors duration-300">
              FR
            </button>
          </div>
        </div>

        {/* Center: Flowing Navigation */}
        <div className="flex-grow my-8 h-[50vh]">
          <FlowingMenu items={menuItems} onItemClick={handleLinkClick} />
        </div>

        {/* Bottom: Footer */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-t border-white/10 pt-6">
          {/* Clock */}
          <Clock city="MONTREAL" timezone="America/Montreal" />

          {/* Legal Links */}
          <ul className="flex flex-wrap justify-center gap-6 list-none m-0 p-0 text-[10px] md:text-xs font-mono text-[#F5F3EE]/40">
            <li>
              <Link
                to="#"
                onClick={handleLinkClick}
                className="hover:text-[#F5F3EE] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={handleLinkClick}
                className="hover:text-[#F5F3EE] transition-colors duration-300"
              >
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={handleLinkClick}
                className="hover:text-[#F5F3EE] transition-colors duration-300"
              >
                Ethics Report
              </Link>
            </li>
          </ul>

          {/* Socials */}
          <ul className="flex items-center gap-3 list-none m-0 p-0 font-mono text-xs">
            {["FB", "IG", "IN", "BE"].map((social, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#F5F3EE]/60 hover:text-black hover:bg-[#d3fd50] hover:border-[#d3fd50] transition-all duration-300"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
