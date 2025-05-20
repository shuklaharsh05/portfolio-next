import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-background/80 backdrop-blur-lg border-b border-neutral-800 py-3' 
      : 'bg-transparent py-5'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl font-bold gradient-text">
          HARSH
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link">
            <span className="nav-text-wrapper">
              <span className="nav-text">Home</span>
              <span className="nav-text nav-text-clone">Home</span>
            </span>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-text-wrapper">
              <span className="nav-text">About</span>
              <span className="nav-text nav-text-clone">About</span>
            </span>
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-text-wrapper">
              <span className="nav-text">Projects</span>
              <span className="nav-text nav-text-clone">Projects</span>
            </span>
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-text-wrapper">
              <span className="nav-text">Skills</span>
              <span className="nav-text nav-text-clone">Skills</span>
            </span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-text-wrapper">
              <span className="nav-text">Contact</span>
              <span className="nav-text nav-text-clone">Contact</span>
            </span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-neutral-800/30 text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 z-40 w-3/4 sm:w-1/2 bg-neutral-900 shadow-xl flex flex-col md:hidden"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 rounded-lg bg-neutral-800 text-foreground"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-lg">
          <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        </div>
      </motion.div>
      
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;