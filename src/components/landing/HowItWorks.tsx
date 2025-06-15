
import { ArrowRight, FileText, Settings, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Settings className="h-8 w-8 text-vibedocs-primary" />,
      title: "Create Your Project",
      description: "Start with our guided wizard. Enter your project details, select your AI tools, and answer a few targeted questions."
    },
    {
      step: "02", 
      icon: <FileText className="h-8 w-8 text-vibedocs-primary" />,
      title: "Generate Documentation",
      description: "Our AI engine creates comprehensive PRDs, technical specs, user flows, and architecture diagrams tailored to your project."
    },
    {
      step: "03",
      icon: <Download className="h-8 w-8 text-vibedocs-primary" />,
      title: "Review & Export",
      description: "Edit and refine your documentation, then export everything as Markdown, PDF, or HTML files ready for your development workflow."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm rounded-full bg-vibedocs-primary/10 text-vibedocs-primary border border-vibedocs-primary/20">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            From idea to documentation in minutes
          </h2>
          <p className="text-gray-600">
            Our streamlined process takes you from project concept to comprehensive documentation faster than ever.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-vibedocs-primary/50 to-vibedocs-accent/50"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 border-vibedocs-primary/10 hover:border-vibedocs-primary/30 transition-colors bg-white">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-vibedocs-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-vibedocs-primary text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-vibedocs-primary mx-auto md:hidden" />
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-vibedocs-light p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-vibedocs-dark">Ready to streamline your workflow?</h3>
            <p className="text-vibedocs-dark/80 mb-4">
              Join thousands of developers who are already saving hours on documentation with Vibedocs.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-vibedocs-dark/70">
              <span>⏱️ Save 17+ hours per project</span>
              <span>🎯 6.4M+ tokens saved</span>
              <span>📈 99% accuracy rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
