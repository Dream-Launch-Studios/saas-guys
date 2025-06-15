
import { FileText, Zap, Bot, Code, Database, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "AI Documentation Generator",
      description: "Automatically generate PRDs, technical specs, architecture diagrams, and user flows using advanced AI models."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Project Creation Wizard",
      description: "Step-by-step guided setup that helps you define core features, goals, and requirements for any project."
    },
    {
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      title: "AI Assistant (Codie)",
      description: "Interactive chatbot powered by Gemini AI to answer questions, clarify requirements, and refine documents."
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "AI Tools Integration",
      description: "Seamless integration with Claude, GPT, Copilot, Cursor, and other popular AI development tools."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Starter Kit Library",
      description: "Pre-configured project templates with best practices for AI-assisted development across tech stacks."
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-600" />,
      title: "Smart Workflows",
      description: "Optimized prompts and workflows that save API tokens while maintaining high-quality output."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Everything you need for AI-powered development
          </h2>
          <p className="text-gray-600">
            Vibedocs provides all the tools to streamline your project documentation and integrate seamlessly with AI coding tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
