import './App.css';
import AboutMe from './components/AboutMe.js';
import React from 'react';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App" >
      <header className="bg-light">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/contact">
              {/* <Contact /> */}
            </Route>
            <Route path="/" >
              {/* <Home /> */}
            </Route>
          </Switch>
        </Router>
      </header>
      <Landing />
    </div>
  );
}

export default App;