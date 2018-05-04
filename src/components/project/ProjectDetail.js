import React, { Component } from "react";

class ProjectDetail extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
	}

	render() {
		return (
			<div>
				<img src={this.card.imagePath} />
			</div>
		);
	}
}

export default ProjectDetail;