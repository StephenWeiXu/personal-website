import React, { Component } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom";
import $ from "jquery";
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from "./components/Home";
import Blog from "./components/Blog";

window.$ = window.jQuery = $;


class App extends Component {
	render() {
		return(
			<HashRouter>
				<>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blog" component={Blog} />
						<Route path="*" component={NotFound} />
					</Switch>

					<Footer />
				</>
			</HashRouter>
		);
	}
}

export default App;
