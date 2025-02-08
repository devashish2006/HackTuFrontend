import React from "react";
import { Cover } from "./ui/cover";
import { motion } from "framer-motion";

export function CoverDemo() {
  const handleRedirect = () => {
    window.location.href = "https://www.aicademy.com"; // Replace with your desired URL
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-7xl mx-auto text-center px-4 sm:px-8 py-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-text">
        Start Your Learning with <br />
        <motion.button
          onClick={handleRedirect}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
        >
          <Cover>AICademy</Cover>
        </motion.button>
      </h1>
    </div>
  );
}
