
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize if we're switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // If menu is open, prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Always-visible main navigation bar */}
      <nav 
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out',
          scrolled 
            ? 'py-2 glass-nav' 
            : 'py-4 sm:py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-2 hover-lift">
               <img src="./logo.png" alt="IEEE SB UKFCET Logo" className="w-7 h-7 sm:w-9 sm:h-9 object-contain"/>
              <span className="text-xl sm:text-2xl font-bold text-ieee-blue">IEEE</span>
              <span className="text-xl sm:text-2xl font-bold text-ieee-teal">SB UKFCET</span>
              </a>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-underline"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#register"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-lift"
              >
                Register
              </a>
            </div>
            
            {/* Mobile menu button - always visible on mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-background/80 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - in a separate React node to avoid nesting issues */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden mobile-menu-overlay">
          {/* Glass morphism backdrop that covers the entire screen */}
          <div className="absolute inset-0 glass-mobile-nav" aria-hidden="true"></div>
          
          {/* Content container */}
          <div className="relative z-60 h-full flex flex-col p-8 pt-20">
            {/* Close button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>

            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#register"
                onClick={toggleMenu}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
