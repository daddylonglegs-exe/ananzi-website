import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design understanding"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead product strategy and work cross-functionally to deliver exceptional user experiences and drive business growth.",
    requirements: ["3+ years product management", "Data-driven mindset", "Agile methodology experience"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive user interfaces and experiences that delight users and achieve business objectives.",
    requirements: ["Portfolio of design work", "Figma/Sketch proficiency", "User research experience"],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Part-time",
    description: "Drive growth through creative marketing campaigns, content creation, and digital marketing strategies.",
    requirements: ["2+ years marketing experience", "Content creation skills", "Analytics knowledge"],
    posted: "5 days ago"
  }
];

export const Careers = () => {
  return (
    <section id="careers" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Join Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. 
              Explore our current openings and become part of our growing team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <ScrollReveal key={job.id} delay={index * 100}>
              <Card className="glass-card h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {job.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">{job.posted}</span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-accent rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      className="w-full"
                      variant="default"
                      onClick={() => {
                        // Open email client with pre-filled subject
                        window.location.href = `mailto:careers@ananzi.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards`;
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Don't See Your Role?</h3>
              <p className="text-muted-foreground mb-6">
                We're always interested in hearing from talented individuals. Send us your resume and 
                let us know how you'd like to contribute to our team.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  window.location.href = 'mailto:careers@ananzi.com?subject=Resume Submission&body=Dear Hiring Team,%0D%0A%0D%0AI would like to submit my resume for future opportunities.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards';
                }}
              >
                Send Resume
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};