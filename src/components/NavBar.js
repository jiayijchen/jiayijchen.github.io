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
    <Navbar bg="light" variant="light" className="shadow-lg font2 fixed-top">
      <Nav className="m-auto">
        <NavLink to="/" exact={true} className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
      </Nav>
    </Navbar>
  )
}
