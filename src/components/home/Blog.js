import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import BlogPostList from '../blogs/BlogPostList';

class Blog extends Component {
	render() {
		return (
			<div className="blog-container txtc">
				<h2>Blog</h2>
				<Link to="/blog"><button className="button secondary">See Blog Posts</button></Link>
			</div>
		)
	}
}

export default Blog