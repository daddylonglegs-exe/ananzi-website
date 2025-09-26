import { Mail, MapPin, Phone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Newsletter } from './Newsletter';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">
              Ready to Make
              <br />
              <span className="text-accent">Bold Moves?</span>
            </h2>
            <p className="text-large mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can transform your marketing and drive 
              the results your business deserves.
            </p>
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-medium"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold">Email Us</div>
                <a href="mailto:hello@ananzidigital.com" className="opacity-80 hover:text-accent transition-colors">
                  hello@ananzidigital.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold">Call Us</div>
                <a href="tel:+15551234567" className="opacity-80 hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold">Visit Us</div>
                <div className="opacity-80">New York, NY</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="font-black text-2xl tracking-tight">
                Ananzi<span className="text-accent">.</span>
              </div>
              <div className="flex space-x-6 text-sm opacity-80">
                <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
                <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </div>
              <div className="text-sm opacity-60">
                © 2024 Ananzi Digital. All rights reserved.
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <Newsletter />
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};