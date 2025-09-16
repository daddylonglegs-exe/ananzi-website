import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />
      
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-hero mb-6 leading-tight">
            Bold Digital
            <br />
            <span className="text-accent">Marketing</span>
            <br />
            That Delivers
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-large text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft data-driven campaigns that cut through the noise and deliver
            measurable results for ambitious brands ready to dominate their market.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-accent group">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-primary">
              View Our Work
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};