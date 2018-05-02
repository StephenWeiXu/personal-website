import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import $ from "jquery";
import About from './components/About';
import Project from './components/Project';
import Publication from './components/Publication';

window.$ = window.jQuery = $;


class App extends Component {
	componentDidMount() {
		$(document).foundation();
	}

	render() {
		return(
			<BrowserRouter>
				<div className="grid-container">
					<div className="top-bar">
						<div className="top-bar-right">
							<ul className="dropdown menu" data-dropdown-menu>
								<li> <Link to="/" className="active"><span>ABOUT</span></Link></li>
								<li> <Link to="/project"><span>PROJECT</span></Link></li>
								<li> <Link to="/publication"><span>PUBLICATION</span></Link></li>
							</ul>
						</div>
					</div>

					<div className="content">
						<Route exact path="/" component={About} />
						<Route path="/project" component={Project} />
						<Route path="/publication" component={Publication} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
