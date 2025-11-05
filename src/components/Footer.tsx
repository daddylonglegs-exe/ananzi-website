import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative py-20 sm:py-24 px-4 sm:px-6 bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/95 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
              Ready to Make
              <br />
              <span className="text-accent inline-block transition-transform duration-500 hover:scale-105">
                Bold Moves?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
              Let's discuss how we can transform your marketing and drive 
              the results your business deserves.
            </p>
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <div className="group flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 p-6 sm:p-7 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-foreground/5">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left min-w-0">
                <div className="font-semibold text-sm sm:text-base mb-1">Email Us</div>
                <a href="mailto:mail@ananzi.tech" className="opacity-80 hover:text-accent hover:opacity-100 transition-all duration-200 text-xs sm:text-sm break-all">
                  mail@ananzi.tech
                </a>
              </div>
            </div>
            
            <div className="group flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 p-6 sm:p-7 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-foreground/5">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm sm:text-base mb-1">Call Us</div>
                <a href="tel:+15551234567" className="opacity-80 hover:text-accent hover:opacity-100 transition-all duration-200 text-xs sm:text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="group flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 p-6 sm:p-7 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-foreground/5">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-sm sm:text-base mb-1">Visit Us</div>
                <div className="opacity-80 text-xs sm:text-sm">New York, NY</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="border-t border-primary-foreground/10 pt-8 sm:pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-6">
              <div className="font-black text-2xl sm:text-3xl tracking-tight hover:scale-105 transition-transform duration-300">
                Ananzi<span className="text-accent">.</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="flex space-x-6 sm:space-x-8 text-sm opacity-80">
                  <Link to="/portfolio" className="hover:text-accent hover:opacity-100 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Portfolio</Link>
                  <Link to="/careers" className="hover:text-accent hover:opacity-100 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Careers</Link>
                  <Link to="/contact" className="hover:text-accent hover:opacity-100 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
                </div>
                <a
                  href="https://www.instagram.com/ananzi_infotech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
                </a>
              </div>
              <div className="text-sm opacity-60 text-center md:text-left hover:opacity-80 transition-opacity duration-200">
                © 2025 Ananzi Digital. All rights reserved.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};