import React from 'react';
import { Clock, BrainCircuit, MessageCircleWarning } from 'lucide-react';
import './Problem.css'; // Import external CSS

const Problem = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        
        {/* Heading */}
        <div className="problem-heading">
          <h2 className="problem-title">
            Capturing Ideas Should Be Simple
          </h2>
          <p className="problem-subtitle">
            Creating consistent, high-quality content across multiple platforms shouldn't be a full-time job.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="problem-grid">
          
          {/* Card 1 */}
          <div className="problem-card">
            <div className="problem-icon">
              <BrainCircuit className="icon" />
            </div>
            <h3 className="problem-card-title">
              Lost Inspiration
            </h3>
            <p className="problem-card-description">
              Great ideas come at inconvenient times and are often lost before you can capture them properly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="problem-card">
            <div className="problem-icon">
              <Clock className="icon" />
            </div>
            <h3 className="problem-card-title">
              Time-Consuming
            </h3>
            <p className="problem-card-description">
              Spending hours adapting the same content for different platforms drains your creative energy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="problem-card">
            <div className="problem-icon">
              <MessageCircleWarning className="icon" />
            </div>
            <h3 className="problem-card-title">
              Voice Inconsistency
            </h3>
            <p className="problem-card-description">
              Maintaining your authentic voice across different content types and platforms is challenging.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
