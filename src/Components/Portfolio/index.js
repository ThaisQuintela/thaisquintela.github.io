import React from 'react';
import ProjectCard from './ProjectCard';
import { StarWars, TrybeWallet, TriviaGame } from '../../images';

import './styles.css';

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio container h-100 py-3"
    >
      <div>
        <h1>Portfolio</h1>
        <p></p>
      </div>
      <div className="d-flex flex-wrap">
        <ProjectCard
          classname="StarWars"
          thumbnail={ StarWars }
          title="Star Wars Planet Search"
          subtitle="React | ContextAPI | API | Bootstrap"
          text="This is my project"
          link="https://thaisquintela.github.io/starwars-planet-search/"
          repository="https://github.com/ThaisQuintela/starwars-planet-search"
        />
        <ProjectCard
          classname="TrybeWallet"
          thumbnail={ TrybeWallet }
          title="Trybe Wallet"
          subtitle="React | Redux | API | Bootstrap"
          text="This is my project"
          link="https://thaisquintela.github.io/trybe-wallet/"
          repository="https://github.com/ThaisQuintela/trybe-wallet"
        />
        <ProjectCard
          classname="TriviaGame"
          thumbnail={ TriviaGame }
          title="Trivia Game"
          subtitle="React | Redux | API | Responsive"
          text="This is my project"
          link="https://thaisquintela.github.io/trivia-game/"
          repository="https://github.com/ThaisQuintela/trivia-game"
        />
      </div>
    </section>
  )
}

export default Portfolio;
