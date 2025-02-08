"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-8 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-6 w-6 text-cyan-500" />}
        title="Real-Time Code Editor"
        description="Practice coding directly within our platform using the built-in real-time code editor, complete with error detection and suggestions."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-6 w-6 text-purple-500" />}
        title="AI-Driven Progress Tracking"
        description="Monitor your learning progress with AI-driven insights, helping you focus on areas that need improvement."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-6 w-6 text-pink-500" />}
        title="Localized Learning Support"
        description="Learn seamlessly with examples and insights tailored to your region and context, making complex concepts relatable and easier to grasp."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-6 w-6 text-yellow-500" />}
        title="Course Personalization"
        description="Our platform tailors learning experiences to meet individual needs. By analyzing user preferences and learning pace, we create customized recommendations."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-6 w-6 text-green-500" />}
        title="Text-to-Speech (TTS)"
        description="Our integrated Text-to-Speech feature enhances accessibility by converting written content into clear and natural-sounding audio."
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-black p-4 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={72}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden p-6">
          <div className="w-fit rounded-lg bg-gray-700 p-3 shadow-inner">
            {icon}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GlowingEffectDemo;
