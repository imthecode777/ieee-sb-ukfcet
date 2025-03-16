
import React from 'react';
import { Info, Users, Award, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2 animate-fade-in hover-lift", delay)}>
      <div className="rounded-lg p-3 bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-muted-foreground text-pretty">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Info className="h-6 w-6" />,
      title: "IEEE Mission",
      description: "IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.",
      delay: "animation-delay-100"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Community",
      description: "Connect with over 400,000 members worldwide who share knowledge and collaborate on advancing technology.",
      delay: "animation-delay-200"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Professional Growth",
      description: "Develop technical and leadership skills through workshops, conferences, and specialized training programs.",
      delay: "animation-delay-300"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "IEEE UKFCET",
      description: "Our student branch at UKFCET aims to bridge the gap between academic learning and industry requirements.",
      delay: "animation-delay-400"
    }
  ];
  
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-background">
      <div className="absolute inset-0 z-0 opacity-5 bg-circuit-pattern"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-fade-in text-sm font-medium text-primary">About Us</span>
          <h2 className="animate-fade-in animation-delay-100 mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Advancing Technology <span className="text-primary">For Humanity</span>
          </h2>
          <p className="animate-fade-in animation-delay-200 mt-4 text-lg text-muted-foreground text-balance">
            The IEEE UKFCET Student Branch promotes technical and professional development through a wide range of innovative activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          <div className="flex flex-col gap-6 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="text-muted-foreground text-pretty">
              IEEE UKFCET is a student branch of the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Since our establishment, we have been committed to creating a platform for students to explore and contribute to the field of engineering and technology.
            </p>
            <p className="text-muted-foreground text-pretty">
              Our branch provides numerous opportunities for students to develop technical knowledge, leadership skills, and professional networks. We organize workshops, technical talks, project competitions, and various other events to foster a vibrant learning environment.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 hover-scale">
                <div className="h-2 w-2 rounded-full bg-ieee-blue"></div>
                <span>Established 2005</span>
              </div>
              <div className="flex items-center gap-2 hover-scale">
                <div className="h-2 w-2 rounded-full bg-ieee-teal"></div>
                <span>300+ Active Members</span>
              </div>
              <div className="flex items-center gap-2 hover-scale">
                <div className="h-2 w-2 rounded-full bg-ieee-gold"></div>
                <span>50+ Annual Events</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
