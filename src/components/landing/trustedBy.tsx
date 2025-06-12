"use client";
import Image from "next/image";

const companies = [
  {
    name: "VS Code",
    logo: "/logos/vscode.svg",
    width: 120,
    height: 60,
  },
  {
    name: "GitHub",
    logo: "/logos/github.svg",
    width: 120,
    height: 60,
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.svg",
    width: 120,
    height: 60,
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    width: 120,
    height: 60,
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    width: 120,
    height: 60,
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    width: 120,
    height: 60,
  },
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-black relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-white mb-12">
          Trusted by leading companies worldwide
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          
          {/* First Marquee */}
          <div className="flex animate-marquee gap-8">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex items-center justify-center min-w-[200px] h-16"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="object-contain filter invert brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Second Marquee (for seamless loop) */}
          <div className="flex animate-marquee2 gap-8 absolute top-0">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`${company.name}-${idx}-clone`}
                className="flex items-center justify-center min-w-[200px] h-16"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="object-contain filter invert brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 