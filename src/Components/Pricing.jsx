import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './Pricing.css'; // Import external CSS

const PricingTier = ({ name, price, features, isPopular = false, ctaText }) => {
  return (
    <motion.div 
      className={isPopular ? 'pricing-card-popular' : 'pricing-card'}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {isPopular && (
        <div className="popular-badge">
          Most Popular
        </div>
      )}
      <h3 className="pricing-title">{name}</h3>
      <div className="pricing-price">{price}</div>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            className="pricing-feature"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Check className="check-icon" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      <a href="#contact" className={isPopular ? 'btn-primary' : 'btn-secondary'}>
        {ctaText}
      </a>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: "GhostWin",
      price: "$2,399",
      features: [
      "Slack-native content automation system",
      "Multi-platform output (LinkedIn, Twitter, Instagram)",
      "Custom voice training for your clients",
      "Single workflow integration with existing tools",
      "Save $60,000+ annually in content creation costs"
      ],
      ctaText: "Get Started"
    },
    {
      name: "DFY Solutions",
      price: "$3,999",
      features: [
        "Bespoke automation built for your specific needs",
        "Complete solution design and implementation",
        "Seamless integration with your tools",
        "Optimization and efficiency auditing",
        "Priority support access",
      ],
        isPopular: true,
        ctaText: "Recommended Choice"
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        
        <motion.div 
          className="pricing-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pricing-main-title">
            Simple, Transparent Pricing
          </h2>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs and scales with your business.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <motion.div 
          className="pricing-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Need a custom solution? <a href="#contact" className="pricing-footer-link">Contact us</a> for enterprise pricing.</p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Pricing;
