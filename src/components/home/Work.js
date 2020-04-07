import React, { Component } from "react";
import ProjectCard from "./work/ProjectCard";
import ProjectDetail from "./work/ProjectDetail";
import { Reveal } from "foundation-sites/js/foundation.reveal";
import { PROJECTS_DATA } from "../../utils/constantsUtil";


class Work extends Component {
	constructor(props) {
		super(props);

		this.cards = PROJECTS_DATA;
	}

	componentDidMount() {
		this.cards.map((card, index) => {
			new Reveal($(`#${card.name}`));
		});
	}

	render() {
		return (
			<div className="project-container">
				<h2>Some Recent Work</h2>
				<div className="grid-x grid-padding-x small-up-1 medium-up-2 xlarge-up-3">
					{
						this.cards.map((card, index) => {
							return (
								<ProjectCard key={index} card={card} classProp={index >= 6 ? "hide" : ""} />
							);
						})
					}
				</div>
				<div>
					{
						this.cards.map((card, index) => {
							return (
								<div key={index} className="reveal large" id={card.name} data-reveal>
									<ProjectDetail 
										currentIndex={index}
										card={card} 
									/>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default Work;