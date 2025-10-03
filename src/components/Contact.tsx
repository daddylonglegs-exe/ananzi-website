import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.firstName.trim().length < 2 || formData.firstName.trim().length > 100) {
      toast({
        title: "Error",
        description: "First name must be between 2 and 100 characters.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.lastName.trim().length < 2 || formData.lastName.trim().length > 100) {
      toast({
        title: "Error",
        description: "Last name must be between 2 and 100 characters.",
        variant: "destructive"
      });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.message.trim().length < 10 || formData.message.trim().length > 1000) {
      toast({
        title: "Error",
        description: "Message must be between 10 and 1000 characters.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setIsSubmitting(false);
    
    toast({
      title: "Success!",
      description: "Your message has been sent successfully. We'll get back to you soon!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                    <a href="mailto:hello@ananzidigital.com" className="opacity-80 hover:text-accent transition-colors">
                      hello@ananzidigital.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:+15551234567" className="opacity-80 hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </a>
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
            <div className="glass-card-large p-8"
                 style={{
                   background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--accent) / 0.05))'
                 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
                      className="form-input bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
                      className="form-input bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="form-input bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    className="form-input bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full glass-button text-accent disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center py-4"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.25))',
                    borderColor: 'hsl(var(--accent) / 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/20 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};