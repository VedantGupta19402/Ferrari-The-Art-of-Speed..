import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4"
      />
      {/* Dark overlay for typography contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};

export default BackgroundVideo;
