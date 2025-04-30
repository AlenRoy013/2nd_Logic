import React from 'react';
import './SocialProof.css'; // Import the external CSS

const SocialProof = () => {
  const partnerLogos = [
    {
      name: "Slack",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"
    },
    {
      name: "LinkedIn",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
    },
    {
      name: "X",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/1690643591twitter-x-logo-png.webp"
    },
    {
      name: "Instagram",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
    },
    {
      name: "Notion",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
    }
  ];

  return (
    <section className="socialproof-section">
      <div className="socialproof-container">

        {/* Section Heading */}
        <div className="socialproof-heading">
          <h2 className="socialproof-title">
            Trusted Technology
          </h2>
          <p className="socialproof-subtitle">
            2ndLogic integrates seamlessly with the platforms you already use.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="partner-logos">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img 
                src={partner.imageUrl} 
                alt={`${partner.name} logo`} 
              />
            </div>
          ))}
        </div>

        {/* Placeholder for Testimonials */}
        <div className="testimonials-placeholder">
          <h3 className="testimonials-title">
            What Our Customers Say
          </h3>
          <p className="testimonials-text">
            Testimonials coming soon...
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
