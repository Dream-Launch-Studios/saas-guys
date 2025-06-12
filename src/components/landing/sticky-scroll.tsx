"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const content = [
  {
    title: "AI Code Chunking",
    description: "Transform entire repositories into structured markdowns and identify the most relevant code snippets for your queries. Our AI-powered system breaks down complex codebases into digestible, context-aware chunks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://code.visualstudio.com/assets/home/swimlane-customized.png"
          width={300}
          height={300}
          alt="Code Chunking"
          className="object-cover rounded-lg shadow-2xl"
        />
      </div>
    ),
  },
  {
    title: "AI Docs Chunking",
    description: "Extract the most valuable documentation sections, ensuring you're always up-to-date with the latest files. Compare raw documentation with refined, chunked output for maximum efficiency.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
        <Image
          src="https://code.visualstudio.com/assets/home/swimlane-anywhere.png"
          width={300}
          height={300}
          alt="Docs Chunking"
          className="object-cover rounded-lg shadow-2xl"
        />
      </div>
    ),
  },
  {
    title: "Dependency Chain Analysis",
    description: "Trace dependencies for better context and decision-making. Modifying an API endpoint? See all related middleware, models, and utility files at a glance with our interactive dependency graph.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://code.visualstudio.com/assets/home/swimlane-copilot.png"
          width={300}
          height={300}
          alt="Dependency Chain"
          className="object-cover rounded-lg shadow-2xl"
        />
      </div>
    ),
  },
];

export const StickyScroll = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  // Auto-scroll animation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      if (!isManualScrolling && ref.current) {
        const nextCard = (activeCard + 1) % content.length;
        const scrollAmount = (ref.current.scrollHeight / content.length) * nextCard;
        
        controls.start({
          //@ts-ignore
          scrollTop: scrollAmount,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }).then(() => {
          setActiveCard(nextCard);
        });
      }
    };

    timeoutId = setTimeout(startAutoScroll, 3000);
    return () => clearTimeout(timeoutId);
  }, [activeCard, isManualScrolling, controls]);

  // Handle manual scrolling
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="w-full bg-black relative overflow-hidden my-32 sm:my-52" ref={containerRef}>
      <motion.div
        ref={ref}
        animate={controls}
        onMouseEnter={() => setIsManualScrolling(true)}
        onMouseLeave={() => setIsManualScrolling(false)}
        onTouchStart={() => setIsManualScrolling(true)}
        onTouchEnd={() => setIsManualScrolling(false)}
        className="w-full h-[30rem] sm:h-[40rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative space-y-6 lg:space-y-0 lg:space-x-10 rounded-md p-4 sm:p-10 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="my-12 sm:my-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <motion.h2
                  className="text-xl sm:text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg text-slate-300 max-w-sm mt-6 sm:mt-10"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
            <div className="h-20 sm:h-40" />
          </div>
        </div>
        <motion.div
          className="hidden lg:block h-60 sm:h-80 w-72 sm:w-96 rounded-md bg-white sticky top-10 overflow-hidden"
          animate={{
            scale: activeCard === content.length - 1 ? 0.95 : 1,
            opacity: activeCard === content.length - 1 ? 0.8 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {content[activeCard].content}
        </motion.div>
      </motion.div>
    </div>
  );
}; 