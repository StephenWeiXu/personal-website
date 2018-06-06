import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import { DropdownMenu } from "foundation-sites/js/foundation.dropdownMenu";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publication from './components/Publication';

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
				<div className="grid-container">
					<div className="top-bar">
						<div className="top-bar-left">
							<NavLink to="/"><img className="signature-icon hide-for-small-only" src="images/favicon.png" /></NavLink>
						</div>
						<div className="top-bar-right">
							<ul className="dropdown menu" data-dropdown-menu>
								<li onClick={this.handleNavClick}><NavLink to="/" id="about_nav"><span>ABOUT</span></NavLink></li>
								<li onClick={this.handleNavClick}><NavLink to="/skills"><span>SKILLS</span></NavLink></li>
								<li onClick={this.handleNavClick}><NavLink to="/projects"><span>PROJECTS</span></NavLink></li>
								<li onClick={this.handleNavClick}><NavLink to="/publication"><span>PUBLICATION</span></NavLink></li>
							</ul>
						</div>
					</div>

					<div className="content ptxl">
						<Route exact path="/" component={About} />
						<Route path="/skills" component={Skills} />
						<Route path="/projects" component={Projects} />
						<Route path="/publication" component={Publication} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
