import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TechFlow
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'About Us', 'Contact Us', 'Portfolio', 'Our Best Creations'].map((item) => (
            <button
              key={item}
              onClick={() => {
                const map: Record<string, string> = {
                  'Home': 'hero',
                  'Services': 'services',
                  'About Us': 'about-us',
                  'Contact Us': 'contact-us',
                  'Portfolio': 'portfolio',
                  'Our Best Creations': 'best-creations',
                };
                scrollToSection(map[item] || item.toLowerCase().replace(/\s/g, '-'));
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <motion.button
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact-us')}
        >
          Contact Now
        </motion.button>
      </div>
    </motion.nav>
  );
}
