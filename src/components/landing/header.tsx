"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Vibedocs Logo" 
              width={32}
              height={32}
            />
            <span className="font-bold text-xl">Vibedocs</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 ml-10">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-vibedocs-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-vibedocs-primary">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-vibedocs-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-vibedocs-primary">
              Documentation
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#">Sign In</Link>
          </Button>
          <Button asChild className="bg-vibedocs-primary hover:bg-vibedocs-accent">
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-2 pb-6 border-b bg-background">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-vibedocs-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-sm font-medium transition-colors hover:text-vibedocs-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm font-medium transition-colors hover:text-vibedocs-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium transition-colors hover:text-vibedocs-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" asChild className="justify-center">
                <Link href="#">Sign In</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
