import React from "react";
import { Compare } from "./ui/compare";

export function CompareDemo() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black flex justify-center items-center min-h-screen dark:bg-neutral-900 bg-neutral-100">
      <div
        className=" bg-gradient-to-r from-gray-900 via-gray-800 to-blackp-6 border rounded-3xl dark:bg-neutral-800 bg-white shadow-md border-neutral-200 dark:border-neutral-700"
      >
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
