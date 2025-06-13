import React from 'react';
import './Home.css';
import Services from './Services'; 
import About from '../components/About';
import Contact from '../components/Contact';



function Home() {
  return (
    <>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Crafting Digital Experiences</h1>
          <p>We design and develop modern websites that grow your business.</p>
          <button className='cta-button'>Get Started</button>
        </div>
      </section>

      <About />
      <Services />
      <Contact />
      
    </>
  );
}

export default Home;
