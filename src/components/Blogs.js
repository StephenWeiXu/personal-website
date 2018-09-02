import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Blog from './blogs/Blog';

class Blogs extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;
		this.state = { content: null };

		this.blogs = {
			"hello-world": 'hello-world.md'
		}
	}
	
	componentDidMount() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}
	}

	createBlogDist() {
		let blogDist = [];

		let counter = 0;
		for(let blog in this.blogs) {
			blogDist.push(
				<Link key={counter} to={`/blogs/${blog}`}>
					{blog}
				</Link>
			)
			counter += 1;
		}

		return blogDist;
	}

	renderBlogsBase() {
		let blogsRoute = <Route exact path={this.match.path} render={() => (
				<div>
					<h1>Blogs Dist</h1>
					{ this.createBlogDist() }
				</div>
			)}
		/>

		return blogsRoute;
	}

	createBlogRoutes() {
		let blogsRoutes = [];

		for(let blog in this.blogs) {
			blogsRoutes.push(
				<Route key={blog} path={`/blogs/${blog}`} render={() => (
					<Blog contentFile={this.blogs[blog]} />
				)} />
			)
		}

		return blogsRoutes;
	}

	render() {
		return (
			<div className="blogs">
				{this.renderBlogsBase()}
				{this.createBlogRoutes()}
			</div>
		)
	}
}

export default Blogs