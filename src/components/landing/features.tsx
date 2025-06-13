"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/wobble-card";

export function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px] bg-gray-900"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-blue-100">
            AI-Powered Documentation Generation
          </h2>
          <p className="mt-4 text-left text-base/6 text-gray-200">
            Transform your project requirements into comprehensive documentation with our advanced AI assistant. Generate PRDs, technical specs, and more in minutes.
          </p>
        </div>
        <Image
          src="https://code.visualstudio.com/assets/home/home-screenshot-copilot.png"
          width={500}
          height={500}
          alt="VibeDocs AI Documentation"
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-950">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-blue-100">
          Smart Documentation Management
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-200">
          Organize and maintain your documentation with intelligent versioning, real-time collaboration, and automated updates. Keep your team in sync with the latest changes.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-gray-950">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-blue-100">
            Intelligent Project Analysis
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-200">
            Automatically analyze your project structure, dependencies, and requirements to generate accurate and comprehensive documentation that evolves with your codebase.
          </p>
        </div>
        <Image
          src="https://code.visualstudio.com/assets/home/swimlane-customized.png"
          width={500}
          height={500}
          alt="VibeDocs Project Analysis"
          className="absolute -right-5 md:-right-[50%] lg:-right-[2%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
