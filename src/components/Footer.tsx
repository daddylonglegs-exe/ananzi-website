import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Ready to Make
              <br />
              <span className="text-accent">Bold Moves?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
              Let's discuss how we can transform your marketing and drive 
              the results your business deserves.
            </p>
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-5 sm:p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
              </div>
              <div className="text-center sm:text-left min-w-0">
                <div className="font-semibold text-sm sm:text-base">Email Us</div>
                <a href="mailto:mail@ananzi.tech" className="opacity-80 hover:text-accent transition-colors text-xs sm:text-sm break-all">
                  mail@ananzi.tech
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-5 sm:p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm sm:text-base">Call Us</div>
                <a href="tel:+15551234567" className="opacity-80 hover:text-accent transition-colors text-xs sm:text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-5 sm:p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm sm:text-base">Visit Us</div>
                <div className="opacity-80 text-xs sm:text-sm">New York, NY</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
              <div className="font-black text-xl sm:text-2xl tracking-tight">
                Ananzi<span className="text-accent">.</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm opacity-80">
                  <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
                  <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
                  <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
                </div>
                <a
                  href="https://www.instagram.com/ananzi_infotech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
                </a>
              </div>
              <div className="text-xs sm:text-sm opacity-60 text-center md:text-left">
                © 2024 Ananzi Digital. All rights reserved.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};