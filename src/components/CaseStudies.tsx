import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CaseStudies = () => {
  const cases = [
    {
      title: 'SaaS Startup',
      description: 'Transformed a struggling startup into a market leader with strategic positioning and performance marketing.',
      results: '+400% Revenue Growth',
      category: 'B2B Tech'
    },
    {
      title: 'E-commerce Brand',
      description: 'Scaled an online retailer from 6-figure to 8-figure revenue through omnichannel campaigns.',
      results: '+1200% ROAS',
      category: 'Retail'
    },
    {
      title: 'Fintech Platform',
      description: 'Launched a fintech disruptor with bold creative that cut through industry noise.',
      results: '2M+ Users Acquired',
      category: 'Financial Services'
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">
              Success Stories That
              <span className="text-accent"> Speak Volumes</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Real brands. Real results. Real impact on bottom lines.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <ScrollReveal key={caseStudy.title} delay={index * 150}>
              <div className="group glass-card-large p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer"
                   style={{
                     background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--accent) / 0.03))'
                   }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                    {caseStudy.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-black text-accent">
                    {caseStudy.results}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-16">
            <button className="btn-primary">
              View All Case Studies
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};