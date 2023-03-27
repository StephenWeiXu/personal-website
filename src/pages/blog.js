import React from "react";
import BlogPostList from "../components/blogs/BlogPostList";
import BlogNav from "../components/blogs/BlogNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';


const Blog = ({ data }) => {
  const posts = data.allButterPost.edges;
  // componentDidMount() {
  //   document.getElementById("about_nav").classList.remove("active");
  // }

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

export default Blog;


export const query = graphql`
  query {
    allButterPost(filter: {
      categories: {
        elemMatch: {
          slug: { in: "developer-blog" }
        }
	    }},
      sort: { order: DESC, fields: [published] }
    ) {
      edges {
        node {
          id
          slug
          title
          featured_image
          summary
        }
      }
    }
  }
`;