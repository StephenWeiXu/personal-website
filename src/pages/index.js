import React from "react";
import BlogPage from "../components/blogs/BlogPage";
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';

import "../scss/index.scss";


const App = ({ data }) => {
  const posts = data.allButterPost.edges;
  // componentDidMount() {
  //   document.getElementById("about_nav").classList.remove("active");
  // }

  return (
    <>
      <BlogPage posts={posts} />
    </>
  );
}

export default App;


export const query = graphql`
  query {
    allButterPost(filter: {
      categories: {
        elemMatch: {
          slug: {}
        }
	    }},
      sort: { order: DESC, fields: [published] }
    ) {
      edges {
        node {
          id
          slug
          title
          published
          featured_image
          summary
        }
      }
    }
  }
`;