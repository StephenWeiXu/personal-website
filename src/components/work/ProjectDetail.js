import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetail extends Component {
	constructor(props) {
		super(props);

		this.currentIndex = props.currentIndex;
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
					<div className="cell small-12 medium-7 project-desc">
						<div className="mbm">
							<span className="bold mbm project-title">{this.card.title}</span>
							<a href="javascript:void(0)" data-close={this.card.name} className="float-right">
								<i className="fa fa-times-circle txtt icon-xlarge"></i>
							</a>
							<div className="block">
								{this.getCardLabels()}
							</div>
						</div>
						<div dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectDetail;