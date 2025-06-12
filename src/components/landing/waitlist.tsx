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
        <h2 className="text-4xl font-bold text-rose-gold-500">
          Join Our Exclusive Waitlist
        </h2>

        <p className="mt-4 text-lg text-rose-gold-200/80">
          Be the first to know when we launch! Enter your email below to secure
          your spot on our waitlist 🚀
        </p>
        {isSubmitted ? (
          <p className="mt-4 text-lg text-rose-gold-200/80">
            Thank you for joining our waitlist! Stay tuned for updates!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2.5 rounded-md border border-rose-gold-300 bg-white text-white focus:outline-none focus:ring-2 focus:ring-rose-gold-500 transition duration-200"
            />
            {/* <button
              type="submit"
              className="mt-4 w-full rounded-md bg-gradient-to-r from-rose-gold-400 to-rose-gold-600 py-3 text-white hover:from-rose-gold-500 hover:to-rose-gold-700 transition duration-200"
            >
              Join Waitlist
            </button> */}
            <div className="mt-4 w-full flex justify-center sm:px-0">
              <button className="relative w-full inline-flex h-10 sm:h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-rose-gold-400 focus:ring-offset-2 focus:ring-offset-white">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme('colors.rose-gold.200')_0%,theme('colors.rose-gold.800')_50%,theme('colors.rose-gold.200')_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-6 sm:px-10 py-2 sm:py-4 text-base sm:text-lg font-bold text-rose-gold-200 backdrop-blur-3xl hover:text-rose-gold-100 transition-colors duration-300">
                  Join Waitlist
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
}
