import React from 'react';

import './styles.css';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light d-flex justify-content-end">
      <a href="#home" className="navbar-brand mx-2">Home</a>
      <a href="#about" className="navbar-brand mx-2">About</a>
      <a href="#skills" className="navbar-brand mx-2">Skills</a>
      <a href="#tools" className="navbar-brand mx-2">Tools</a>
      <a href="#portfolio" className="navbar-brand mx-2">Portfolio</a>
    </nav>
  )
}

export default Navbar;
