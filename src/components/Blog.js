import React, { Component } from "react";
import BlogPostList from "./blogs/BlogPostList";
import BlogNav from "./blogs/BlogNav";

class Blog extends Component {
  componentDidMount() {
  }

	render() {
		return (
      <>
        <BlogNav />

        <div className="section">
          <div className="blog-page">
            <h1>Blog</h1>
            <BlogPostList />
          </div>
        </div>
      </>
		);
	}
}

export default Blog;