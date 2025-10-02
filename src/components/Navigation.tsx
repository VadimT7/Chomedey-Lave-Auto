'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past 200px - hide navbar
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding navbar
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/10' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative flex-shrink-0">
              <Image
                src="/Others/logo.png"
                alt="Chomedey Lave-Auto"
                width={90 }
                height={45}
                className="transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <h1 className={cn(
                "text-lg lg:text-xl font-black bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 whitespace-nowrap",
                isScrolled 
                  ? "bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800" 
                  : "bg-gradient-to-r from-white via-cyan-100 to-blue-100"
              )}>
                Chomedey
              </h1>
              <p className={cn(
                "text-xs font-semibold -mt-1 group-hover:text-cyan-600 transition-colors duration-300 whitespace-nowrap",
                isScrolled ? "text-gray-600" : "text-white/90"
              )}>Lave-Auto</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-base font-semibold transition-all duration-500 ease-out group rounded-lg',
                  pathname === item.href
                    ? 'text-cyan-600 bg-cyan-50 shadow-md shadow-cyan-500/20'
                    : isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600 hover:bg-cyan-50/50'
                      : 'text-white/90 hover:text-cyan-300 hover:bg-white/10'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 rounded-full',
                    pathname === item.href ? 'w-8' : 'w-0 group-hover:w-8'
                  )}
                />
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <div className={cn(
              "flex items-center space-x-2 text-sm font-semibold group transition-colors duration-300 whitespace-nowrap",
              isScrolled ? "text-gray-700" : "text-white/90"
            )}>
              <Phone className={cn(
                "h-4 w-4 group-hover:text-blue-600 transition-colors duration-300",
                isScrolled ? "text-cyan-600" : "text-cyan-300"
              )} />
              <span className="group-hover:text-cyan-600 transition-colors duration-300">+1 450-686-0016</span>
            </div>
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10">Visit Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-3 rounded-xl hover:text-cyan-600 transition-all duration-300 group",
              isScrolled 
                ? "text-gray-700 hover:bg-cyan-50" 
                : "text-white/90 hover:bg-white/10"
            )}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative">
              {isOpen ? <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" /> : <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden" id="mobile-menu" role="menu" aria-label="Mobile navigation menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 backdrop-blur-xl rounded-xl mt-2 shadow-xl shadow-black/10 border border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className={cn(
                    'block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300',
                    pathname === item.href
                      ? 'text-cyan-600 bg-gradient-to-r from-cyan-50 to-blue-50 shadow-md shadow-cyan-500/20'
                      : 'text-gray-800 hover:text-cyan-600 hover:bg-cyan-50/50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700">
                  <Phone className="h-4 w-4 text-cyan-600" />
                  <span>+1 450-686-0016</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700">
                  <MapPin className="h-4 w-4 text-cyan-600" />
                  <span>Laval, Quebec</span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block mx-3 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Visit Us Today
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
