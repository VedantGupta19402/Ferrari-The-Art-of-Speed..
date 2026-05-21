import React, { useState, useEffect } from "react";

const Clock = ({ city = "MONTREAL", timezone = "America/Montreal" }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        // Fallback to local time if timezone is invalid
        const local = new Date().toTimeString().split(" ")[0];
        setTime(local);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#F5F3EE]/60">
      <svg
        className="w-3.5 h-3.5 stroke-current opacity-70 animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
      <span>
        {city}_{time}
      </span>
    </div>
  );
};

export default Clock;
