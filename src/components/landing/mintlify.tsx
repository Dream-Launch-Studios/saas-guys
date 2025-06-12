"use client";
import { useState } from "react";
import ScrapperSettings from "@/public/scraper-setting.png";
import llmSettings from "@/public/llm-setting.png";
import codeDocs from "@/public/code-docs.png";
import Image from "next/image";
import ScrapperSettingsClean from "@/public/scraper-setting-clean.png";
import llmSettingsClean from "@/public/llm-setting-clean.png";
import codeDocsClean from "@/public/code-docs-clean.png";

import { PaginationItem } from "@/components/landing/pagination-item";

export interface Theme {
  title: string;
  title2: string;
  description: string;
  imageDark: any;
  imageMobile: any;
  alt: string;
}

export interface PaginationItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const themes: Theme[] = [
  {
    title: "Comprehensive Code Documentation",
    title2: "Code Documentation",
    description:
      "Explore detailed documentation to enhance your coding experience and productivity.",
    imageDark: codeDocs,
    imageMobile: codeDocsClean,
    alt: "Product UI Mockup - Code Documentation",
  },
  {
    title: "Comprehensive Code Documentation",
    title2: "LLM Settings",
    description:
      "Configure your language model settings for optimal performance and customization.",
    imageDark: llmSettings,
    imageMobile: llmSettingsClean,
    alt: "Product UI Mockup - LLM Settings",
  },
  {
    title: "Comprehensive Code Documentation",
    title2: "AI Codeket Scrapper Settings",
    description:
      "Configure your scrapper settings for optimal performance and data extraction.",
    imageDark: ScrapperSettings,
    imageMobile: ScrapperSettingsClean,
    alt: "Product UI Mockup - AI Codeket Scrapper Settings",
  },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="relative flex flex-col lg:flex-row min-h-screen md:mt-4">
          {/* Left Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-6 mb-20 md:mb-0">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-gold-300 to-rose-gold-600 bg-clip-text text-transparent mb-6">
              Comprehensive Code <br /> Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-lg">
              Explore detailed documentation to enhance your coding experience
              and productivity.
            </p>

            {/* Navigation */}
            <div className="flex flex-col space-y-4">
              {themes.map((theme, index) => (
                <PaginationItem
                  key={index}
                  label={theme.title2}
                  isActive={currentIndex === index}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="absolute lg:relative lg:w-10/12 inset-0 mt-60 justify-end hidden lg:block">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  className="rounded-lg w-11/12 h-11/12 object-cover ml-[400px]"
                  width={800}
                  height={800}
                  src={theme.imageDark}
                  alt={theme.alt}
                />{" "}
                {/* Adjusted width and height for better fit */}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Image Section */}
        <div className="lg:hidden -mt-32 ml-6">
          <div className={`transition-opacity duration-500 opacity-100`}>
            <Image
              className="rounded-lg w-11/12 h-11/12 object-cover"
              width={800}
              height={800}
              src={themes[currentIndex]?.imageMobile || ""}
              alt={themes[currentIndex]?.alt || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
