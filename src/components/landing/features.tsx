"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/wobble-card";

export function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-gray-900"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-rose-gold-700">
            AI Code Chunking: Transform Repos to Markdown
          </h2>
          <p className="mt-4 text-left text-base/6 text-rose-gold-200">
            Effortlessly convert your entire codebase into markdown, pinpointing the most crucial chunks that elevate your prompts.
          </p>
        </div>
        <Image
          src="https://code.visualstudio.com/assets/home/home-screenshot-copilot.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-950">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-rose-gold-600">
          AI Docs Chunking: Streamline Your Documentation
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-rose-gold-200">
          Convert your documentation into markdown and rerun to fetch the latest files, ensuring you always have the most valuable information at your fingertips.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-gray-950">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-rose-gold-700">
            Future Features: Dependency Chain Analysis
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-rose-gold-200">
            Trace all related dependencies when selecting a file or function, providing context for modifications and ensuring you have the complete picture.
          </p>
        </div>
        <Image
          src="https://code.visualstudio.com/assets/home/swimlane-customized.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-5 md:-right-[50%] lg:-right-[2%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
