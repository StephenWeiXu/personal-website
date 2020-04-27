import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import {Helmet} from "react-helmet";

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

  getPostDate(rawDate) {
    const date = new Date(rawDate);
    const dateInfo = date.toString().split(" ").slice(1, 4);
    return `${dateInfo[0]} ${dateInfo[1]}, ${dateInfo[2]}`;
  }
  
  renderPostHtml() {
    return {__html: this.post.body};
  }
  
	render() {
		return (
      <>
        <Helmet>
          <title>{this.post.seo_title}</title>
          <meta name="description" content={this.post.meta_description} />
        </Helmet>

        <div className="txtc mbxl">
          <h1>{this.post.title}</h1>
          <span className="mvm">{this.getPostDate(this.post.published)}</span>
        </div>
        <img src={this.post.featured_image} style={{width: "100%"}} alt={this.post.title} />
        <div dangerouslySetInnerHTML={this.renderPostHtml()} />
      </>
		);
	}
}

export default BlogPostDetail;