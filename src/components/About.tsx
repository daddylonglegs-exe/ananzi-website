import { ScrollReveal } from './ScrollReveal';

export const About = () => {
  const stats = [
    { number: '150+', label: 'Brands Transformed' },
    { number: '500%', label: 'Average ROI Increase' },
    { number: '50M+', label: 'Impressions Generated' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                We're Not Your
                <br />
                <span className="text-accent">Typical Agency</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Ananzi Digital, we believe marketing should be bold, measurable, and 
                  unapologetically effective. We don't do cookie-cutter campaigns or 
                  one-size-fits-all solutions.
                </p>
                <p>
                  Our team of strategists, creatives, and data scientists work together 
                  to craft campaigns that don't just look good—they deliver results 
                  that transform businesses.
                </p>
                <p>
                  We're the partner you choose when you're ready to stop playing it 
                  safe and start dominating your market.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};