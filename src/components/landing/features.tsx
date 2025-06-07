import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Zap, Code, Users, Download } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-sky-500" />,
      title: "Project Creation Wizard",
      description: "Step-by-step guided setup interface that helps you define core features and project goals with AI assistance."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "AI Documentation Generator",
      description: "Generate comprehensive PRDs, technical specs, architecture diagrams, and user flows automatically."
    },
    {
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      title: "Meet Codie - Your AI Assistant",
      description: "Interactive chatbot powered by Google's Gemini API to refine documents and answer questions in real-time."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "AI Tools Integration",
      description: "Seamless integration with popular AI development tools like Claude, Copilot, Cursor, and Replit."
    },
    {
      icon: <Users className="w-8 h-8 text-sky-600" />,
      title: "Starter Kit Library",
      description: "Access pre-configured project templates with best practices for AI-assisted development."
    },
    {
      icon: <Download className="w-8 h-8 text-cyan-600" />,
      title: "Export & Share",
      description: "Download your documentation as Markdown, PDF, or HTML. Share with stakeholders effortlessly."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 relative">
      {/* Micro gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create comprehensive project documentation with AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-blue-100/50 hover:border-blue-200 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm w-fit group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
