"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, FileText, Zap, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate waitlist signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
      {/* Premium micro gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-sky-100/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md border border-blue-200/50 shadow-lg mb-8">
              <Bot className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Coming Soon: Your AI Documentation Companion
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                Streamline Your AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Project Documentation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Generate comprehensive PRDs, technical specs, and workflows with AI assistance. 
              From project conception to finished documentation in minutes.
            </p>
            
            {/* Premium Waitlist Form */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    Join the Waitlist
                  </h3>
                  <p className="text-gray-600">Be first to experience the future of AI documentation</p>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-12 border-blue-200 focus:border-blue-400 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-brand hover:opacity-90 text-white h-12 text-lg font-semibold shadow-lg"
                    >
                      Get Early Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="text-xl font-semibold text-green-600 mb-2">You're on the list!</h4>
                    <p className="text-gray-600">We'll notify you when SAAS Guys launches.</p>
                  </div>
                )}
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Join 10,000+ developers already on the waitlist
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/40 backdrop-blur-sm rounded-full px-4 py-3 border border-white/30">
                <Zap className="w-5 h-5 text-sky-500" />
                <span className="font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/40 backdrop-blur-sm rounded-full px-4 py-3 border border-white/30">
                <FileText className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Auto-Generated</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/40 backdrop-blur-sm rounded-full px-4 py-3 border border-white/30">
                <Bot className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;