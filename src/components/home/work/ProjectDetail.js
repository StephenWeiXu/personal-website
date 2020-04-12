import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge } from "react-bootstrap";

class ProjectDetail extends Component {
	constructor(props) {
		super(props);

		this.currentIndex = props.currentIndex;
		this.card = props.card;
	}

	getCardLabels() {
		let labelsTemplate = this.card.labels.map((label, index) => {
			return (
				<Badge key={index} variant="secondary" className="mrs mts">{label}</Badge>
			);
		});

		return labelsTemplate;
	}

	renderDescriptionInHTML() {
		return {__html: this.card.description};
	}

	handleCloseButtonClick(event) {
		event.preventDefault();
		this.props.handleClose();
	}

	render() {
		return (
			<div className="project-detail">
				<Row className="project-main mvm">
					<Col md={5}>
						<img src={this.card.imagePath} />
					</Col>
					<Col md={7} className="project-desc">
						<div className="mbm">
							<span className="bold mbm project-title">{this.card.title}</span>
							<a href="#" onClick={(e) => this.handleCloseButtonClick(e)} className="float-right">
								<i className="fa fa-times-circle txtt icon-xlarge"></i>
							</a>
							<div className="block">
								{this.getCardLabels()}
							</div>
						</div>
						<div className="project-body" dangerouslySetInnerHTML={ this.renderDescriptionInHTML() } />
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProjectDetail;