import React, { useState } from 'react';
import './Contact.css'; // We'll style it next

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
