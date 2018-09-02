import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
	render() {
		return(
			<div className="not-found txtc">
				<h1 className="block">404</h1>
				<p>SORRY, PAGE NOT FOUND!</p>
				<Link to="/"><button className="button">Home Page</button></Link>
			</div>
		);
	}
}

export default NotFound;