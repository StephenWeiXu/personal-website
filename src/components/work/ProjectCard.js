import React, {Component} from "react";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
		this.parentMatch = props.match
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
			<div className="cell mbm">
				<div className="card">
					<Link to={`${this.parentMatch.url}/${this.card.name}`}>
						<img src={this.card.imagePath} alt={this.card.title} />
					</Link>
					<div className="card-section">
						{this.card.title}
						<div className="block">{this.getCardLabels()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;