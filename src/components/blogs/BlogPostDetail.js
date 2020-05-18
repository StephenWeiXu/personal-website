import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import {Helmet} from "react-helmet";

class BlogPostDetail extends Component {
  componentDidMount() {
    window.scrollTo({
			top: 0
		});
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
    return {__html: this.props.post.body};
  }
  
	render() {
		return (
      <>
        <Helmet>
          <title>{this.props.post.seo_title}</title>
          <meta name="description" content={this.props.post.meta_description} />
        </Helmet>

        <div className="txtc mbxl">
          <h1>{this.props.post.title}</h1>
          <span className="mvm">{this.getPostDate(this.props.post.published)}</span>
        </div>
        <div className="feature-image">
          <img src={this.props.post.featured_image} style={{width: "100%"}} alt={this.props.post.title} />
        </div>
        <div dangerouslySetInnerHTML={this.renderPostHtml()} className="mvl"/>
      </>
		);
	}
}

export default BlogPostDetail;