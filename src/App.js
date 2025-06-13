import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDesign from './pages/services/WebDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import Maintenance from './pages/services/Maintenance';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/design" element={<WebDesign />} />
        <Route path="/services/development" element={<WebDevelopment />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
