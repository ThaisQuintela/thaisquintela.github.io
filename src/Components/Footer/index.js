import React from 'react';
import './styles.css';

function Footer() {
  return (
    <section className="footer container-fluid py-5">
      <h4>Contact Me:</h4>
      <div className="d-flex justify-content-center align-items-center">
        <i className="bi bi-envelope"></i>
        <p className="m-0">thaisquintela@gmail.com</p>
      </div>
      <a href="https://wa.me/5521982687281?text=Olá,%20podemos%20conversar?" target="_blank" rel='noreferrer'>
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href="https://www.linkedin.com/in/thais-quintela/" target="_blank" rel='noreferrer'>
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/ThaisQuintela" target="_blank" rel='noreferrer'>
        <i className="bi bi-github"></i>
      </a>
    </section>
  )
}

export default Footer;
