import { ScrollReveal } from './ScrollReveal';
import { Star, Quote } from 'lucide-react';

export const Clients = () => {
  const clients = [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'InnovateLab', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'FutureSync', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'DataFlow', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'CloudForce', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'DigitalEdge', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  ];

  const testimonials = [
    {
      quote: "Working with this team transformed our digital presence completely. The results exceeded all our expectations.",
      author: "Sarah Johnson",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Their strategic approach and creative execution delivered outstanding ROI. Highly recommend their services.",
      author: "Michael Chen",
      company: "InnovateLab", 
      rating: 5
    },
    {
      quote: "Professional, innovative, and results-driven. They became an extension of our team.",
      author: "Emily Rodriguez",
      company: "GlobalBrand",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">
              Trusted by Industry
              <br />
              <span className="text-accent">Leaders</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with innovative companies that share our passion 
              for pushing boundaries and achieving exceptional results.
            </p>
          </div>
        </ScrollReveal>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <ScrollReveal key={client.name} delay={index * 100}>
              <div className="group">
                <div className="bg-card rounded-lg p-6 transition-all duration-300 hover:bg-accent/10 hover:scale-105">
                  <div className="aspect-[2/1] flex items-center justify-center">
                    <div className="text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials Section */}
        <ScrollReveal delay={400}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-12">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-accent/50 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">250+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};