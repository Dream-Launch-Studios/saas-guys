import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/landing/timeline-solo";
import DesktopView from "@/public/desktop-view.png";
import llmSettings from "@/public/llm-setting-clean.png";
import scrapperSettings from "@/public/scraper-setting-clean.png";

export function TimelineDemo() {
  const data = [
    {
      title: "Add Codebases",
      content: (
        <div>
          <p className="text-rose-gold-500 text-xs md:text-sm font-normal mb-2 md:mb-8">
            The journey began with the integration of codebases, laying the
            foundation for future developments.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={DesktopView}
              alt="startup template"
              width={800}
              height={800}
              className="w-fit h-auto rounded-lg object-contain min-h-[200px] md:min-h-[400px] shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add Docs",
      content: (
        <div>
          <p className="text-rose-gold-500 text-xs md:text-sm font-normal mb-2 md:mb-8">
            Documentation was added to ensure clarity and ease of use for future
            developers.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={llmSettings}
              alt="llm settings template"
              width={800}
              height={800}
              className="w-fit h-auto rounded-lg object-contain min-h-[200px] md:min-h-[400px] shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI Remove Unnecessary Files",
      content: (
        <div>
          <p className="text-rose-gold-500 text-xs md:text-sm font-normal mb-2 md:mb-8">
            AI was utilized to remove unnecessary files, streamlining the
            project for better efficiency.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={DesktopView}
              alt="desktop view template"
              width={800}
              height={800}
              className="w-fit h-auto rounded-lg object-contain min-h-[200px] md:min-h-[400px] shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Prompt AI To Find Relevant Files",
      content: (
        <div>
          <p className="text-rose-gold-500 text-xs md:text-sm font-normal mb-2 md:mb-8">
            AI was prompted to find all relevant files, ensuring that only the
            most important assets were retained.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={llmSettings}
              alt="llm settings template"
              width={800}
              height={800}
              className="w-fit h-auto rounded-lg object-contain min-h-[200px] md:min-h-[400px] shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Integrate Cursor, Bolt, Lovable, V0, etc",
      content: (
        <div>
          <p className="text-rose-gold-500 text-xs md:text-sm font-normal mb-2 md:mb-8">
            The curated files and prompts were utilized in various projects such
            as Cursor, Bolt, Lovable, V0, and more.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={DesktopView}
              alt="desktop view template"
              width={800}
              height={800}
              className="w-fit h-auto rounded-lg object-contain  min-h-[400px] md:min-h-[400px] shadow-xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-fit">
      <Timeline data={data} />
    </div>
  );
}
