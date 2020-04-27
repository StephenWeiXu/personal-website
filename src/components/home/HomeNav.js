import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";
import { NavLink } from "react-router-dom";

class HomeNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar">
        <Navbar.Brand href="/" id="home_nav" className="signature-icon"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end top-bar-right">
          <ScrollspyNav
            scrollTargetIds={["about", "skills", "work", "publication"]}
            offset={10}
            activeNavClass="active"
            router="HashRouter"
          >
            <ul className="d-none d-md-block">
              <li><NavLink to="#about" id="about_nav"><span>ABOUT</span></NavLink></li>
              <li><NavLink to="#skills"><span>SKILLS</span></NavLink></li>
              <li><NavLink to="#work"><span>WORK</span></NavLink></li>
              <li><NavLink to="#publication"><span>PUBLICATION</span></NavLink></li>
            </ul>
          </ScrollspyNav>
          <NavLink to="/blog"><span>BLOG</span></NavLink>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HomeNav;