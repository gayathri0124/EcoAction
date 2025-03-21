import { LeafIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { validateEmail } from "@/lib/utils/validation";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { toast } = useToast();

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    
    setEmailError(false);
    
    toast({
      title: "Thank you for subscribing!",
      description: "You've been successfully subscribed to our newsletter.",
      duration: 3000,
    });
    
    setEmail("");
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { href: "#problem", label: "The Problem" },
        { href: "#solution", label: "Our Solution" },
        { href: "#features", label: "Features" },
        { href: "#take-action", label: "Take Action" },
        { href: "#contact", label: "Contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "#", label: "Blog" },
        { href: "#", label: "Climate Data" },
        { href: "#", label: "Research" },
        { href: "#", label: "Partners" },
        { href: "#", label: "FAQ" }
      ]
    }
  ];

  const socialLinks = [
    { href: "#", icon: "ri-twitter-fill", label: "Twitter" },
    { href: "#", icon: "ri-facebook-fill", label: "Facebook" },
    { href: "#", icon: "ri-instagram-fill", label: "Instagram" },
    { href: "#", icon: "ri-linkedin-fill", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 font-bold text-white text-2xl mb-4">
              <LeafIcon className="text-primary-light" size={24} />
              <span>EcoAction</span>
            </a>
            <p className="text-neutral-400 mb-6">
              Empowering individuals and communities to take meaningful action on climate change.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-neutral-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const elementId = link.href.substring(1); // Remove the # character
                          const target = document.getElementById(elementId);
                          if (target) {
                            window.scrollTo({
                              top: target.getBoundingClientRect().top + window.scrollY - 80,
                              behavior: "smooth"
                            });
                          }
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter for the latest updates on climate action.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className={`bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400 ${
                    emailError ? "border-error" : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                )}
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} EcoAction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
