"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="w-full bg-white relative mb-16">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-rose-500/10 animate-pulse" />
          <div className="relative p-8 md:p-16 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Development?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8"
            >
              Join thousands of developers who are already leveraging AI to write better code, faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-rose-400 to-rose-500 p-[1px] transition-all hover:from-rose-500 hover:to-rose-600">
                <span className="relative inline-flex h-full w-full items-center gap-2 rounded-lg bg-zinc-950 px-8 py-3 text-white transition-all duration-200 group-hover:bg-opacity-0">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-3 text-white transition-colors hover:bg-zinc-900">
                View Documentation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 