
import React from 'react';
import Card3D from './ui/Card3D';
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const events = [
  {
    id: 1,
    title: "Tech Summit 2023",
    description: "Annual technology conference featuring industry experts and the latest tech trends.",
    date: "November 15-16, 2023",
    location: "Main Auditorium, UKFCET",
    attendees: "500+",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 2,
    title: "Workshop on AI & ML",
    description: "Hands-on workshop on artificial intelligence and machine learning fundamentals.",
    date: "September 22, 2023",
    location: "CS Lab, UKFCET",
    attendees: "150+",
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "Hackathon 2023",
    description: "48-hour coding challenge to solve real-world problems with innovative solutions.",
    date: "August 10-12, 2023",
    location: "Engineering Block, UKFCET",
    attendees: "200+",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 4,
    title: "Robotics Exhibition",
    description: "Showcase of student-built robots and automation projects with demonstrations.",
    date: "July 5, 2023",
    location: "Central Hall, UKFCET",
    attendees: "350+",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  }
];

const EventCard = ({ event, index }: { event: typeof events[0], index: number }) => {
  const isMobile = useIsMobile();
  // Reduce 3D effect on mobile for better performance
  const depth = isMobile ? 5 : 20;
  
  return (
    <Card3D className={`h-full rounded-xl overflow-hidden animate-fade-in animation-delay-${(index + 1) * 100}`} depth={depth}>
      <div className="relative h-full glass-card flex flex-col">
        <div className="relative h-40 sm:h-48 overflow-hidden img-hover-zoom">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="img-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 flex-1 line-clamp-3">{event.description}</p>
          <div className="space-y-2 mt-2">
            <div className="flex items-center text-xs sm:text-sm text-foreground/70">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
              <span className="line-clamp-1">{event.date}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-foreground/70">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-foreground/70">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
              <span>{event.attendees} Attendees</span>
            </div>
          </div>
          <a 
            href={event.url} 
            className="mt-4 sm:mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 hover-lift"
          >
            Learn More <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </Card3D>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-fade-in text-sm font-medium text-primary">
            Events & Conferences
          </span>
          <h2 className="animate-fade-in animation-delay-100 mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Our <span className="text-primary">Latest</span> Activities
          </h2>
          <p className="animate-fade-in animation-delay-200 mt-4 text-lg text-muted-foreground text-balance">
            Discover our most recent and upcoming events, workshops, and conferences organized by IEEE UKFCET.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center animate-fade-in animation-delay-500">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary rounded-md text-base font-medium text-primary bg-transparent hover:bg-primary/10 transition-colors hover-lift"
          >
            View All Events <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
