import React from 'react';
import Contact from '../components/Contact'; // reuse your contact form
import './ContactPage.css'; // optional

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have a project in mind? Let’s talk.</p>
      <Contact />
    </div>
  );
}

export default ContactPage;
