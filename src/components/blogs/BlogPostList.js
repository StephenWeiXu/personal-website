import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";


const BlogPostList = ({ posts }) => {
	function renderBlogPostCard(post, classProp) {
		return (
			<Link className={`horizontal-card card-as-link mbm ${classProp}`} to={`/blog/${post.slug}`}>
				<Row className="cursor-pointer">
					<Col sm={6} className="card-image" style={ {backgroundImage: `url("${post.featured_image}")`} }>
					</Col>
					<Col sm={6}>
						<h4 className="bold">{post.title}</h4>
						<p className="card-description mtm">{post.summary}</p>
					</Col>
				</Row>
			</Link>
		);
	}

	return (
		<div className="blog-post-container">
			<Row className="section">
				{posts.map(({ node }, index) => {
					return (
						<Row key={index} className="mbl">
							{renderBlogPostCard(node, '')}
						</Row>
					);
				})}
			</Row>
		</div>
	);
}

export default BlogPostList;

