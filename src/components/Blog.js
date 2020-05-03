import React, { Component } from "react";
import BlogPostList from "./blogs/BlogPostList";
import BlogNav from "./blogs/BlogNav";
import {Helmet} from "react-helmet";

class Blog extends Component {
  componentDidMount() {
    document.getElementById("about_nav").classList.remove("active");
  }

	render() {
		return (
      <>
        <Helmet>
          <title>Blog | Wei Xu</title>
          <meta name="description" content="Check out Wei Xu's personal blog post." />
        </Helmet>

        <BlogNav />

        <div className="blog">
          <BlogPostList />
        </div>
      </>
		);
	}
}

export default Blog;