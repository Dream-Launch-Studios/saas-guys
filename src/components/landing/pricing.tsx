import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Early Bird",
      price: "Free",
      period: "",
      description: "Perfect for trying out our AI documentation platform",
      features: [
        "3 projects per month",
        "Basic AI documentation",
        "Standard templates",
        "Email support",
        "Export to Markdown"
      ],
      cta: "Join Waitlist",
      popular: false,
      comingSoon: true
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      originalPrice: "$29",
      description: "For professional developers and small teams",
      features: [
        "Unlimited projects",
        "Advanced AI models",
        "Premium templates",
        "Priority support",
        "All export formats",
        "AI assistant (Codie)",
        "Custom integrations"
      ],
      cta: "Join Waitlist",
      popular: true,
      comingSoon: true
    },
    {
      name: "Team",
      price: "$79",
      period: "/month",
      originalPrice: "$99",
      description: "For growing teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin dashboard",
        "Custom templates",
        "API access",
        "White-label options",
        "Dedicated support"
      ],
      cta: "Join Waitlist",
      popular: false,
      comingSoon: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-sky-50/50 relative overflow-hidden">
      {/* Premium micro gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-sky-100/20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-blue-200/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-cyan-200/15 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Launch Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lock in early bird pricing by joining our waitlist today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/30 ${
                plan.popular 
                  ? 'shadow-2xl scale-105 border-blue-200/50' 
                  : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-brand text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    {plan.originalPrice && (
                      <span className="text-2xl text-gray-400 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-gray-600">{plan.period}</span>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Early Bird Special
                      </span>
                    </div>
                  )}
                </div>
                <CardDescription className="mt-4 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-brand hover:opacity-90 text-white shadow-lg' 
                      : 'border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md rounded-full px-8 py-4 border border-white/30 shadow-xl">
            <span className="text-sky-600 font-semibold text-lg">🎉 Limited Time:</span>
            <span className="text-gray-700 font-medium">40% off launch pricing for waitlist members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;