
"use client"

import { HeroSection } from "./hero-section"
import { Icons } from "./icons"
import { CustomDashboard } from "./custom-dashboard"

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
      actions={[
        {
          text: "Join Waitlist",
          href: "#waitlist",
          variant: "default",
        },
        {
          text: "View on GitHub",
          href: "https://github.com/vibedocs",
          variant: "outline",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        src: "/logo.png",
        alt: "Vibedocs AI Documentation Platform Preview",
        customComponent: <CustomDashboard />
      }}
    />
  )
}
