import React from 'react';
import ProjectCard from './ProjectCard';
import { StarWars, TrybeWallet, TriviaGame } from '../../images';

import './styles.css';

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio container-fluid h-100 py-5"
    >
      <div>
        <h1 className="text-start ms-4">
          <i className="bi bi-chevron-double-right me-2 ms-0"></i>
          Projects
        </h1>
        <p></p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <ProjectCard
          classname="StarWars"
          thumbnail={ StarWars }
          title="Star Wars Planet Search"
          subtitle="React | ContextAPI | React Hooks | API | Bootstrap | Trybe"
          text="A filter list of planets from the Star Wars universe using Context API and Hooks to control global states."
          link="https://thaisquintela.github.io/starwars-planet-search/"
          repository="https://github.com/ThaisQuintela/starwars-planet-search"
        />
        <ProjectCard
          classname="TrybeWallet"
          thumbnail={ TrybeWallet }
          title="Trybe Wallet"
          subtitle="React | Redux | API | CRUD | Bootstrap | Trybe"
          text="A spending control wallet with currency converter using the Awesome API."
          link="https://thaisquintela.github.io/trybe-wallet/"
          repository="https://github.com/ThaisQuintela/trybe-wallet"
        />
        <ProjectCard
          classname="TriviaGame"
          thumbnail={ TriviaGame }
          title="Trivia Game"
          subtitle="React | Redux | API | Responsive | Trybe | Team Project"
          text="A game using the Trivia API to exercise team work, problem solving skills and Redux."
          link="https://thaisquintela.github.io/trivia-game/"
          repository="https://github.com/ThaisQuintela/trivia-game"
        />
      </div>
    </section>
  )
}

export default Portfolio;
