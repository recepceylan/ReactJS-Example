import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";

const Navi = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light className="navContainer">
        <Link to="/" className="n-link">
          Simpsons
        </Link>
        <Collapse navbar>
          <Nav className="menuBar" navbar>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/add-character" className="nav-link">
              New Character
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
