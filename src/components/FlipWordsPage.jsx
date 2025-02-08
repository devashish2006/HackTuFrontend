import React from "react";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

export function FlipWordsDemo() {
  const words = ["Programming", "Skill", "Tech"];

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <motion.div
        className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text">
          Your AI Tutor Awaits
        </h1>
        <p className="mt-6 text-neutral-400 text-lg md:text-2xl">
          Transforming the Way You Learn
        </p>
        <div className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-glow">
          <FlipWords words={words} />
        </div>
        <motion.button
          className="mt-10 px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Start Learning Today!")}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
