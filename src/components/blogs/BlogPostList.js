import React, { Component } from "react";
import buttercms from "../../api/buttercms";
import BlogPostCard from "./BlogPostCard";
import { Row, Col } from "react-bootstrap";

class BlogPostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPostList: []
		};
	}

	getBlogPostList() {
		buttercms.post.list()
			.then(response => {
					try {
						this.setState({blogPostList: response.data.data});
					}
					catch(error) {
						console.error(error);
					}
			});
	}

	componentDidMount() {
		if (!this.state.blogPostList.length) {
			this.getBlogPostList();
		}
	}

	render() {
		return (
			<div className="blog-post-container">
				<Row>
					{this.state.blogPostList.map((card, index) => {
						return (
							<Col key={index} sm={12} md={6} className={index >= 6 ? "hide" : ""} onClick={() => this.handleShow(card.name)}>
								<BlogPostCard key={index} card={card} classProp={index >= 6 ? "hide" : ""} />
							</Col>
						);
					})}
				</Row>
			</div>
		);
	}
}

export default BlogPostList;