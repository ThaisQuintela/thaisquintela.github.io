import React from 'react';

import './styles.css';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light d-flex justify-content-end pe-3">
      <a href="#home" className="navbar-brand mx-2 text-white"><span>Home</span></a>
      <a href="#about" className="navbar-brand mx-2 text-white"><span>About</span></a>
      <a href="#portfolio" className="navbar-brand mx-2 text-white"><span>Portfolio</span></a>
      <a href="#tools" className="navbar-brand mx-2 text-white"><span>Tools</span></a>
    </nav>
  )
}

export default Navbar;
