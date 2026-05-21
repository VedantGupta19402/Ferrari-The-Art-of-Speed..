import React from "react";
import CustomButton from "../ui/CustomButton";

const HeroFooter = () => {
  return (
    <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 z-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-auto">
      {/* Left side: description copy */}
      <div className="max-w-md">
        <p className="font-lausanne text-sm md:text-base leading-relaxed text-[#F5F3EE]/80 indent-0 md:indent-8">
          We partner with ambitious <br className="hidden sm:inline" />
          brands to turn bold ideas <br className="hidden sm:inline" />
          into meaningful impact.
        </p>
      </div>

      {/* Right side: CTAs */}
      <div className="flex flex-wrap gap-4">
        <CustomButton to="/projects" variant="outline">
          Work
        </CustomButton>
        <CustomButton to="/projects" variant="outline">
          Projects
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroFooter;
