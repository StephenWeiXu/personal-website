import React, {Component} from "react";

class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
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
						<div className="card-image" style={ {backgroundImage: `url("${this.card.imagePath}")`} }></div>
						<div className="card-section">
							<span>{this.card.title}</span>
							<div className="block">{this.getCardLabels()}</div>
						</div>
					</a>

				</div>
			</div>
		);
	}
}

export default ProjectCard;