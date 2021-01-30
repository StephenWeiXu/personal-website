import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class BlogNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar scroll-motion">
        <Navbar.Brand href="/" id="home_nav" className="signature-icon"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end top-bar-right blog_nav_menu">
            <ul>
              <li><NavLink id="about_nav" to="/"><span>About</span></NavLink></li>
              <li><NavLink id="blog_nav" to="/blog"><span>Blog</span></NavLink></li>
            </ul>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default BlogNav;