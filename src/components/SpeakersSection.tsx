
import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import Card3D from './ui/Card3D';
import { useIsMobile } from '@/hooks/use-mobile';

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "AI Research Lead",
    company: "Google AI",
    bio: "Pioneering researcher in machine learning and artificial intelligence with over 10 years of industry experience.",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Distinguished Professor",
    company: "MIT",
    bio: "Award-winning academic focusing on quantum computing and its applications in solving complex problems.",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Director of Engineering",
    company: "Tesla",
    bio: "Leading innovation in electric vehicle technology and sustainable energy solutions for the future.",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    socials: {
      linkedin: "#",
      website: "#"
    }
  },
  {
    id: 4,
    name: "Dr. James Williams",
    role: "CTO",
    company: "Quantum Labs",
    bio: "Expert in robotics and automation with a focus on creating technology that improves human lives.",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  }
];

const SpeakerCard = ({ speaker, index }: { speaker: Speaker, index: number }) => {
  const isMobile = useIsMobile();
  // Reduce 3D effect on mobile for better performance
  const depth = isMobile ? 5 : 20;
  
  return (
    <Card3D className={`h-full rounded-xl overflow-hidden animate-fade-in animation-delay-${(index + 1) * 100}`} depth={depth}>
      <div className="h-full glass-card">
        <div className="relative overflow-hidden aspect-[3/4] img-hover-zoom">
          <img 
            src={speaker.imageUrl} 
            alt={speaker.name} 
            className="img-cover"
          />
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-xl font-bold line-clamp-1">{speaker.name}</h3>
          <p className="text-sm text-primary font-medium mt-1">{speaker.role}</p>
          <p className="text-sm text-foreground/70 mb-2 sm:mb-3">{speaker.company}</p>
          <p className="text-muted-foreground text-sm line-clamp-3 sm:line-clamp-none">{speaker.bio}</p>
          <div className="flex mt-3 sm:mt-4 space-x-3">
            {speaker.socials.linkedin && (
              <a href={speaker.socials.linkedin} className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {speaker.socials.twitter && (
              <a href={speaker.socials.twitter} className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {speaker.socials.website && (
              <a href={speaker.socials.website} className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card3D>
  );
};

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-16 sm:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-fade-in text-sm font-medium text-primary">
            Speakers & Guests
          </span>
          <h2 className="animate-fade-in animation-delay-100 mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Meet Our <span className="text-primary">Distinguished</span> Speakers
          </h2>
          <p className="animate-fade-in animation-delay-200 mt-4 text-lg text-muted-foreground text-balance">
            Learn from industry leaders and academic experts who share their knowledge and experiences with our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
