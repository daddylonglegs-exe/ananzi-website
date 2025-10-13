import { Header } from '@/components/Header';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Footer } from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main id="main-content">
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-hero mb-6">
              Let's Start a 
              <br />
              <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We're here to listen, understand, 
              and craft solutions that drive real results for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
            
            {/* Contact Form */}
            <ScrollReveal>
              <div className="glass-card p-8 bg-card border border-border/20 mb-16">
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="John"
                        className="bg-background/50 border-border/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Doe"
                        className="bg-background/50 border-border/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      placeholder="john@company.com"
                      className="bg-background/50 border-border/30 focus:border-accent transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={1000}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="bg-background/50 border-border/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-medium transition-all duration-300 disabled:opacity-50"
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
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-section-title mb-6">
                    Get in <span className="text-accent">Touch</span>
                  </h2>
                  <p className="text-large text-muted-foreground leading-relaxed">
                    Whether you have a project in mind, need expert advice, or just want to 
                    explore possibilities, we'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email Us</div>
                      <a href="mailto:mail@ananzi.tech" className="text-muted-foreground hover:text-accent transition-colors">
                        mail@ananzi.tech
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Call Us</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Visit Us</div>
                      <div className="text-muted-foreground">New York, NY</div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </ScrollReveal>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;