import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import "foundation-sites/dist/css/foundation.css";
import "foundation-sites/dist/js/foundation.min.js";
import Home from './components/Home';
import Project from './components/Project';
import Publication from './components/Publication';
import './App.css';

window.$ = window.jQuery = $;


class App extends Component {
	componentDidMount() {
		$(document).foundation();
	}

	render() {
	return(
		<HashRouter>
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="dropdown menu" data-dropdown-menu>
							<li> <NavLink to="/">HOME</NavLink></li>
							<li> <NavLink to="/project">Project</NavLink></li>
							<li> <NavLink to="/publication">PUBLICATION</NavLink></li>
						</ul>
					</div>
				</div>

				<div className="content">
					<Route exact path="/" component={Home} />
					<Route path="/project" component={Project} />
					<Route path="/publication" component={Publication} />
				</div>
			</div>
		</HashRouter>
	);
	}
}

export default App;
