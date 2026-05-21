import React from "react";

const Agence = () => {
  return (
    <main className="w-full min-h-screen bg-[#120F17] pt-32 px-6 md:px-12 lg:px-20 flex flex-col justify-between pb-12 select-none">
      <div className="max-w-5xl">
        <h1 className="font-lausanne font-extrabold text-[8.5vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] uppercase text-[#F5F3EE] tracking-tighter mb-12">
          The <br className="md:hidden" /> Agency
        </h1>
        <p className="font-lausanne text-lg md:text-2xl text-[#F5F3EE]/80 leading-relaxed max-w-3xl indent-0 md:indent-12 mb-16">
          VELON is an independent creative collective that crafts brands, narratives, and digital spaces. We build for the future, embracing friction to produce strategy and design infused with raw, authentic emotion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3fd50] mb-4">Our Focus</h3>
            <p className="text-sm text-[#F5F3EE]/60 leading-relaxed">
              We operate at the intersection of cultural shift and commercial momentum, aligning brand strategy with high-end digital design.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3fd50] mb-4">Our Method</h3>
            <p className="text-sm text-[#F5F3EE]/60 leading-relaxed">
              No templates, no comfort zones. We provoke dialogue and craft unique identities tailored to ambitious partners.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3fd50] mb-4">Our Promise</h3>
            <p className="text-sm text-[#F5F3EE]/60 leading-relaxed">
              Complete transparency. We are all-in on every project, maintaining absolute honesty from vision through execution.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-[10px] font-mono text-[#F5F3EE]/30 tracking-widest uppercase">
        © 2026 VELON. All Rights Reserved.
      </div>
    </main>
  );
};

export default Agence;
