import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">TechVerse</h1>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
  {isOpen ? (
    <span className="close-icon">✖</span>
  ) : (
    <>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </>
  )}
</div>

    </nav>
  );
}

export default Navbar;
