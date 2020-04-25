import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class BlogNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar scroll-motion">
        <Navbar.Brand href="/" id="home_nav" className="signature-icon hide-for-small-only"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end top-bar-right">
            <ul>
              <li><NavLink to="/"><span>ABOUT</span></NavLink></li>
              <li><NavLink to="/blog"><span>BLOG</span></NavLink></li>
            </ul>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default BlogNav;