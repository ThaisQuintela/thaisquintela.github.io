import React from 'react';
import { html, css, js, bootstrap, react, redux, mysql, mongodb, nodejs, git, figma, GitHub_Logo } from '../../images';

import './styles.css';

function Tools() {
  return (
    <section id="tools" className="tools container h-100 d-flex flex-wrap py-3">
      <h1 className="my-4 mx-auto">Tools</h1>
      <div>
        <img src={ html } alt="HTML" />
        <img src={ css } alt="CSS" />
        <img src={ js } alt="JavaScript" />
        <img src={ bootstrap } alt="Bootstrap" />
        <img src={ react } alt="React" />
        <img src={ redux } alt="Redux" />
        <img src={ mysql } alt="MySQL" />
        <img src={ mongodb } alt="MongoDB" />
        <img src={ nodejs } alt="NodeJS" />
        <img src={ git } alt="Git" />
        <img src={ GitHub_Logo } alt="Github" />
        <img src={ figma } alt="Figma" />
      </div>
    </section>
  )
}

export default Tools;
