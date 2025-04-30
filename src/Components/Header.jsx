import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import './Header.css'; // Importing external CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">

          {/* Logo */}
          <div className="header-logo">
            <MessageSquare className="logo-icon" />
            <span className="logo-text">2ndLogic</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a
              href="https://calendly.com/jeetjoshi-work/book-your-2ndlogic-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta"
  >
    Schedule a Demo
  </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a
      href="https://calendly.com/jeetjoshi-work/book-your-2ndlogic-demo"
      target="_blank"
      rel="noopener noreferrer"
      className="header-cta"
      onClick={() => setIsMenuOpen(false)}
    >
      Schedule a Demo
    </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
