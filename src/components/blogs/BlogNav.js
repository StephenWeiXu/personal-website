import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from "gatsby";


class BlogNav extends Component {
  render() {
    return (
      <Navbar id="navigation-bar" className="top-bar scroll-motion">
        <Link to="/" id="home_nav" className="signature-icon"></Link>
        <Navbar.Collapse className="justify-content-end top-bar-right blog_nav_menu">
            <ul>
              <li><Link id="about_nav" to="/about"><span>About</span></Link></li>
            </ul>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default BlogNav;