
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const starterFeatures = [
    "Up to 5 projects per month",
    "Basic AI documentation generation",
    "Standard templates & starter kits",
    "Export to Markdown & PDF",
    "Email support"
  ];

  const proFeatures = [
    "Everything in Starter, plus:",
    "Unlimited projects",
    "Advanced AI models (GPT-4, Claude)",
    "Custom templates & workflows",
    "API access & integrations",
    "Priority support",
    "Team collaboration (up to 10 users)",
    "Advanced analytics & insights"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm rounded-full bg-vibedocs-primary/10 text-vibedocs-primary border border-vibedocs-primary/20">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600">
            Start free, scale as you grow. All plans include early access and special launch pricing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-gray-200 overflow-hidden relative">
            <div className="p-8">
              <h3 className="font-semibold text-xl mb-2">Starter</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for individual developers and small projects.</p>
              
              <Button asChild size="lg" variant="outline" className="w-full border-vibedocs-primary text-vibedocs-primary hover:bg-vibedocs-light">
                <Link href="#waitlist">Join Waitlist</Link>
              </Button>
            </div>
            
            <div className="px-8 pb-8">
              <div className="pt-6 border-t">
                <ul className="space-y-3">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-vibedocs-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-vibedocs-primary" />
                        </div>
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="border-2 border-vibedocs-primary overflow-hidden relative bg-gradient-to-br from-white to-vibedocs-light/30">
            <div className="absolute top-0 right-0 bg-vibedocs-primary text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
              MOST POPULAR
            </div>
            
            <div className="p-8">
              <h3 className="font-semibold text-xl mb-2">Pro</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500 ml-2">/month</span>
                <span className="ml-3 text-sm text-vibedocs-primary bg-vibedocs-light px-2 py-1 rounded-full">40% off first year</span>
              </div>
              <p className="text-gray-600 mb-6">For teams and professionals who need advanced features and unlimited usage.</p>
              
              <Button asChild size="lg" className="w-full bg-vibedocs-primary hover:bg-vibedocs-accent">
                <Link href="#waitlist">Join Waitlist</Link>
              </Button>
            </div>
            
            <div className="px-8 pb-8">
              <div className="pt-6 border-t">
                <ul className="space-y-3">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-vibedocs-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-vibedocs-primary" />
                        </div>
                      </div>
                      <span className={`text-sm ${index === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">
            Need a custom enterprise solution? <Link href="#" className="text-vibedocs-primary underline">Contact us</Link> for pricing and features.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="font-semibold text-xl mb-6">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium mb-2">When will Vibedocs be available?</h4>
                <p className="text-gray-600 text-sm">We're launching in Q2 2024. Waitlist members get priority access and special pricing.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">What AI models do you support?</h4>
                <p className="text-gray-600 text-sm">We integrate with GPT-4, Claude, Gemini, and other leading AI models for optimal results.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Can I cancel my subscription anytime?</h4>
                <p className="text-gray-600 text-sm">Yes, you can cancel anytime. Your plan remains active until the end of your billing period.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Do you offer refunds?</h4>
                <p className="text-gray-600 text-sm">We offer a 30-day money-back guarantee for all paid plans, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
