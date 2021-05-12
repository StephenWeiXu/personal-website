import React from "react";
import { Helmet } from "react-helmet";
import BlogNav from "../components/blogs/BlogNav";
import { graphql } from 'gatsby'

import "../scss/blog.scss";


const BlogPostDetail = function Template({ data }) {
  const post = data.butterPost;
  // componentDidMount() {
  //   window.scrollTo({
	// 		top: 0
	// 	});
  // }

  function getPostDate(rawDate) {
    const date = new Date(rawDate);
    const dateInfo = date.toString().split(" ").slice(1, 4);
    return `${dateInfo[0]} ${dateInfo[1]}, ${dateInfo[2]}`;
  }
  
  function renderPostHtml() {
    return {__html: post.body};
  }
  
  return (
    <>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta name="description" content={post.meta_description} />
      </Helmet>

      <BlogNav />

      <div className="blog">
        <div className="txtc mbxl ptxl">
            <h1>{post.title}</h1>
            <span className="mvm">{getPostDate(post.published)}</span>
          </div>
          <div className="feature-image">
            <img src={post.featured_image} style={{width: "100%"}} alt={post.title} />
          </div>
        <div className="section">
          <div dangerouslySetInnerHTML={renderPostHtml()} className="mvl"/>
        </div>
      </div>
    </>
  );
}

export default BlogPostDetail;


export const pageQuery = graphql`
  query($slug: String!) {
    butterPost(slug: { eq: $slug }) {
      title
      seo_title
      published
      featured_image
      body
      date
      meta_description
      tags {
        name
      }
    }
  }
`