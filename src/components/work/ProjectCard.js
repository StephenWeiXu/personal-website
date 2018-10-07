import React, {Component} from "react";

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
					<a href="javascript:void(0)" data-open={this.card.name}>
						<img src={this.card.imagePath} alt={this.card.title} />
						<div className="card-section">
							{this.card.title}
							<div className="block">{this.getCardLabels()}</div>
						</div>
					</a>

				</div>
			</div>
		);
	}
}

export default ProjectCard;