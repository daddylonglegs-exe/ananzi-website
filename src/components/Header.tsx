import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScrollProgress } from './ScrollProgress';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

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
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '/contact' },
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
          {/* Logo - hidden on portfolio, careers, and contact pages */}
          {!['/portfolio', '/careers', '/contact'].includes(location.pathname) && (
            <Link 
              to="/" 
              className="font-black text-2xl tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
            >
              Ananzi<span className="text-accent">.</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith('#');
              return isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with smooth animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 pb-4 glass-card-large border-t-0 rounded-t-none">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link, index) => {
                const isAnchor = link.href.startsWith('#');
                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link text-lg transition-all duration-200"
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                    onClick={(e) => {
                      handleAnchorClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="nav-link text-lg transition-all duration-200"
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
};