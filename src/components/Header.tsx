
import React, { useState, useEffect } from 'react';
import { Telescope, Sparkle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8',
        scrolled ? 'glass-panel bg-space-100/90' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Telescope className="h-8 w-8 text-neon-cyan animate-pulse-glow" />
              <Sparkle className="h-5 w-5 text-neon-magenta absolute" style={{ marginLeft: '4px', marginTop: '-12px' }} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white text-glow-cyan">
                Imagination Traveler GPT
              </h1>
              <p className="text-xs text-gray-400 flex items-center">
                Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-magenta transition-colors ml-1 flex items-center"><span>AiWebTools.Ai</span> <Sparkle className="h-3 w-3 ml-1 text-neon-cyan" /></a>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
            >
              USE Imagination Traveler GPT NOW
            </a>
            <a 
              href="https://time-machine-gpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-magenta transition-colors"
            >
              Try Time Machine GPT
            </a>
            <a href="#faq" className="text-white hover:text-neon-cyan transition-colors">
              FAQ
            </a>
            <a href="#disclaimer" className="text-white hover:text-neon-cyan transition-colors">
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-cyan transition-colors"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 py-4 glass-panel rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <a 
                href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue text-center"
              >
                USE Imagination Traveler GPT NOW
              </a>
              <a 
                href="https://time-machine-gpt.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-center py-2"
              >
                Try Time Machine GPT
              </a>
              <a href="#faq" className="text-white text-center py-2" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
              <a href="#disclaimer" className="text-white text-center py-2" onClick={() => setMenuOpen(false)}>
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-center py-2"
              >
                More AI Tools
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
