import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
