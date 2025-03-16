
import React from 'react';
import ThreeScene from './ui/ThreeScene';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background ThreeScene */}
      <ThreeScene />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-block animate-fade-in animation-delay-100 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              IEEE Student Branch
            </span>
            
            <h1 className="animate-fade-in animation-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Empowering Innovation
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-teal">
                Through Technology
              </span>
            </h1>
            
            <p className="animate-fade-in animation-delay-300 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/80 text-balance">
              Join the global community of IEEE at UKFCET and be part of the technological revolution
            </p>
            
            <div className="animate-fade-in animation-delay-500 mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors hover-lift"
              >
                Discover More
              </a>
              <a 
                href="#register" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors hover-lift"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hide on mobile for better space usage */}
      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a href="#about" className="flex flex-col items-center">
            <span className="text-foreground/60 text-sm font-medium">Scroll</span>
            <svg className="w-6 h-6 text-foreground/60 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
