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

	scrollListener() {
		if (window.pageYOffset > document.getElementById("skills").offsetTop) {
			document.getElementById("navigation-bar").classList.add("scroll-motion");
		} else {
			document.getElementById("navigation-bar").classList.remove("scroll-motion");
		}
	}

	componentDidMount() {
		new DropdownMenu($("[data-dropdown-menu]"));

		window.addEventListener("scroll", this.scrollListener);
		this.registerHomeNavListener();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
	}

	registerHomeNavListener() {
		document.getElementById("home_nav").addEventListener("click", (event) => {
			event.preventDefault();

			window.scrollTo({top: 0, behavior: "smooth"});
		})
	}

	render() {
		return(
			<HashRouter>
				<div>
					<div>
						<div id="navigation-bar" className="top-bar">
							<div className="top-bar-left">
								<div id="home_nav" className="signature-icon hide-for-small-only"></div>
							</div>
							<div className="top-bar-right">
								<ScrollspyNav
									scrollTargetIds={["about", "skills", "work", "publication"]}
									offset={10}
									activeNavClass="active"
									router="HashRouter"
								>
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
