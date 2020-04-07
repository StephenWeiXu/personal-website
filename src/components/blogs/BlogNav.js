import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class BlogNav extends Component {
  render() {
    return (
      <nav id="navigation-bar" className="top-bar scroll-motion">
        <div className="top-bar-left">
          <NavLink to="/"><div id="home_nav" className="signature-icon hide-for-small-only"></div></NavLink>
        </div>
        <div className="top-bar-right">
            <ul className="dropdown menu" data-dropdown-menu>
              <li><NavLink to="/">ABOUT</NavLink></li>
              <li><NavLink to="/blog">BLOG</NavLink></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default BlogNav;