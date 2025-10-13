import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function CaseStudy() {
  const caseStudy = {
    title: 'TechCorp Digital Transformation',
    category: 'Technology',
    client: 'TechCorp Inc.',
    duration: '6 months',
    challenge: 'TechCorp needed to modernize their digital presence and improve customer engagement across all touchpoints.',
    solution: 'We implemented a comprehensive digital strategy including brand redesign, website overhaul, and multi-channel marketing campaigns.',
    results: [
      '300% increase in online engagement',
      '150% boost in lead generation',
      '85% improvement in conversion rates',
      '200% growth in social media following'
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800',
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800'
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24 pb-16">
      <div className="container mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {caseStudy.category}
            </span>
            <h1 className="text-section-title mb-6">{caseStudy.title}</h1>
            <div className="flex justify-center items-center space-x-8 text-muted-foreground">
              <div>
                <span className="font-medium">Client:</span> {caseStudy.client}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {caseStudy.duration}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {caseStudy.challenge}
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Results Achieved</h2>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0" />
                    <span className="text-foreground font-medium">{result}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="btn-accent inline-flex items-center">
                  View Live Project
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="space-y-8">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-large">
                <img
                  src={image}
                  alt={`Case study image ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      </main>
      <Footer />
    </div>
  );
}