import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-7xl font-normal text-center tracking-tight text-white bg-clip-text animate-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your AI Tutor Awaits: Transforming the Way  {" "}
          <motion.div
            className="relative mx-auto inline-block w-max"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
          >
            <div
              className="absolute inset-0 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-glow [filter:drop-shadow(0_4px_10px_rgba(255,_105,_180,_0.5))]"
            >
              <span>You Learn Code</span>
            </div>
            <div
              className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            >
              <span>You Learn Code</span>
            </div>
          </motion.div>
        </motion.h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
