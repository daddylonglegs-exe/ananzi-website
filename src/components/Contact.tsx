import { Mail, MapPin, Phone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-section-title mb-8">
                Ready to Make
                <br />
                <span className="text-accent">Bold Moves?</span>
              </h2>
              <p className="text-large mb-12 opacity-90 leading-relaxed">
                Let's discuss how we can transform your marketing and drive 
                the results your business deserves.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="opacity-80">hello@ananzidigital.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="opacity-80">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="opacity-80">New York, NY</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background/20 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/20 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button type="submit" className="w-full btn-accent">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};