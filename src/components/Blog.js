import React, { Component } from "react";
import BlogPostList from "./blogs/BlogPostList";
import BlogNav from "./blogs/BlogNav";

class Blog extends Component {
  componentDidMount() {
    document.getElementById("about_nav").classList.remove("active");
  }

	render() {
		return (
      <>
        <BlogNav />

        <div className="blog">
          <div className="section">
            <BlogPostList />
          </div>
        </div>
      </>
		);
	}
}

export default Blog;