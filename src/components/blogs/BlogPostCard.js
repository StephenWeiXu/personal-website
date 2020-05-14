import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import {withRouter, Link} from 'react-router-dom';

class BlogPostCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
		this.classProp = props.classProp;
	}

	getCardUrl() {
		return `${this.props.match.url}/${this.card.slug}`;
	}

	getCardLabels() {
		let labelsTemplate = this.card.tags.map((tag, index) => {
			return (
				<Badge key={index} variant="secondary" className="mrs mts">{tag.name}</Badge>
			);
		});

		return labelsTemplate;
	}

	render() {
		return (
			<Link className={`card-as-link mbm ${this.classProp}`} to={this.getCardUrl()}>
				<Card className="cursor-pointer">
					<div className="card-img" style={ {backgroundImage: `url("${this.card.featured_image}")`} }></div>
					<Card.Body className="card-section">
						<Card.Title className="bold">{this.card.title}</Card.Title>
						<p className="card-description mtm small-text">{this.card.summary}</p>
					</Card.Body>
				</Card>
			</Link>
		);
	}
}

export default withRouter(BlogPostCard);