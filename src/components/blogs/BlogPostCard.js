import React, { Component } from "react";
import { Card } from "react-bootstrap";

class BlogPostCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
		this.classProp = props.classProp;
	}

	getCardLabels() {
		let labelsTemplate = this.card.labels.map((label, index) => {
			return (
				<span key={index} className="label secondary mrs mts">{label}</span>
			);
		});

		return labelsTemplate;
	}

	render() {
		return (
			<div className={`mbm ${this.classProp}`}>
				<Card className="cursor-pointer">
					<Card.Img style={ {backgroundImage: `url("${this.card.featured_image}")`} }></Card.Img>
					<Card.Body className="card-section">
						<Card.Title>{this.card.title}</Card.Title>
						{/* <div className="block">{this.getCardLabels()}</div> */}
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default BlogPostCard;