import { Target, Zap, TrendingUp, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

        <ScrollReveal delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="service-card group h-full">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-all duration-300">
                      <service.icon className="service-icon h-6 sm:h-7 w-6 sm:w-7 text-accent transition-all duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};