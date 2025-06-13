"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the submission to your backend
    setIsSubmitted(true);
  };

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="bg-white py-20 mx-10 sm:mx-0 mt-4 md:mt-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          Start Your Documentation Journey
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Get early access to VibeDocs and transform your documentation workflow with AI assistance. Sign up now to be among the first to experience the future of documentation! 🚀
        </p>
        {isSubmitted ? (
          <p className="mt-4 text-lg text-gray-600">
            Thank you for signing up! We'll be in touch soon with your early access details.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <div className="mt-4 w-full flex justify-center sm:px-0">
              <button className="relative w-full inline-flex h-10 sm:h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme('colors.blue.200')_0%,theme('colors.blue.800')_50%,theme('colors.blue.200')_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-6 sm:px-10 py-2 sm:py-4 text-base sm:text-lg font-bold text-blue-600 backdrop-blur-3xl hover:text-blue-700 transition-colors duration-300">
                  Get Early Access
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
}
