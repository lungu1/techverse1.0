import React from 'react';
import Services from './Services'; // reuse your existing component
import './ServicesPage.css'; // optional, if you want different styling

function ServicesPage() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <p>Explore the services TechVerse offers to help you grow online.</p>
      <Services />
    </div>
  );
}

export default ServicesPage;
