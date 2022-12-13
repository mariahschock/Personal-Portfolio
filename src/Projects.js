import React from 'react';
import project1 from './Taco-bout-it.png';
import project2 from './Müsík-by-Jams.jpg';
import project3 from './Termagotchi.png';
import project4 from './Happy-tails.png';
import Leo from './Leo.png';
import TK from './TK.png';
import Phoebe from './Phoebe.png';
import Bruce from './Bruce.png';
import { useHistory } from 'react-router-dom';
import './App.css';

export default function Projects() {
  const history = useHistory();

  function clickHandler() {
    history.push('/');
    history.go();
  }
  return (
    <div className="project-page">
      <header>
        <button onClick={clickHandler} className="home">Take me back</button>
        <h1>Projects I&apos;m Proud Of</h1>
      </header>
      <div className="projects">
        <div className="taco">
          <div className="description">
            <h2>Taco &apos;Bout It</h2>
            <p>Taco review community app that allows users to find, review, and taco &apos;bout all things tacos!</p>
            <div className="links">
              <a className="code-link" href="https://github.com/mariahschock/Taco-Bout-It" target="blank">Source Code</a>
              <a className="project-link" href="https://taco-bout-it.netlify.app/" target="blank">See Live</a>
            </div>
          </div>
          <img src={project1} />
        </div>
        <div className="music">
          <div className="description">
            <h2>Müsík by Jams</h2>
            <p>An app that allows users to discover, connect, and experience their favorite artists.</p>
            <div className="links">
              <a className="code-link" href="https://github.com/mariahschock/Musik-by-Jams" target="blank">Source Code</a>
              <a className="project-link" href="https://musik-jams.netlify.app/" target="blank">See Live</a>
            </div>
          </div>
          <img src={project2} />
        </div>
        <div className="termagotchi">
          <div className="description">
            <h2>Termagotchi</h2>
            <p>A terminal-based, Tamagotchi-inspired, choose-your-own-adventure game.</p>
            <div className="links">
              <a className="code-link" href="https://github.com/mariahschock/Termagotchi" target="blank">Source Code</a>
              <a className="project-link" href="https://www.npmjs.com/package/the-termagotchi" target="blank">See Live</a>
            </div>
          </div>
          <img src={project3} />
        </div>
        <div className="happy">
          <div className="description">
            <h2>Happy Tails</h2>
            <p>Happy Tails, a full-stack mono-repo app that takes the stress out of searching for a dog park.</p>
            <div className="links">
              <a className="code-link" href="https://github.com/happy-tails-dogpark/happy-tails" target="blank">Source Code</a>
              <a className="project-link" href="happy-tails-dogpark.herokuapp.com/" target="blank">See Live</a>
            </div>
          </div>
          <img src={project4} />
        </div>
        <div className="babes">
          <div className="description">
            <h2>The Babes</h2>
            <p>Possibly my best accomplishments in life and part of the reason I do what I do... Meet Leo, TK (Thicc Kitty), Phoebe, and Bruce!</p>
            <div className="pics">
              <img src={Leo} />
              <img src={TK} />
              <img src={Phoebe} />
              <img src={Bruce} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
