import React from 'react';

import './styles.css';

function About() {
  return (
    <section id="about" className="about container-fluid h-100 py-5 d-flex justify-content-center">
      <div className="aboutMe w-75">
        <h1 className="my-4">About me</h1>
        <p>I am a Front End Developer based in Rio de Janeiro, Brazil. Currently, I am pursuing a Bachelor`s degree in Computer Science and also am a Full Stack Web Development student at <a href="https://www.betrybe.com/">Trybe</a>.</p>
        <p>Working with logic to solve problems is what I like most. Every new project is a new challenge and opportunity to learn.</p>
        <p>As a former Chemical Engineer student, I learned to approach each challenge in a structured way and try to look at it from various perspectives. Which is the most eficient way to build this project? How can I improve it?</p>
        <p>My focus at the moment are responsive websites but I am always ready to learn new things.</p>
      </div>
    </section>
  )
}

export default About;
