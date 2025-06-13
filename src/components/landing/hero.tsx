"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [joinWaitList, setJoinWaitList] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setJoinWaitList(false);
      } else {
        setJoinWaitList(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sm:h-[40rem] sm:mt-0 mt-32 h-[20rem] w-full overflow-x-hidden bg-white bg-dot-rose-gold-200/[0.6] relative flex items-center justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <div className="mb-0 text-center">
                <Button
                  variant="ghost"
                  className="rounded-full bg-white/40 backdrop-blur-md border border-rose-gold-300/20 text-rose-gold-200 hover:bg-rose-gold-900/20 hover:text-rose-gold-100 transition-all duration-300 text-xs sm:text-sm px-4 py-2"
                >
                  Generate comprehensive documentation with AI assistance
                  <text className="hidden sm:block">
                    , from PRDs to technical specs in minutes! 🚀
                  </text>
                </Button>
              </div>
              <h1 className="text-black my-8 sm:w-full sm:mt-20 text-4xl sm:text-3xl lg:text-6xl font-bold px-4 sm:px-0">
                <text className="text-clip bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                  VibeDocs<span className="sm:visible hidden">:</span>{" "}
                </text>
                <span className="font-thin italic text-black">
                  Your AI-Powered Documentation Assistant
                </span>
              </h1>
            </div>
            {joinWaitList && (
              <div className="flex justify-center px-4 sm:px-0 opacity-100 transition-opacity ease-out duration-500">
                <button className="relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-rose-gold-400 focus:ring-offset-2 focus:ring-offset-white">
                  <span className="inline-flex h-full w-full text-white bg-gradient-to-r from-blue-400 to-blue-700 cursor-pointer items-center justify-center rounded-full bg-white px-6 sm:px-10 py-2 sm:py-4 text-base sm:text-lg font-bold text-rose-gold-200 backdrop-blur-3xl hover:text-rose-gold-100 transition-colors duration-300">
                    Get Started Free &rarr;
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
