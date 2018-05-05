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
					<Link to={`${this.parentMatch.url}/${this.card.name}`}><img src={this.card.imagePath} alt={this.card.title} />
						<div className="card-section mts">
							{this.card.title}
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default ProjectCard;