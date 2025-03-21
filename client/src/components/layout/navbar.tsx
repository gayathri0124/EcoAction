import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LeafIcon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#problem", label: "The Problem" },
    { href: "#solution", label: "Our Solution" },
    { href: "#features", label: "Features" },
    { href: "#take-action", label: "Take Action" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md" : "bg-white/95"
    )}>
      <nav className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-heading font-bold text-primary text-2xl">
          <LeafIcon size={28} />
          <span>EcoAction</span>
        </a>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </Button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-neutral-800 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    window.scrollTo({
                      top: target.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <Button 
          className="hidden md:block bg-primary hover:bg-primary/90 text-white"
          onClick={() => {
            const target = document.querySelector("#take-action");
            if (target) {
              window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth"
              });
            }
          }}
        >
          Join Now
        </Button>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block py-2 text-neutral-800 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const target = document.querySelector("#take-action");
                  if (target) {
                    window.scrollTo({
                      top: target.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Join Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
