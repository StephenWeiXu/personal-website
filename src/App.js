import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import $ from "jquery";
import { DropdownMenu } from "foundation-sites/js/foundation.dropdownMenu";
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Publication from './components/Publication';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';
import ScrollspyNav from "react-scrollspy-nav";

window.$ = window.jQuery = $;


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		new DropdownMenu($("[data-dropdown-menu]"));
	}

	handleNavClick(event) {
		$(event.target).closest("li").siblings().find("a").removeClass("active");
		$(event.target).closest("a").addClass("active");
	}

	render() {
		return(
			<HashRouter>
				<div>
					<div className="top-bar">
						<div className="top-bar-left">
							<NavLink to="/"><img className="signature-icon hide-for-small-only" src="images/favicon.png" /></NavLink>
						</div>
						<div className="top-bar-right">
							<ScrollspyNav scrollTargetIds={["about", "work", "skills", "publication"]} activeNavClass="active" router="HashRouter">
								<ul className="dropdown menu" data-dropdown-menu>
									<li onClick={this.handleNavClick}><NavLink to="#about" id="about_nav"><span>ABOUT</span></NavLink></li>
									<li onClick={this.handleNavClick}><NavLink to="#work"><span>WORK</span></NavLink></li>
									<li onClick={this.handleNavClick}><NavLink to="#skills"><span>SKILLS</span></NavLink></li>
									<li onClick={this.handleNavClick}><NavLink to="#publication"><span>PUBLICATION</span></NavLink></li>
								</ul>
							</ScrollspyNav>
						</div>
					</div>
					
					<div id="content" className="content">
						<div className="section" id="about">
							<About />
						</div>
						<div className="section" id="work">
							<Work />
						</div>
						<div className="section" id="skills">
							<About />
						</div>
						<div className="section" id="publication">
							<Publication />
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
