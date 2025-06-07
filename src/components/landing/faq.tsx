import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const FAQ = () => {
    const faqs = [
      {
        question: "When will SAAS Guys be available?",
        answer: "We're currently in development and planning to launch in Q2 2024. Waitlist members will get early access and special launch pricing when we're ready to go live."
      },
      {
        question: "What AI models will SAAS Guys use?",
        answer: "We're integrating with leading AI models including OpenAI GPT-4, Anthropic Claude, and Google's Gemini. This ensures you get the best possible documentation generation with cutting-edge AI technology."
      },
      {
        question: "Will there be integrations with development tools?",
        answer: "Yes! SAAS Guys will seamlessly integrate with popular AI development tools like GitHub Copilot, Claude AI, Cursor, Replit, and more. We'll provide tailored outputs optimized for your preferred development environment."
      },
      {
        question: "How much time can I actually save?",
        answer: "Based on our beta testing, users typically save 15-20 hours per project on documentation tasks. The platform automates the creation of PRDs, technical specs, user flows, and more, allowing you to focus on actual development."
      },
      {
        question: "What's included with early bird pricing?",
        answer: "Waitlist members will receive 40% off our regular pricing for their first year, plus priority access to new features and dedicated onboarding support when we launch."
      },
      {
        question: "How will the AI assistant 'Codie' work?",
        answer: "Codie will be powered by Google's Gemini API and provide real-time assistance throughout the documentation process. You'll be able to ask questions, request clarifications, or get help refining your generated documents through natural conversation."
      },
      {
        question: "Can I collaborate with my team?",
        answer: "Team collaboration features will be available on our Team plan at launch. You'll be able to invite team members, share projects, manage permissions, and work together on documentation in real-time."
      },
      {
        question: "What happens if I join the waitlist?",
        answer: "You'll be among the first to know when we launch, get access to exclusive early bird pricing, and receive updates on our development progress. No spam, just valuable updates about SAAS Guys."
      }
    ];
  
    return (
      <section id="faq" className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20 relative">
        {/* Micro gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-100/50 rounded-xl px-6 hover:border-blue-200 transition-colors bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent hover:from-blue-600 hover:to-cyan-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  