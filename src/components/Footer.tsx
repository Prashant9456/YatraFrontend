import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Instagram, Facebook, Youtube, Twitter, CreditCard, Smartphone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Hotels", "Guides", "Travel", "Temple Tours", "Reviews"]
    },
    {
      title: "Company", 
      links: ["About Us", "Why Choose Us", "Terms & Conditions", "Privacy Policy", "Contact"]
    },
    {
      title: "Support",
      links: ["Help Center", "24/7 Support", "Booking Help", "Cancellation", "Refunds"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Youtube, href: "#", name: "YouTube" },
    { icon: Twitter, href: "#", name: "Twitter" }
  ];

  const paymentMethods = [
    "UPI", "Visa", "Mastercard", "Debit Card", "Credit Card", "Net Banking"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">YT</span>
              </div>
              <h3 className="text-xl font-bold">YatraTravel</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted companion for spiritual journeys and cultural experiences across India. 
              Discover the divine with comfort and authenticity.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-background/80 hover:text-background hover:bg-background/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-background text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Payment Methods */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Accepted Payment Methods</h4>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-background/10 rounded-lg px-3 py-2"
              >
                {method === "UPI" ? (
                  <Smartphone className="w-4 h-4" />
                ) : (
                  <CreditCard className="w-4 h-4" />
                )}
                <span className="text-sm">{method}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-background/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/80 text-sm">
            © 2025 YatraTravel. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-background/80">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;