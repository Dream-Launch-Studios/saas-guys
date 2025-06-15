"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Users, Clock } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-br from-vibedocs-primary to-vibedocs-accent">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Join the Vibedocs Waitlist
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Be among the first to experience AI-powered documentation. Get early access, exclusive features, and special launch pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-2">Early Access</h3>
              <p className="text-blue-100 text-sm">Be first to try all features before public launch</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-2">Special Pricing</h3>
              <p className="text-blue-100 text-sm">40% off annual plans for waitlist members</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-2">Beta Features</h3>
              <p className="text-blue-100 text-sm">Access to exclusive beta features and integrations</p>
            </div>
          </div>

          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-white text-vibedocs-primary hover:bg-gray-100 font-semibold"
                  >
                    {isLoading ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                  <p className="text-blue-100">
                    We'll notify you as soon as Vibedocs is ready. Thanks for joining!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-blue-100 text-sm">
            <p>🔒 We respect your privacy. No spam, unsubscribe anytime.</p>
            <p className="mt-2">Join <strong>2,847</strong> developers already on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
