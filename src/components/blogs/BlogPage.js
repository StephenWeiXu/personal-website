import React from "react";
import BlogPostList from "./BlogPostList";
import BlogNav from "./BlogNav";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';


const BlogPage = ({ posts }) => {

  return (
    <>
      <Helmet>
        <title>Blog | Wei Xu</title>
        <meta name="description" content="Check out Wei Xu's personal blog posts." />
      </Helmet>

      <BlogNav />

      <div className="blog">
        <BlogPostList posts={posts} />
      </div>

      <Footer />
    </>
  );
}

export default BlogPage;
