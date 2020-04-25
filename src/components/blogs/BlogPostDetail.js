import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class BlogPostDetail extends Component {
	constructor(props) {
		super(props);

		this.post = props.post;
	}

	getCardLabels() {
		let labelsTemplate = this.card.tags.map((tag, index) => {
			return (
				<Badge key={index} variant="secondary" className="mrs mts">{tag.name}</Badge>
			);
		});

		return labelsTemplate;
  }
  
  renderPostHtml() {
    return {__html: this.post.body};
  }
  
	render() {
		return (
      <>
      <h1>{this.post.title}</h1>
      <div dangerouslySetInnerHTML={this.renderPostHtml()} />
      </>
		);
	}
}

export default BlogPostDetail;