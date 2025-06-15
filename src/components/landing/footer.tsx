import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-vibedocs-primary to-vibedocs-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl">Vibedocs</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-xs">
              AI-powered documentation platform for coding projects. Streamline your development workflow with intelligent docs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-vibedocs-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-vibedocs-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-vibedocs-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Integrations", "API", "Roadmap"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-vibedocs-primary transition-colors">
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Guides", "Templates", "Blog", "Community"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-vibedocs-primary transition-colors">
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-vibedocs-primary transition-colors">
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} Vibedocs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-vibedocs-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-vibedocs-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-vibedocs-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
