import React, {Component} from "react";

class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
	}

	render() {
		return (
			<div className="cell">
				<div className="card">
					<img src={this.card.imagePath} alt={this.card.title} />
					<div className="card-section mts">
						{this.card.title}
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;