import React from 'react';
import { Slack, Layers, Megaphone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css'; // << Important, import your CSS!

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Slack className="icon" />,
      title: "Slack-Native Experience",
      description: "Create content without leaving Slack. No context switching, no new apps to learn."
    },
    {
      icon: <Layers className="icon" />,
      title: "Multi-Platform Output",
      description: "Turn one idea into tailored content for LinkedIn, Twitter, Instagram, and more."
    },
    {
      icon: <Megaphone className="icon" />,
      title: "Authentic Voice Preservation",
      description: "Our AI maintains your unique tone and style across all platforms."
    },
    {
      icon: <Clock className="icon" />,
      title: "5+ Hours Saved Weekly",
      description: "Reclaim your time by automating the most time-consuming aspects of content creation."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        
        {/* Section Heading */}
        <motion.div 
          className="features-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">
            Features That Make a Difference
          </h2>
          <p className="features-subtitle">
            Our platform is designed to solve real problems for content creators and marketing teams.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="features-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
