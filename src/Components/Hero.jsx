import React from 'react';
import './Hero.css'; // Add this
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Transform Your Content <br />
          Creation in Seconds, Not Hours
        </h1>
        <p className="hero-subtitle">
          AI-powered content automation that preserves your authentic voice across all platforms, directly integrated with Slack.
        </p>
        <div className="hero-buttons">
          <a href="#how-it-works" className="btn-primary">
            See How It Works <ArrowRight size={20} />
          </a>
          <a 
          href="https://calendly.com/jeetjoshi-work/book-your-2ndlogic-demo"
          target="_blank"
          rel="noopener noreferrer"
        className="btn-secondary"
>
  Schedule a Demo
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
