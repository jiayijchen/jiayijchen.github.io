import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import {
  NavLink
} from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="shadow-lg">
      <Nav className="m-auto">
        <NavLink to="/" exact={true} className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active"> Contact </NavLink>
      </Nav>
    </Navbar>
  )
}
