import React from 'react';
import Mariah from './Mariah.jpg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

export default function LandingPage() {
  const history = useHistory();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const clickHandler = () => {
    history.push('/projects');
    history.go();
  };
  
  return (
    <div className="home">
      <div className="me">
        <h1>Well Hi! <br /> My Name is Mariah, and I&apos;m a Full-Stack Software Engineer.</h1> 
        <img 
          src={Mariah}
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
        />
      </div>
      <div className="hover">
        {hover && <p>I&apos;m a full-stack software engineer with a passion for curating a functional user experience through consent driven teamwork. My main technologies include React and Node while working in SQL databases. If I&apos;m not at my computer typing away, you can find me outside, cozied up with a book, dancing, or spending quality time with my friends. </p>}
      </div>
      <div className="button">
        <button onClick={clickHandler} className="landing-btn">Check me out!</button>
      </div>
    </div>
  );
}
