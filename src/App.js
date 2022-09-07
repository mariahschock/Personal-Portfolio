import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
