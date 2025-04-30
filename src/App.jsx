import React, { useEffect } from 'react';  
import Header from './Components/Header';
import Hero from './Components/Hero';
import Problem from './Components/Problem';
import Solution from './Components/Solution';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import SocialProof from './Components/SocialProof';
import CTA from './Components/CTA';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "2ndLogic | AI Content Automation";
    
    // Add observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all section headings and other elements to animate
    const elements = document.querySelectorAll('section h2, section .card, section .pricing-card, section .pricing-card-popular');
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up observer when component unmounts
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Pricing />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
