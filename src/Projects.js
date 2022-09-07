import React from 'react';
import project1 from './Taco-bout-it.png';
import project2 from './Müsík-by-Jams.jpg';
import project3 from './Termagotchi.png';
import './App.css';

export default function Projects() {
  return (
    <div className="project-page">
      <header>
        <h1>Projects I&apos;m Proud Of</h1>
      </header>
      <div className="projects">
        <div className="taco">
          <div className="description">
            <h2>Taco &apos;Bout It</h2>
            <p>Taco review community app that allows users to find, review, and taco &apos;bout all things tacos!</p>
          </div>
          <img src={project1} />
        </div>
        <div className="music">
          <div className="description">
            <h2>Müsík by Jams</h2>
            <p>An app that allows users to discover, connect, and experience their favorite artists.</p>
          </div>
          <img src={project2} />
        </div>
        <div className="termagotchi">
          <div className="description">
            <h2>Termagotchi</h2>
            <p>A terminal-based, Tamagotchi-inspired, choose-your-own-adventure game.</p>
          </div>
          <img src={project3} />
        </div>
      </div>
    </div>
  );
}
