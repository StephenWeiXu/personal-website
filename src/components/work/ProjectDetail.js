import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetail extends Component {
	constructor(props) {
		super(props);

		this.currentIndex = props.currentIndex;
		this.previousCard = props.previousCard;
		this.nextCard = props.nextCard;
		this.totalLength = props.totalLength;
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
							<div className="block bold">
								{this.getCardLabels()}
							</div>
						</div>
						<div dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</div>
				</div>
				<div className="grid-x grid-padding-x mbm hide">
					<div className="cell small-12 large-2 large-offset-10 txtr">
						<span className="txttb mrs">{this.currentIndex+1}/{this.totalLength}</span>
						<a href="javascript:void(0)" className="pagination-icon">
							<i className="fa fa-arrow-circle-left mrs icon-large"></i>
						</a>
						<a href="javascript:void(0)" className="pagination-icon">
							<i className="fa fa-arrow-circle-right mls icon-large"></i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectDetail;