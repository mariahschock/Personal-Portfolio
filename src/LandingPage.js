import React from 'react';
import Mariah from './Mariah.jpg';
import './App.css';

export default function LandingPage() {
  
  return (
    <div className="home">
      <div className="me">
        <h1>Well Hi! <br /> My Name is Mariah, and I&apos;m a Full-Stack Software Engineer.</h1> 
        <img src={Mariah} />
      </div>
      <div className="button">
        <button className="landing-btn">Check me out!</button>
      </div>
    </div>
  );
}
