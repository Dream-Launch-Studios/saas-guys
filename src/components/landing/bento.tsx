"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/landing/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import CodeDocs from "@/public/code-docs.png";
import { OrbitingCirclesDemo } from "./oribiting-circle";

export function BentoGridThirdDemo() {
  return (
    <section className="relative bg-white py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffd7000a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_white,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[50rem] w-[50rem] bg-yellow-600/20 rounded-full blur-[128px]" />
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Updated heading section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-gold-300 via-rose-gold-400 to-rose-gold-500">
            Elevate Your Coding Experience with VibeDocs
          </h2>
          <p className="text-lg md:text-xl text-rose-gold-100/90 max-w-2xl mx-auto">
            Harness the power of AI to enhance your coding efficiency and streamline your development process with our innovative code editor.
          </p>
        </div>

        {/* Bento grid */}
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-rose-gold-400/[0.2] p-2  items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-gold-300 to-rose-gold-500 flex-shrink-0" />
        <div className="w-full h-4 rounded-full bg-rose-gold-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-rose-gold-400/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
      >
        <div className="w-full  h-4 rounded-full bg-rose-gold-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-gold-300 to-rose-gold-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-rose-gold-400/[0.2] p-2 items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-gold-300 to-rose-gold-500 flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-rose-gold-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    // <motion.div
    //   initial="initial"
    //   animate="animate"
    //   whileHover="hover"
    //   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2"
    // >
    //   {arr.map((_, i) => (
    //     <motion.div
    //       key={"skelenton-two" + i}
    //       variants={variants}
    //       style={{
    //         maxWidth: Math.random() * (100 - 40) + 40 + "%",
    //       }}
    //       className="flex flex-row rounded-full border border-rose-gold-400/[0.2] p-2  items-center space-x-2 bg-white w-full h-4"
    //     ></motion.div>
    //   ))}
    // </motion.div>
    <OrbitingCirclesDemo/>
  );
};
const SkeletonThree = () => {
  const _variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <Image alt="Smart" src={CodeDocs}/>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 bg-white border-rose-gold-400/[0.2] border  flex flex-col items-center justify-center"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1678937608953-f4821e42dcdb?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 "
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-rose-gold-500 mt-4">
          Basic Telegram Bot
        </p>
        <p className="border border-rose-gold-500 bg-rose-gold-100 dark:bg-rose-gold-900/20 text-rose-gold-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Starter
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl p-4 bg-white border border-rose-gold-400/[0.3]  flex flex-col items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3432&auto=format&fit=crop"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-rose-gold-500 mt-4">
          AI-Powered Bot
        </p>
        <p className="border border-rose-gold-500 bg-rose-gold-600 dark:bg-rose-gold-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Pro
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 bg-white border-rose-gold-400/[0.2] border  flex flex-col items-center justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1542185400-f1c993ecbea2?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-rose-gold-500 mt-4">
          Enterprise Bot Solution
        </p>
        <p className="border border-rose-gold-500 bg-rose-gold-800 dark:bg-rose-gold-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Enterprise
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-rose-gold-400/[0.2] p-2  items-start space-x-2 bg-white"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1678937610952-94d467ca3b02?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-rose-gold-400">
          Build powerful Telegram bots with our no-code platform and AI capabilities...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-rose-gold-400/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-autobg-white"
      >
        <p className="text-xs text-rose-gold-400">Start Building Now</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-gold-300 to-rose-gold-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "AI IDE Integration",
    description: (
      <span className="text-sm">
        Seamlessly integrate your code and documentation into AI IDEs like Cursor, Bolt.New, Codium, and GitHub Copilot
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-rose-gold-500" />,
  },
  {
    title: "Local API Key Management",
    description: (
      <span className="text-sm">
        Bring your own API keys to ensure complete control over your integrations and sensitive data management.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-rose-gold-500" />,
  },
  {
    title: "Markdown Documentation",
    description: (
      <span className="text-sm">
        Consolidate your private repositories into a single markdown file, allowing you to chunk and access the parts you need efficiently.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-rose-gold-500" />,
  },
  {
    title: "AI-Powered Documentation Generation",
    description: (
      <span className="text-sm">
        Utilize large context models like Gemini to generate comprehensive documentation from your entire codebase.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-rose-gold-500" />,
  },
  {
    title: "Multi-language Support",
    description: (
      <span className="text-sm">
        Effortlessly deploy your bot in multiple languages with AI-driven translation capabilities.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-rose-gold-500" />,
  },
]