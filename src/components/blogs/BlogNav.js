import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";

class BlogNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar scroll-motion">
        <Navbar.Brand href="/" id="home_nav" className="signature-icon"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end top-bar-right blog_nav_menu">
            <ul>
              <li><a id="about_nav" href="/"><span>About</span></a></li>
              <li><a id="blog_nav" href="/blog"><span>Blog</span></a></li>
            </ul>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default BlogNav;