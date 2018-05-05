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
						<span className="inline-block bold mbm">{this.card.title}</span>
						<p dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</div>
				</div>
				<div className="grid-x grid-padding-x mbm">
					<div className="pagination-icons cell small-2 small-offset-10 txtc">
						<span className="txttb mrm">{this.currentIndex+1}/{this.totalLength}</span>
						<Link to={`/project/${this.previousCard}`}><i className="fa fa-arrow-circle-left mrs"></i></Link>
						<Link to={`/project/${this.nextCard}`}><i className="fa fa-arrow-circle-right mls"></i></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectDetail;