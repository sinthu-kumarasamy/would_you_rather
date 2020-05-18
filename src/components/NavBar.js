import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <NavLink to="/home">Active</NavLink>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">New Question</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
           Leaderboard
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
