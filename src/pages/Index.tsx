
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import SpeakersSection from '@/components/SpeakersSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scroll effect for anchor links with improved mobile experience
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          
          // Get navbar height dynamically for accurate scrolling
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
          
          // Add a small buffer for better visual spacing
          const buffer = 20;
          
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - navbarHeight - buffer,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, '', target.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Handle initial hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Delay to ensure page is fully loaded
        setTimeout(() => {
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
          const buffer = 20;
          
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - navbarHeight - buffer,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SpeakersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
