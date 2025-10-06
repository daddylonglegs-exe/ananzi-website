import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

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

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20, 'Phone number must be less than 20 digits'),
  linkedin: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  portfolio: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters').max(2000, 'Cover letter must be less than 2000 characters'),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export const Careers = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationForm, jobTitle: string) => {
    console.log('Application submitted:', { ...data, jobTitle });
    toast({
      title: 'Application Submitted!',
      description: `Thank you for applying for the ${jobTitle} position. We'll review your application and get back to you soon.`,
    });
    reset();
    setOpenDialog(null);
  };

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
                    <Dialog open={openDialog === job.id} onOpenChange={(open) => setOpenDialog(open ? job.id : null)}>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="default">
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to submit your application. All fields are required unless marked optional.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <form onSubmit={handleSubmit((data) => onSubmit(data, job.title))} className="space-y-4">
                          <div>
                            <Label htmlFor={`fullName-${job.id}`}>Full Name *</Label>
                            <Input
                              id={`fullName-${job.id}`}
                              {...register('fullName')}
                              placeholder="John Doe"
                              className="mt-1"
                            />
                            {errors.fullName && (
                              <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor={`email-${job.id}`}>Email *</Label>
                            <Input
                              id={`email-${job.id}`}
                              type="email"
                              {...register('email')}
                              placeholder="john@example.com"
                              className="mt-1"
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor={`phone-${job.id}`}>Phone Number *</Label>
                            <Input
                              id={`phone-${job.id}`}
                              type="tel"
                              {...register('phone')}
                              placeholder="+1 (555) 123-4567"
                              className="mt-1"
                            />
                            {errors.phone && (
                              <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor={`linkedin-${job.id}`}>LinkedIn Profile (Optional)</Label>
                            <Input
                              id={`linkedin-${job.id}`}
                              type="url"
                              {...register('linkedin')}
                              placeholder="https://linkedin.com/in/yourprofile"
                              className="mt-1"
                            />
                            {errors.linkedin && (
                              <p className="text-sm text-destructive mt-1">{errors.linkedin.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor={`portfolio-${job.id}`}>Portfolio/Website (Optional)</Label>
                            <Input
                              id={`portfolio-${job.id}`}
                              type="url"
                              {...register('portfolio')}
                              placeholder="https://yourportfolio.com"
                              className="mt-1"
                            />
                            {errors.portfolio && (
                              <p className="text-sm text-destructive mt-1">{errors.portfolio.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor={`coverLetter-${job.id}`}>Cover Letter *</Label>
                            <Textarea
                              id={`coverLetter-${job.id}`}
                              {...register('coverLetter')}
                              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                              className="mt-1 min-h-[150px]"
                            />
                            {errors.coverLetter && (
                              <p className="text-sm text-destructive mt-1">{errors.coverLetter.message}</p>
                            )}
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button type="button" variant="outline" onClick={() => setOpenDialog(null)} className="flex-1">
                              Cancel
                            </Button>
                            <Button type="submit" className="flex-1">
                              Submit Application
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
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
              <Dialog open={openDialog === 0} onOpenChange={(open) => setOpenDialog(open ? 0 : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    Send Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Submit Your Resume</DialogTitle>
                    <DialogDescription>
                      We'd love to hear from you! Fill out the form below and we'll keep your information on file for future opportunities.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit((data) => onSubmit(data, 'General Application'))} className="space-y-4">
                    <div>
                      <Label htmlFor="fullName-general">Full Name *</Label>
                      <Input
                        id="fullName-general"
                        {...register('fullName')}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email-general">Email *</Label>
                      <Input
                        id="email-general"
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone-general">Phone Number *</Label>
                      <Input
                        id="phone-general"
                        type="tel"
                        {...register('phone')}
                        placeholder="+1 (555) 123-4567"
                        className="mt-1"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="linkedin-general">LinkedIn Profile (Optional)</Label>
                      <Input
                        id="linkedin-general"
                        type="url"
                        {...register('linkedin')}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="mt-1"
                      />
                      {errors.linkedin && (
                        <p className="text-sm text-destructive mt-1">{errors.linkedin.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="portfolio-general">Portfolio/Website (Optional)</Label>
                      <Input
                        id="portfolio-general"
                        type="url"
                        {...register('portfolio')}
                        placeholder="https://yourportfolio.com"
                        className="mt-1"
                      />
                      {errors.portfolio && (
                        <p className="text-sm text-destructive mt-1">{errors.portfolio.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="coverLetter-general">Tell Us About Yourself *</Label>
                      <Textarea
                        id="coverLetter-general"
                        {...register('coverLetter')}
                        placeholder="Tell us about your background, skills, and what kind of opportunities you're interested in..."
                        className="mt-1 min-h-[150px]"
                      />
                      {errors.coverLetter && (
                        <p className="text-sm text-destructive mt-1">{errors.coverLetter.message}</p>
                      )}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={() => setOpenDialog(null)} className="flex-1">
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Submit
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};