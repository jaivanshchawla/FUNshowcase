"use client";

import { motion } from "motion/react";

function GradientBars({ bars = 20, colors = ["#e60a64", "transparent"] }) {
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 text-white">
        <a href="#" className="text-sm font-semibold tracking-[0.18em] uppercase">
          Project Showcase
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <GradientBars />
      <TopNav />
    </main>
  );
}
