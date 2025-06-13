import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>TechVerse</h3>
        <p>Innovating the web, one pixel at a time.</p>
        <p>&copy; {new Date().getFullYear()} TechVerse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
