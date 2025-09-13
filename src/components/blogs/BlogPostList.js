import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";


const BlogPostList = ({ posts }) => {
	function getPostDate(rawDate) {
		const date = new Date(rawDate);
		const dateInfo = date.toString().split(" ").slice(1, 4);
		return `${dateInfo[0]} ${dateInfo[1]}, ${dateInfo[2]}`;
	}

	function renderBlogPostCard(post, classProp) {
		return (
			<Link className={`horizontal-card card-as-link mbm ${classProp}`} to={`/blog/${post.slug}`}>
				<Card className="cursor-pointer">
					<Row>
						<Col sm={12} md={6}>
							<div className="card-img" style={ {backgroundImage: `url("${post.featured_image}")`} }></div>
						</Col>
						<Col sm={12} md={6}>
							<Card.Body className="card-section">
								<Card.Title className="bold">{post.title}</Card.Title>
								<span className="card-description small-text italic">{getPostDate(post.published)}</span>
								<p className="card-description mtm small-text">{post.summary}</p>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Link>
		);
	}

	return (
		<div className="blog-post-container">
			<div className="section">
				{posts.map(({ node }, index) => {
				return (
					<div key={index} className="mbl">
						{renderBlogPostCard(node, '')}
					</div>
				);
				})}
			</div>
		</div>
	);
}

export default BlogPostList;
