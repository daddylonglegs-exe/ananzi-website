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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 -z-10" />
      
      {/* Enhanced Floating Elements with Parallax */}
      <div 
        className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-accent/10 rounded-full blur-xl animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.y * 0.01}px` } as React.CSSProperties}
      />
      <div 
        className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.y * -0.02}px` } as React.CSSProperties}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-accent/5 rounded-full blur-lg animate-pulse parallax"
        style={{ '--parallax-offset': `${mousePosition.x * 0.015}px` } as React.CSSProperties}
      />
      
      {/* Content - Lowered positioning */}
      <div className="container mx-auto text-center mt-8 sm:mt-16">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
            Bold Digital
            <br />
            <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Marketing</span>
            <br />
            That Delivers
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            We craft data-driven campaigns that cut through the noise and deliver
            measurable results for ambitious brands ready to dominate their market.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link to="/contact" className="glass-button text-accent group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.25))',
                      borderColor: 'hsl(var(--accent) / 0.3)'
                    }}>
              Start Your Campaign
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="glass-button text-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              View Our Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};