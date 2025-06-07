"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SG</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              SAAS Guys
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
            <Button 
              variant="outline" 
              className="border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-brand hover:opacity-90 text-white shadow-lg">
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm"
                >
                  Sign In
                </Button>
                <Button className="bg-gradient-brand hover:opacity-90 text-white shadow-lg">
                  Join Waitlist
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
