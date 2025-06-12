"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TabletDisplay() {
  return (
    <div className="-mt-24 sm:-mt-48 mb-32 sm:mb-56 w-full bg-white relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative mx-auto max-w-5xl">
          {/* Aceternity UI style card */}
          <div className="max-w-5xl mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] w-full border-2 sm:border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[20px] sm:rounded-[30px] shadow-2xl"
            style={{
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-zinc-900">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 