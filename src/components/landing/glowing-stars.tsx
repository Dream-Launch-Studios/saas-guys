"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn("relative w-full", className)}
    >
      <div className="absolute inset-0">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  // Responsive grid setup
  const stars = {
    mobile: 54,  // 9x6 grid for mobile
    tablet: 81,  // 9x9 grid for tablet
    desktop: 108 // 18x6 grid for desktop
  };
  
  const columns = {
    mobile: 9,
    tablet: 9,
    desktop: 18
  };

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentStars = windowWidth < 640 ? stars.mobile : 
                        windowWidth < 1024 ? stars.tablet : 
                        stars.desktop;

    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * currentStars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, [windowWidth]);

  const currentColumns = windowWidth < 640 ? columns.mobile : 
                        windowWidth < 1024 ? columns.tablet : 
                        columns.desktop;
  
  const currentStars = windowWidth < 640 ? stars.mobile : 
                      windowWidth < 1024 ? stars.tablet : 
                      stars.desktop;

  return (
    <div
      className="h-full w-full p-1"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(currentStars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`star-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
    />
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{ opacity: 0 }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-rose-500 blur-[1px] shadow-2xl shadow-rose-400"
    />
  );
};

export const GlowingStarIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="relative h-1 w-1 rounded-full bg-rose-400"
    >
      <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-rose-500 blur-sm" />
    </motion.div>
  );
}; 