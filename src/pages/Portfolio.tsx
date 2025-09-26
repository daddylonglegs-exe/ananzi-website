import { ScrollReveal } from '@/components/ScrollReveal';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Search, Filter, Share2, ArrowLeft } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loadingItems, setLoadingItems] = useState<number[]>([]);

  // Enhanced portfolio items with categories
  const portfolioItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600', title: 'Campaign Design', category: 'Branding' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=800', title: 'Brand Video', category: 'Videos' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500', title: 'Web Design', category: 'Web' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=700', title: 'Mobile App', category: 'Mobile' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600', title: 'Corporate Branding', category: 'Branding' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400', title: 'Product Demo', category: 'Videos' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=800', title: 'Content Strategy', category: 'Marketing' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=900', title: 'Analytics Dashboard', category: 'Web' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=600&h=600', title: 'Social Campaign', category: 'Marketing' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500', title: 'E-commerce Site', category: 'Web' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=800', title: 'UI/UX Design', category: 'Mobile' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=700', title: 'Video Production', category: 'Videos' },
  ];

  const categories = ['All', 'Branding', 'Videos', 'Web', 'Mobile', 'Marketing'];

  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleImageLoad = (index: number) => {
    setLoadingItems(prev => prev.filter(i => i !== index));
  };

  const handleImageLoadStart = (index: number) => {
    setLoadingItems(prev => [...prev, index]);
  };

  const shareItem = (item: typeof portfolioItems[0]) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out this amazing ${item.category.toLowerCase()} project`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <ScrollReveal>
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </ScrollReveal>

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

        {/* Search and Filter Controls */}
        <ScrollReveal delay={200}>
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-card form-input pl-10 text-center border-0"
                style={{
                  background: 'var(--glass-background)',
                  backdropFilter: 'var(--glass-backdrop-blur) var(--glass-backdrop-saturate)'
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`glass-button px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-accent border-accent/50'
                      : 'text-foreground hover:text-accent hover:border-accent/30'
                  }`}
                  style={{
                    background: selectedCategory === category 
                      ? 'linear-gradient(135deg, hsl(var(--accent) / 0.12), hsl(var(--accent) / 0.08))'
                      : 'var(--glass-background)'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="portfolio-item">
                <div className="relative overflow-hidden glass-card-large shadow-medium hover:shadow-large transition-all duration-500 hover:scale-[1.02]"
                     style={{
                       background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--accent) / 0.02))'
                     }}>
                  {/* Loading State */}
                  {loadingItems.includes(index) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                      <LoadingSpinner />
                    </div>
                  )}
                  
                  <img
                    src={item.src}
                    alt={item.title}
                    className="portfolio-image w-full h-auto object-cover transition-transform duration-300"
                    loading="lazy"
                    onLoadStart={() => handleImageLoadStart(index)}
                    onLoad={() => handleImageLoad(index)}
                  />
                  
                  {/* Video Indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  )}
                  
                  <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="inline-block px-2 py-1 bg-accent/80 text-accent-foreground rounded text-xs font-medium mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        </div>
                        <button
                          onClick={() => shareItem(item)}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          aria-label="Share item"
                        >
                          <Share2 className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          </ScrollReveal>
        )}

        {/* Load More Button */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16 space-x-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="glass-button text-accent px-8 py-4 inline-flex items-center"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.25))',
                borderColor: 'hsl(var(--accent) / 0.3)'
              }}>
              Back to Top
            </button>
            <Link to="/case-study" className="glass-button text-foreground px-8 py-4 inline-flex items-center">
              View Case Study
            </Link>
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}