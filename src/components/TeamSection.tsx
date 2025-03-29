
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkedIn?: string;
  email?: string;
}

const sbTeam: TeamMember[] = [
  {
    id: 1,
    name: "Jishnu Hari",
    role: "Chairperson",
    imageUrl: "images/jishnu.jpg",
    linkedIn: "#",
    email: "chair@ieeeukfcet.org"
  },
  {
    id: 2,
    name: "Archa R",
    role: "Vice Chairperson",
    imageUrl: "images/archa.jpg",
    linkedIn: "#",
    email: "vicechair@ieeeukfcet.org"
  },
  {
    id: 3,
    name: "Aparna S",
    role: "Secretary",
    imageUrl: "images/aparna.jpg",
    linkedIn: "#",
    email: "secretary@ieeeukfcet.org"
  },
  {
    id: 4,
    name: "Abel Sebastian",
    role: "Vice Secretary",
    imageUrl: "images/abel.jpg",
    linkedIn: "#",
    email: "treasurer@ieeeukfcet.org"
  },
  {
    id: 5,
    name: "Abel Sebastian",
    role: "Treasurer",
    imageUrl: "images/abel.jpg",
    linkedIn: "#",
    email: "treasurer@ieeeukfcet.org"
  }
];

const executiveTeam: TeamMember[] = [
  {
    id: 5,
    name: "Arjun Menon",
    role: "Technical Lead",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 6,
    name: "Shreya Gupta",
    role: "Design Head",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 7,
    name: "Vivek Sinha",
    role: "Event Coordinator",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 8,
    name: "Aisha Thomas",
    role: "Content Manager",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 9,
    name: "Rohan Verma",
    role: "PR Coordinator",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 10,
    name: "Tanvi Shah",
    role: "Membership Coordinator",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 11,
    name: "Karthik Iyer",
    role: "Web Developer",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  },
  {
    id: 12,
    name: "Neha Sharma",
    role: "Social Media Manager",
    imageUrl: "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
    linkedIn: "#"
  }
];

const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  return (
    <div className={`group animate-fade-in animation-delay-${index * 100 % 1000} hover-lift`}>
      <div className="relative overflow-hidden rounded-lg img-hover-zoom">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-2">
            {member.linkedIn && (
              <a 
                href={member.linkedIn}
                className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-primary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            )}
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-primary/80 transition-colors"
              >
                <Mail className="h-4 w-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold line-clamp-1">{member.name}</h3>
        <p className="text-sm text-primary line-clamp-1">{member.role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-fade-in text-sm font-medium text-primary">
            Our Team
          </span>
          <h2 className="animate-fade-in animation-delay-100 mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Meet The <span className="text-primary">People</span> Behind IEEE UKFCET
          </h2>
          <p className="animate-fade-in animation-delay-200 mt-4 text-lg text-muted-foreground text-balance">
            Our dedicated team of student volunteers who work tirelessly to make IEEE UKFCET a vibrant community.
          </p>
        </div>
        
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl font-bold mb-6 sm:mb-8 animate-fade-in animation-delay-300">IEEE SB Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {sbTeam.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 sm:mb-8 animate-fade-in animation-delay-500">Executive Committee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {executiveTeam.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
