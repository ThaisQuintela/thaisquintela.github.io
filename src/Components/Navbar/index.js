import React from 'react';

import './styles.css';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light d-flex justify-content-end">
      <a href="#home" className="navbar-brand mx-2 text-white"><span>Home</span></a>
      <a href="#about" className="navbar-brand mx-2 text-white"><span>About</span></a>
      <a href="#portfolio" className="navbar-brand mx-2 text-white"><span>Portfolio</span></a>
      <a href="#tools" className="navbar-brand mx-2 text-white"><span>Tools</span></a>
      <a href="https://wa.me/5521982687281?text=Olá,%20podemos%20conversar?" target="_blank" rel='noreferrer'>
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href="https://www.linkedin.com/in/thais-quintela/" target="_blank" rel='noreferrer'>
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/ThaisQuintela" target="_blank" rel='noreferrer'>
        <i className="bi bi-github"></i>
      </a>
    </nav>
  )
}

export default Navbar;
