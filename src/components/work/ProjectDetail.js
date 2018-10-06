import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetail extends Component {
	constructor(props) {
		super(props);

		this.currentIndex = props.currentIndex;
		this.previousCard = props.previousCard;
		this.nextCard = props.nextCard;
		this.totalLength = props.totalLength;
		this.parentmatch = props.parentmatch;
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

	renderDescriptionInHTML() {
		return {__html: this.card.description};
	}

	render() {
		return (
			<div className="project-detail">
				<div className="project-main grid-x grid-padding-x mvm">
					<div className="cell small-12 medium-5">
						<img src={this.card.imagePath} />
					</div>
					<div className="cell small-12 medium-7">
						<div className="mbm">
							<span className="bold mbm">{this.card.title}</span>
							<div className="block">
								{this.getCardLabels()}
							</div>
						</div>
						<div className="project-desc" dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectDetail;