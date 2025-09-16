import { ScrollReveal } from '@/components/ScrollReveal';

export default function Portfolio() {
  // Stock images for demo purposes
  const portfolioItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600', title: 'Campaign Design' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=800', title: 'Brand Identity' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500', title: 'Web Design' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=700', title: 'Mobile App' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600', title: 'Corporate' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400', title: 'Digital Strategy' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=800', title: 'Content Creation' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=900', title: 'Analytics' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=600&h=600', title: 'Social Media' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500', title: 'E-commerce' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=800', title: 'UI/UX Design' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=700', title: 'Video Production' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-section-title mb-6">
              Our Creative
              <br />
              <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning digital campaigns, brand identities, 
              and creative solutions that have helped our clients achieve remarkable results.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Back to Home */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <a href="/" className="btn-accent inline-flex items-center">
              Back to Home
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}