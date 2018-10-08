import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import $ from "jquery";
import { DropdownMenu } from "foundation-sites/js/foundation.dropdownMenu";
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Publication from './components/Publication';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollspyNav from "react-scrollspy-nav";

window.$ = window.jQuery = $;


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		new DropdownMenu($("[data-dropdown-menu]"));

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > document.getElementById("work").offsetTop) {
				document.getElementById("navigation-bar").classList.add("scroll-motion");
			} else {
				document.getElementById("navigation-bar").classList.remove("scroll-motion");
			}
		});
	}

	render() {
		return(
			<HashRouter>
				<div>
					<div>
						<div id="navigation-bar" className="top-bar">
							<div className="top-bar-left">
								<NavLink to="/"><img className="signature-icon hide-for-small-only" src="images/favicon.png" /></NavLink>
							</div>
							<div className="top-bar-right">
								<ScrollspyNav scrollTargetIds={["about", "skills", "work", "publication"]} activeNavClass="active" router="HashRouter">
									<ul className="dropdown menu" data-dropdown-menu>
										<li><NavLink to="#about" id="about_nav"><span>ABOUT</span></NavLink></li>
										<li><NavLink to="#skills"><span>SKILLS</span></NavLink></li>
										<li><NavLink to="#work"><span>WORK</span></NavLink></li>
										<li><NavLink to="#publication"><span>PUBLICATION</span></NavLink></li>
									</ul>
								</ScrollspyNav>
							</div>
						</div>
						
						<div className="content">
							<div className="section background-base" id="about">
								<About />
							</div>
							<div className="section" id="skills">
								<Skills />
							</div>
							<div className="section" id="work">
								<Work />
							</div>
							<div className="section" id="publication">
								<Publication />
							</div>
							<div className="section" id="footer">
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
