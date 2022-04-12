import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";


const BlogPostList = ({ posts }) => {
	// constructor(props) {
	// 	super(props);

	// componentDidMount() {
	// 	window.scrollTo({
	// 		top: 0
	// 	});
	// }
	function renderBlogPostCard(post, classProp) {
		return (
			<Link className={`card-as-link mbm ${classProp}`} to={`/blog/${post.slug}`}>
				<Card className="cursor-pointer">
					<div className="card-img" style={ {backgroundImage: `url("${post.featured_image}")`} }></div>
					<Card.Body className="card-section">
						<Card.Title className="bold">{post.title}</Card.Title>
						<p className="card-description mtm small-text">{post.summary}</p>
					</Card.Body>
				</Card>
			</Link>
		);
	}

	return (
		<div className="blog-post-container">
			<Row className="section">
				{posts.map(({ node }, index) => {
				return (
					<Col key={index} sm={12} md={{ span: 6 }} lg={{ span: 4 }} className={`mbl ${index >= 6 ? 'hide' : ''}`}>
						{renderBlogPostCard(node, index >= 6 ? 'hide' : '')}
					</Col>
				);
				})}
			</Row>
		</div>
	);
}

export default BlogPostList;

