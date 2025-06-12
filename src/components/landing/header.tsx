"use client";
import Image from "next/image";
import Logo from "@/public/Link.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import SoloLogo from "@/public/logo.png";
import { motion } from "framer-motion";
import { ItemVariants, LinksVariants, modalVariants } from "@/utils/variants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        // Assuming hero.tsx is around 500px from the top
        setShowDownloadButton(true);
      } else {
        setShowDownloadButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 sm:w-full">
      <div className="w-11/12 mx-auto px-4">
        <div className="bg-white/40 backdrop-blur-md rounded-lg border border-rose-gold-300/20">
          <motion.div className="flex justify-between items-center h-14 px-4">
            <Link
              href="https://neutralbase.com/"
              className="flex items-center space-x-2"
            >
              <button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold text-2xl px-3 py-1 rounded-lg">
                V
              </button>
              <text className="text-clip bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-2xl font-bold px-2">
                VibeDocs
              </text>
            </Link>

            <button
              className="xl:hidden p-2 text-rose-gold-200 hover:text-rose-gold-100 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <motion.div
              variants={LinksVariants}
              className="hidden xl:flex items-center space-x-8"
            >
              {showDownloadButton && (
                <button className="bg-gradient-to-r from-rose-gold-200 to-rose-gold-400 hover:from-rose-gold-300 hover:to-rose-gold-500 text-white font-semibold p-1.5 px-6 rounded-lg text-center transition-all duration-300">
                  Join Waitlist
                </button>
              )}
              <a
                href="#features"
                className="text-rose-gold-200 hover:text-rose-gold-100 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-rose-gold-200 hover:text-rose-gold-100 transition-colors"
              >
                Testimonials
              </a>
            </motion.div>
          </motion.div>

          {isMenuOpen && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="xl:hidden border-t border-rose-gold-300/20 py-4 px-4 space-y-4 h-96 flex items-center flex-col justify-center"
            >
              <motion.div
                className="space-y-4"
                variants={LinksVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.a
                  variants={ItemVariants}
                  href="#features"
                  className="block text-rose-gold-200 hover:text-rose-gold-100 transition-colors text-xl text-center font-medium "
                >
                  Features
                </motion.a>
                <motion.a
                  variants={ItemVariants}
                  href="#testimonials"
                  className="block text-rose-gold-200 hover:text-rose-gold-100 transition-colors text-xl text-center font-medium hover:italic"
                >
                  Testimonials
                </motion.a>
              </motion.div>

              {showDownloadButton && (
                <button className="w-full bg-gradient-to-r from-rose-gold-200 to-rose-gold-400 hover:from-rose-gold-300 hover:to-rose-gold-500 text-white font-semibold p-1.5 px-6 rounded-lg text-center transition-all duration-300">
                  Join Waitlist
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
