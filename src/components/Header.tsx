import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { ScrollProgress } from './ScrollProgress';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-black text-2xl tracking-tight">
            Ananzi<span className="text-accent">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button className="glass-button text-accent">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card-large border-t-0 rounded-t-none">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-border/20">
                <ThemeToggle />
                <button className="glass-button text-accent">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      </header>
    </>
  );
};