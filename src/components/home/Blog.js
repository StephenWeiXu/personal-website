import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import BlogPostList from '../blogs/BlogPostList';

class Blog extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;
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
			<div className="blog-container txtc">
				{/* {this.renderBlogsBase()}
				{this.createBlogRoutes()} */}
				<h2>Blog</h2>
				<Link to="/blog"><button className="button secondary">See Blog Posts</button></Link>
			</div>
		)
	}
}

export default Blog