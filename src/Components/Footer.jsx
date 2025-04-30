import React from 'react';
import { MessageSquare, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css'; // Importing the external CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Logo */}
          <div className="footer-logo">
            <div className="logo-content">
              <MessageSquare className="logo-icon" />
              <span className="logo-text">2ndLogic</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            <a href="#">
              <Instagram className="social-icon" />
            </a>
            <a href="#">
              <Linkedin className="social-icon" />
            </a>
            <a href="#">
              <Twitter className="social-icon" />
            </a>
            <a href="mailto:contact@2ndlogic.com">
              <Mail className="social-icon" />
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {currentYear} 2ndLogic. All rights reserved.
          </div>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
