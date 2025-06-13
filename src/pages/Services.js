import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaCode, FaTools } from 'react-icons/fa';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <Link to="/services/design" className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>Web Design</h3>
          <p>Beautiful, user-friendly website designs tailored to your brand.</p>
        </Link>

        <Link to="/services/development" className="service-card">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>Fast, responsive websites built with modern tools like React.</p>
        </Link>

        <Link to="/services/maintenance" className="service-card">
          <FaTools className="service-icon" />
          <h3>Maintenance & Support</h3>
          <p>Ongoing website updates, fixes, and performance improvements.</p>
        </Link>
      </div>
    </section>
  );
}

export default Services;
