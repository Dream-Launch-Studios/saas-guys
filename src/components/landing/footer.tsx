"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="relative bg-white overflow-hidden w-full mt-4 md:mt-20 py-20 flex items-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_white,transparent_75%)] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#3b82f6_0%,transparent_20%)] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3b82f6_0%,transparent_20%)] z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold text-2xl px-3 py-1 rounded-lg">
                V
              </button>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-xl font-semibold">
                VibeDocs
              </span>
            </div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="text-gray-600 text-sm sm:text-base mb-6"
            >
              Streamline your project documentation with AI-powered assistance. Generate PRDs, technical specs, and more in minutes.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 w-fit text-gray-600 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:after:rounded-full after:mt-2 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Features", "Pricing", "Documentation", "Support", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ ease: "linear", duration: 0.5 }}
                      href="#"
                      className="text-sm sm:text-base text-gray-600 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:after:rounded-full after:mt-2 pb-1"
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 w-fit text-gray-600 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:after:rounded-full after:mt-2 pb-1">
              Features
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "PRD Generator",
                "Technical Specs",
                "AI Assistant",
                "Team Collaboration",
                "Export Options",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "linear", duration: 0.5 }}
                    href="#"
                    className="text-sm sm:text-base text-gray-600 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:after:rounded-full after:mt-2 pb-1"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              Contact Us
            </h4>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              <a
                href="mailto:support@vibedocs.com"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-600 group transition-colors duration-300"
              >
                <div className="p-1.5 sm:p-2 rounded-md bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-300">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                support@vibedocs.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-600 group transition-colors duration-300"
              >
                <div className="p-1.5 sm:p-2 rounded-md bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-300">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                +91 98765 43210
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: "-100", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="relative mt-12 sm:mt-16 pt-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
          <p className="text-center text-sm sm:text-base text-gray-400">
            &copy; {new Date().getFullYear()} VibeDocs. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-28 -bottom-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400 rounded-full filter blur-[96px] sm:blur-[128px] opacity-10" />
      <div className="absolute -right-32 -top-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400 rounded-full filter blur-[96px] sm:blur-[128px] opacity-10" />
    </motion.footer>
  );
}
