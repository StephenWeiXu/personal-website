import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import About from './components/About';
import Project from './components/Project';
import Publication from './components/Publication';

window.$ = window.jQuery = $;


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('[data-dropdown-menu]').foundation();
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
						<div className="top-bar-right">
							<ul className="dropdown menu" data-dropdown-menu>
								<li onClick={this.handleNavClick}><NavLink to="/" id="about_nav"><span>ABOUT</span></NavLink></li>
								<li onClick={this.handleNavClick}><NavLink to="/project"><span>PROJECT</span></NavLink></li>
								<li onClick={this.handleNavClick}><NavLink to="/publication"><span>PUBLICATION</span></NavLink></li>
							</ul>
						</div>
					</div>

					<div className="content ptxl">
						<Route exact path="/" component={About} />
						<Route path="/project" component={Project} />
						<Route path="/publication" component={Publication} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
