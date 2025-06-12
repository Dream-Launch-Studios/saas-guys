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
      title: "AI-First Development",
      description:
        "Leverage cutting-edge AI technology to automate code analysis and documentation generation, reducing development time by up to 40%.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce development costs by automating repetitive tasks and streamlining documentation processes, leading to faster project delivery.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Team Productivity",
      description:
        "Empower your development team with AI-powered tools that enhance collaboration and accelerate the development lifecycle.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Quality Assurance",
      description:
        "Maintain high code quality with automated analysis and documentation, ensuring consistent standards across your projects.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Solution",
      description:
        "Easily scale your development operations with a platform that grows with your team and adapts to your changing needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "ROI Optimization",
      description:
        "Maximize return on investment with reduced development time, improved code quality, and enhanced team productivity.",
      icon: <IconHelp />,
    },
    {
      title: "Security First",
      description:
        "Keep your code secure with local processing and encrypted data handling. Your intellectual property stays protected at all times.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "24/7 Support",
      description:
        "Access round-the-clock technical support and comprehensive documentation to ensure smooth implementation and operation.",
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
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-rose-gold-300 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-rose-gold-300 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-rose-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-rose-gold-400 group-hover/feature:bg-rose-gold-200 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-rose-gold-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
