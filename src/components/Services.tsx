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
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Services That
              <span className="text-accent"> Scale</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We don't just run campaigns—we build marketing engines that grow with your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="service-card group">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-all duration-300">
                  <service.icon className="service-icon h-6 sm:h-7 w-6 sm:w-7 text-accent transition-all duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};