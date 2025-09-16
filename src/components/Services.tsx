import { Target, Zap, TrendingUp, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven strategies that align with your business goals and target the right audience at the right time.'
    },
    {
      icon: Zap,
      title: 'Digital Campaigns',
      description: 'High-impact campaigns across all digital channels that capture attention and drive conversions.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Scalable growth strategies that optimize your marketing funnel and maximize ROI across all touchpoints.'
    },
    {
      icon: Users,
      title: 'Brand Building',
      description: 'Comprehensive brand development that creates lasting connections with your target audience.'
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">
              Services That
              <span className="text-accent"> Scale</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              We don't just run campaigns—we build marketing engines that grow with your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};