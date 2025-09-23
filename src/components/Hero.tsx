import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 -z-10" />
      
      {/* Enhanced Floating Elements with Parallax */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.y * 0.01}px` } as React.CSSProperties}
      />
      <div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.y * -0.02}px` } as React.CSSProperties}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-lg animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.x * 0.015}px` } as React.CSSProperties}
      />
      
      {/* Content - Lowered positioning */}
      <div className="container mx-auto text-center mt-16">
        <ScrollReveal>
          <h1 className="text-hero mb-6 leading-tight">
            Bold Digital
            <br />
            <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Marketing</span>
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="glass-button text-accent group px-8 py-4 text-lg font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.25))',
                      borderColor: 'hsl(var(--accent) / 0.3)'
                    }}>
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <Link to="/portfolio" className="glass-button text-foreground px-8 py-4 text-lg font-semibold">
              View Our Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};