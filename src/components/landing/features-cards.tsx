import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI Documentation Generation",
      description:
        "Generate comprehensive documentation, PRDs, and technical specs with our advanced AI assistant, saving hours of manual work.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Smart Version Control",
      description:
        "Keep documentation in sync with your codebase through intelligent versioning and automated updates.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Team Collaboration",
      description:
        "Enable real-time collaboration on documentation with built-in commenting, reviewing, and approval workflows.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Project Analysis",
      description:
        "Automatically analyze project structure and dependencies to generate accurate and up-to-date documentation.",
      icon: <IconCloud />,
    },
    {
      title: "Custom Templates",
      description:
        "Create and use custom documentation templates to maintain consistency across projects and teams.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Integration Ready",
      description:
        "Seamlessly integrate with your existing tools and workflows through our comprehensive API and plugins.",
      icon: <IconHelp />,
    },
    {
      title: "Security & Privacy",
      description:
        "Enterprise-grade security with local processing and encrypted data handling to protect your intellectual property.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Expert Support",
      description:
        "Access to dedicated support team and comprehensive documentation to ensure smooth implementation.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-500",
        (index === 0 || index === 4) && "lg:border-l border-gray-500",
        index < 4 && "lg:border-b border-gray-500"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-300 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-300 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-400 group-hover/feature:bg-blue-200 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-blue-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
