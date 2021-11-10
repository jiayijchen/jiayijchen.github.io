import './App.css';
import AboutMe from './AboutMe.js';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="text-center bg-dark pt-5 pb-4">
        <h1 className="h1-animate">Jacob Chen</h1>
      </header>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="m-auto">
              <NavLink to="/" exact={true} className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contact">
            {/* <Contact /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
