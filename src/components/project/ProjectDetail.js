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

	renderDescriptionInHTML() {
		return {__html: this.card.description};
	}

	render() {
		return (
			<div className="project-detail">
				<div className="grid-x grid-padding-x mvm">
					<div className="cell small-4">
						<img src={this.card.imagePath} />
					</div>
					<div className="cell auto">
						<div className="mbm">
							<span className="bold mbm">{this.card.title}</span>
							<Link to={this.parentmatch.url} className="float-right back-icon">
								<i className="fa fa-times-circle txtt"></i>
							</Link>
						</div>
						<p dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</div>
				</div>
				<div className="grid-x grid-padding-x mbm">
					<div className="cell small-4 small-offset-8 large-2 large-offset-10 txtr">
						<span className="txttb mrs">{this.currentIndex+1}/{this.totalLength}</span>
						<Link to={`${this.parentmatch.url}/${this.previousCard}`} className="pagination-icon">
							<i className="fa fa-arrow-circle-left mrs"></i>
						</Link>
						<Link to={`${this.parentmatch.url}/${this.nextCard}`} className="pagination-icon">
							<i className="fa fa-arrow-circle-right mls"></i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectDetail;