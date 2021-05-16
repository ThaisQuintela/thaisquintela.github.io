import React from 'react';

import './styles.css';

function Home() {
  return (
    <section
      id="home"
      className="home container-fluid vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="d-flex flex-column align-items-center fw-bold text-white">
        <p className="greetings text-start me-auto fs-3">Hey there!</p>
        <h1 className="text-start me-auto lh-sm fw-bold">I&apos;m Thais Quintela</h1>
        <p className="job me-auto fs-6 fw-light">A Front end developer.</p>
        <div className="me-auto">
          <a
            href="https://github.com/ThaisQuintela"
            target="_blank"
            rel='noreferrer'
          >
            <i className="bi bi-github m-0"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thais-quintela/"
            target="_blank"
            rel='noreferrer'
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://wa.me/5521982687281?text=Olá,%20podemos%20conversar?"
            target="_blank"
            rel='noreferrer'
          >
            <i className="bi bi-whatsapp m-0"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home;
