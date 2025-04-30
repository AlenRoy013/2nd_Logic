import React from 'react';
import { MessageSquare, FileText, Zap } from 'lucide-react';
import './Solution.css'; // External CSS import

const Solution = () => {
  const steps = [
    {
      icon: <MessageSquare className="step-icon" />,
      title: "Type /create in Slack",
      description: "Start content creation directly in your favorite workplace tool."
    },
    {
      icon: <FileText className="step-icon" />,
      title: "Fill the quick form",
      description: "Provide basic details about your content idea in seconds."
    },
    {
      icon: <Zap className="step-icon" />,
      title: "Get platform-ready content",
      description: "Receive multi-platform content that maintains your authentic voice."
    }
  ];

  return (
    <section id="how-it-works" className="solution-section">
      <div className="solution-container">
        
        {/* Heading */}
        <div className="solution-heading">
          <h2 className="solution-title">
            Content Creation Simplified
          </h2>
          <p className="solution-subtitle">
            Our AI-powered platform turns your quick ideas into polished content for every platform you use.
          </p>
        </div>

        {/* Content Block */}
        <div className="solution-content">
          
          {/* Left Image */}
          <div className="solution-image-container">
            <img 
              src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="2ndLogic in Slack"
              className="solution-image"
            />
          </div>

          {/* Right Steps */}
          <div className="solution-steps">
            {steps.map((step, index) => (
              <div key={index} className="solution-step">
                <div className="step-icon-container">
                  {step.icon}
                </div>
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Solution;
