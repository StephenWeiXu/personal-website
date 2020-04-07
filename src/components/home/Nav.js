import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav id="navigation-bar" className="top-bar">
        <div className="top-bar-left">
          <NavLink to="/"><div id="home_nav" className="signature-icon hide-for-small-only"></div></NavLink>
        </div>
        <div className="top-bar-right">
          <ScrollspyNav
            scrollTargetIds={["about", "skills", "work", "blog", "publication"]}
            offset={10}
            activeNavClass="active"
            router="HashRouter"
          >
            <ul className="dropdown menu" data-dropdown-menu>
              <li><NavLink to="#about" id="about_nav"><span>ABOUT</span></NavLink></li>
              <li><NavLink to="#skills"><span>SKILLS</span></NavLink></li>
              <li><NavLink to="#work"><span>WORK</span></NavLink></li>
              <li><NavLink to="#blog"><span>BLOG</span></NavLink></li>
              <li><NavLink to="#publication"><span>PUBLICATION</span></NavLink></li>
            </ul>
          </ScrollspyNav>
        </div>
      </nav>
    )
  }
}

export default Nav;