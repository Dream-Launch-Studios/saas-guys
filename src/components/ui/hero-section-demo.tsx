
"use client"

import { HeroSection } from "./hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "AI-Powered Documentation",
        action: {
          text: "Learn more",
          href: "#features",
        },
      }}
      title="Supercharge Your Vibe Coding with AI-Powered Documentation"
      description="Streamline your AI project documentation with ease. Generate PRDs, technical specs, and workflows automatically. Integrate seamlessly with your favorite AI coding tools."
      />
  )
}
