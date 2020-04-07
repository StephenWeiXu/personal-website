import React, {Component} from "react";

class ProjectCard extends Component {
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
			<div className={`cell mbm ${this.classProp}`}>
				<div className="card">
					<a href="#" data-open={this.card.name}>
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