import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  const faqItems = [
    {
      question: "What is CodeGuide and how does it help developers?",
      answer: "CodeGuide is an AI-powered documentation assistant that streamlines the entire project planning process. It automatically generates key planning documents like PRDs, technical workflows, and design prompts, saving time and reducing errors. Think of it as your AI companion that helps you go from project conception to finished documentation."
    },
    {
      question: "How does the AI Documentation Generator work?",
      answer: "Our AI Documentation Generator uses advanced LLMs (like OpenAI GPT, Anthropic Claude, or Google's Gemini) to create structured documents including PRDs, technical spec sheets, architecture diagrams, and user flows. It minimizes AI 'hallucinations' by cross-checking user inputs and generating consistent content."
    },
    {
      question: "What AI tools does CodeGuide integrate with?",
      answer: "CodeGuide integrates with popular AI development tools including Claude AI, Bolt, Lovable UI builder, VS Code + GitHub Copilot, Cursor, and Replit. The platform tailors outputs to these tools, providing optimized prompts and code snippets for your chosen environment."
    },
    {
      question: "What are Starter Kits and how do they help?",
      answer: "Starter Kits are pre-configured project templates that come with best practices for AI-assisted development. For example, our Next.js Starter Kit Lite provides authentication and database setup out of the box. These kits save initial setup time and include optimized prompts to reduce API token usage."
    },
    {
      question: "How does the Q&A Questionnaire Module work?",
      answer: "After entering project basics, our system presents a focused questionnaire with questions like 'What are the main objectives?' and 'Who is the target audience?' Your answers help fill in gaps and refine the project outline, ensuring the AI has complete context to generate accurate documentation."
    },
    {
      question: "What formats can I export my documentation in?",
      answer: "You can export your documentation in various formats including Markdown (for code), PDF (for prints), and HTML. We also offer one-click export to GitHub/GitLab as a repository or commit, making it easy to integrate documentation with your codebase."
    },
    {
      question: "How does the AI Assistant (Codie) help me?",
      answer: "Codie is our interactive chatbot powered by Google's Gemini API. It can answer questions, clarify requirements, or help refine generated documents in real time. You can ask Codie to simplify technical language, add examples, or guide you through filling out documents."
    },
    {
      question: "What metrics does the dashboard track?",
      answer: "The dashboard tracks key productivity metrics including Total Time Saved, Tokens Saved, and Projects Created. For example, you might see 'Time Saved: 17.3 Hours' and 'Tokens Saved: 6.4M'. These analytics provide instant feedback on the platform's value and encourage continued use."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Your AI Documentation Companion
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Get answers to common questions about how CodeGuide can help streamline your project documentation process. From AI integration to export options, we've got you covered.
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Need more help? Contact us <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
