import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";

const isBrowser = () => typeof window !== "undefined";

class HomeNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar">
        <Navbar.Brand href="/" id="home_nav" className="signature-icon"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end top-bar-right">
          {isBrowser() &&
          <ScrollspyNav
            scrollTargetIds={["about", "skills", "work"]}
            offset={10}
            activeNavClass="active"
          >
            <ul className="d-none d-md-block">
              <li><a href="#about" id="about_nav"><span>About</span></a></li>
              <li><a href="#skills"><span>Skills</span></a></li>
              <li><a href="#work"><span>Work</span></a></li>
            </ul>
          </ScrollspyNav>
          }
          <a href="/blog" className="mls"><span>Blog</span></a>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HomeNav;