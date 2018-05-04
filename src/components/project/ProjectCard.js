import React, {Component} from "react";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.card = props.card;
		this.parentMatch = props.match
	}

	render() {
		return (
			<div className="cell">
				<div className="card">
					<img src={this.card.imagePath} alt={this.card.title} />
					<div className="card-section mts">
						<Link to={`${this.parentMatch.url}/${this.card.name}`}>{this.card.title}</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;