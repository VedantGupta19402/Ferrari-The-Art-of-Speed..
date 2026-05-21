import React from "react";

const Projects = () => {
  const selectedCases = [
    {
      title: "iA Financial Group",
      category: "Rebranding / Art Direction",
      year: "2025",
      image: "/images/menu_work.png",
    },
    {
      title: "Jean Coutu PJC",
      category: "Digital Platform / UX / UI",
      year: "2025",
      image: "/images/menu_agency.png",
    },
    {
      title: "Carl Collective",
      category: "Campaign / Design System",
      year: "2024",
      image: "/images/menu_home.png",
    },
    {
      title: "Velon Lab Spaces",
      category: "Spatial Architecture / 3D",
      year: "2024",
      image: "/images/menu_work.png",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#120F17] pt-32 px-6 md:px-12 lg:px-20 pb-12 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h1 className="font-lausanne font-extrabold text-[8.5vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] uppercase text-[#F5F3EE] tracking-tighter">
            Selected <br className="hidden md:inline" /> Work
          </h1>
          <p className="font-lausanne text-[#F5F3EE]/60 text-sm max-w-xs leading-relaxed md:mb-2">
            A curated index of strategic partnerships, creative breakthroughs, and digital transformations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-t border-white/10 pt-16">
          {selectedCases.map((project, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-[8px] bg-neutral-900 border border-white/5 mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#F5F3EE]/80 px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.year}
                </span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-lausanne font-bold text-lg md:text-xl text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#d3fd50]">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F5F3EE]/40 mt-1">
                    {project.category}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#F5F3EE]/60 group-hover:text-black group-hover:bg-[#d3fd50] group-hover:border-[#d3fd50] transition-all duration-300">
                  <svg
                    className="w-4 h-4 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
