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
          <div className="h1 d-inline-block text-white" style={{ fontFamily: "Permanent Marker" }}>Jacob</div>
          <div className="h1 d-inline ps-2 strokewhite" style={{ fontFamily: "Permanent Marker" }}>Chen</div>
      </header>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="m-auto" style={{ fontFamily: "Varela Round" }}>
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
