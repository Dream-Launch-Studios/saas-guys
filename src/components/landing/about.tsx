"use client";
import React from "react";
import { GlowingStarsEffect, GlowingStarIcon } from "@/components/landing/glowing-stars";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Smart Search",
      description: "No more wasting time searching through code and docs",
      delay: 0.1,
    },
    {
      title: "Complex Repos",
      description: "Effortlessly manage large, complex repositories",
      delay: 0.2,
    },
    {
      title: "Seamless Integration",
      description: "Works with Copilot, VibeDocs, Cursor, and more",
      delay: 0.3,
    },
  ];

  return (
    <div className="w-full bg-white relative min-h-screen">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <GlowingStarsEffect>
          <div className="relative pt-20 pb-20">            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12"
            >
              Revolutionizing How Developers Work with AI
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
            >
              We solve the most pressing challenges developers face daily, from managing complex codebases to streamlining documentation workflows.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="group relative bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 border border-gray-800"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <GlowingStarIcon />
                      <h3 className="text-lg md:text-xl font-semibold text-rose-400 group-hover:text-rose-300 transition-colors">{feature.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </GlowingStarsEffect>
      </div>
    </div>
  );
} 