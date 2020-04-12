import React, {Component} from "react";
import { Card, Badge } from "react-bootstrap";

class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
		this.classProp = props.classProp;
	}

	getCardLabels() {
		let labelsTemplate = this.card.labels.map((label, index) => {
			return (
				<Badge key={index} variant="secondary" className="mrs mts">{label}</Badge>
			);
		});

		return labelsTemplate;
	}

	render() {
		return (
			<div className="mbm">
				<Card className="cursor-pointer">
					<Card.Img style={ {backgroundImage: `url("${this.card.imagePath}")`} }></Card.Img>
					<Card.Body className="card-section">
						<Card.Title>{this.card.title}</Card.Title>
						<div className="block">{this.getCardLabels()}</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default ProjectCard;