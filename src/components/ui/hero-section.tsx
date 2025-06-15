
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Glow } from "./glow";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import Image from "next/image";

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
}

export function HeroSection({
  badge,
  title,
  description,  
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-black",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-gray-500">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-gray-500 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex justify-center gap-4">
            <Button variant="default" size="lg" asChild className="bg-black hover:bg-gray-800 text-white">
              <a href="#waitlist" className="flex items-center gap-2">
                Join Waitlist
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-0 bg-white hover:bg-gray-100 text-black">
              <a href="https://github.com/vibedocs" className="flex items-center gap-2">
                <Icons.gitHub className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Image with Glow */}
          <div className="relative">
            <Image src="/dashboard.png" alt="VibeDocs" width={1248} height={765} className="w-full h-auto border-2 border-gray-200 rounded-lg z-10"/>

            <Glow
              variant="top"
              className="-z-10 opacity-50 -top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
