// Portfolio Data Configuration
// 
// HOW TO ADD YOUR MEDIA:
// 1. Place your images/videos in the src/assets folder
// 2. Import them at the top of this file
// 3. Add new items to the portfolioItems array below
//
// Example:
// import myImage from '@/assets/my-image.jpg';
// import myVideo from '@/assets/my-video.mp4';

// Import your media files here
// import project1 from '@/assets/project1.jpg';
// import brandVideo from '@/assets/brand-video.mp4';

export interface PortfolioItem {
  type: 'image' | 'video';
  src: string;
  title: string;
  category: 'Branding' | 'Videos' | 'Web' | 'Mobile' | 'Marketing';
}

// Add your portfolio items here - just copy/paste and modify!
export const portfolioItems: PortfolioItem[] = [
  // Example structure - replace these with your own:
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600', 
    title: 'Campaign Design', 
    category: 'Branding' 
  },
  { 
    type: 'video', 
    src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=800', 
    title: 'Brand Video', 
    category: 'Videos' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500', 
    title: 'Web Design', 
    category: 'Web' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=700', 
    title: 'Mobile App', 
    category: 'Mobile' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600', 
    title: 'Corporate Branding', 
    category: 'Branding' 
  },
  { 
    type: 'video', 
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400', 
    title: 'Product Demo', 
    category: 'Videos' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=800', 
    title: 'Content Strategy', 
    category: 'Marketing' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=900', 
    title: 'Analytics Dashboard', 
    category: 'Web' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=600&h=600', 
    title: 'Social Campaign', 
    category: 'Marketing' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500', 
    title: 'E-commerce Site', 
    category: 'Web' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=800', 
    title: 'UI/UX Design', 
    category: 'Mobile' 
  },
  { 
    type: 'video', 
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=700', 
    title: 'Video Production', 
    category: 'Videos' 
  },
  
  // TO ADD YOUR OWN ITEMS:
  // 
  // Step 1: Import your file at the top:
  // import myProject from '@/assets/my-project.jpg';
  // 
  // Step 2: Copy/paste one of the objects above and modify it:
  // { 
  //   type: 'image',           // 'image' or 'video'
  //   src: myProject,          // use your imported variable
  //   title: 'My Project',     // your project title
  //   category: 'Branding'     // choose: Branding, Videos, Web, Mobile, or Marketing
  // },
];

export const categories = ['All', 'Branding', 'Videos', 'Web', 'Mobile', 'Marketing'] as const;
