import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Programming", "Skill", "Tech"];

  return (
    (<div className="h-[40rem] flex justify-center items-center px-4">
      <div
        className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Your AI Tutor Awaits:<br></br> Transforming the Way You Learn
        <FlipWords words={words} /> <br />
        
      </div>
    </div>)
  );
}
