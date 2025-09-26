import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const cases = [
    {
      title: 'SaaS Startup',
      description: 'Transformed a struggling startup into a market leader with strategic positioning and performance marketing.',
      results: '+400% Revenue Growth',
      category: 'B2B Tech',
      challenge: 'The company was losing market share to competitors and struggling with brand positioning in a crowded B2B landscape.',
      solution: 'We developed a comprehensive strategy focusing on thought leadership, targeted ABM campaigns, and conversion optimization.',
      metrics: [
        '400% increase in qualified leads',
        '250% improvement in conversion rates',
        '180% growth in average deal size',
        '90% reduction in customer acquisition cost'
      ],
      duration: '8 months',
      client: 'TechFlow Solutions'
    },
    {
      title: 'E-commerce Brand',
      description: 'Scaled an online retailer from 6-figure to 8-figure revenue through omnichannel campaigns.',
      results: '+1200% ROAS',
      category: 'Retail',
      challenge: 'Limited brand awareness and reliance on a single marketing channel were restricting growth potential.',
      solution: 'Implemented multi-channel marketing strategy with focus on social commerce, influencer partnerships, and retention marketing.',
      metrics: [
        '1200% return on ad spend',
        '850% increase in monthly revenue',
        '300% growth in customer lifetime value',
        '65% improvement in retention rate'
      ],
      duration: '12 months',
      client: 'StyleForward Co.'
    },
    {
      title: 'Fintech Platform',
      description: 'Launched a fintech disruptor with bold creative that cut through industry noise.',
      results: '2M+ Users Acquired',
      category: 'Financial Services',
      challenge: 'Breaking into a highly regulated and competitive fintech market with established players.',
      solution: 'Created a disruptive brand identity and go-to-market strategy focused on trust, simplicity, and user education.',
      metrics: [
        '2.1M users acquired in first year',
        '47% month-over-month user growth',
        '89% user retention after 6 months',
        '$50M+ in total transactions processed'
      ],
      duration: '18 months',
      client: 'NeoBank Digital'
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

        <div className="space-y-6">
          {cases.map((caseStudy, index) => (
            <ScrollReveal key={caseStudy.title} delay={index * 150}>
              <Collapsible
                open={expandedCase === index}
                onOpenChange={() => setExpandedCase(expandedCase === index ? null : index)}
              >
                <div className="glass-card-large overflow-hidden transition-all duration-500"
                     style={{
                       background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--accent) / 0.03))'
                     }}>
                  <CollapsibleTrigger className="w-full p-8 text-left hover:bg-accent/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-6">
                          <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                            {caseStudy.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                            <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                              expandedCase === index ? 'rotate-180' : ''
                            }`} />
                          </div>
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
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="px-8 pb-8 pt-0 border-t border-border">
                      <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4">The Challenge</h4>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                          
                          <h4 className="text-xl font-bold mb-4">Our Solution</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                        
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4">Key Metrics</h4>
                            <div className="space-y-3">
                              {caseStudy.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="flex items-center">
                                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                                  <span className="text-foreground font-medium">{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">Client</span>
                              <p className="font-semibold">{caseStudy.client}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Duration</span>
                              <p className="font-semibold">{caseStudy.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};