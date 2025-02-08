import React from "react";
import { Cover } from "./ui/cover";

export function CoverDemo() {
  const handleRedirect = () => {
    window.location.href = "https://www.aicademy.com"; // Replace with your desired URL
  };

  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Start Your Learning with <br />
        at{" "}
        <button
          onClick={handleRedirect}
          className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition duration-300 rounded-lg shadow-md"
        >
          <Cover>AICademy</Cover>
        </button>
      </h1>
    </div>
  );
}
