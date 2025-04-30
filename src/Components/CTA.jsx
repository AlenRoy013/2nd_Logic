import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css'; // import external CSS

const CTA = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-heading">
            Start Creating Content That Sounds Like You
          </h2>
          <p className="cta-subtext">
            Set up in minutes, save hours every week. Let our AI handle the heavy lifting while you focus on what matters.
          </p>
          <div className="cta-buttons">
          <a 
  href="https://calendly.com/jeetjoshi-work/book-your-2ndlogic-demo"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  Schedule a Demo
</a>
            <a href="#how-it-works" className="btn-secondary">
              See It In Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
