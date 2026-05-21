import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import HeroText from "./HeroText";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black select-none">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Hero Typography */}
      <HeroText />

      {/* Bottom Footer Copy & CTAs */}
      <HeroFooter />
    </div>
  );
};

export default Hero;
