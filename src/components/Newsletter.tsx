import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (email.length > 255) {
      toast({
        title: "Error",
        description: "Email address is too long.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
  };

  if (isSubscribed) {
    return (
      <ScrollReveal>
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            You're now subscribed to our newsletter. Check your inbox for a welcome email.
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div className="glass-card p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
            <Mail className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">Get marketing insights delivered to your inbox</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="px-6"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </ScrollReveal>
  );
};