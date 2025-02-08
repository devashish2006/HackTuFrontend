import React, { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

export function FlipWordsDemo() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const words = ["Programming", "Skill", "Tech"];

  // Generate shooting stars
  const ShootingStar = () => (
    <motion.div
      className="absolute w-1 h-10 bg-gradient-to-t from-white via-gray-300 to-transparent rounded-full"
      initial={{
        opacity: 0,
        x: Math.random() * windowSize.width, // Random starting position across the full width
        y: Math.random() * -windowSize.height, // Random starting position above the screen
        scale: Math.random() * 0.5 + 0.7,
      }}
      animate={{
        opacity: 1,
        y: windowSize.height + 50, // Moves past the bottom of the screen
      }}
      transition={{
        duration: Math.random() * 1.5 + 1.5, // Randomized speed for variety
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );

  return (
    <div className="h-screen overflow-hidden relative flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      {/* Shooting Stars */}
      {Array.from({ length: 80 }).map((_, index) => (
        <ShootingStar key={index} />
      ))}

      {/* Main Content */}
      <motion.div
        className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white">Your AI Tutor Awaits</h1>
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
