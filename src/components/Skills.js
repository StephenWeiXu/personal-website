import React, { Component } from "react";
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import * as d3 from "d3";
import { toTitleCase, unslugify } from "../utils";

window.d3 = d3;

class Skills extends Component {
	constructor(props) {
		super(props);

		MediaQuery._init();
		this.isSmallScreen = MediaQuery.is("small only");
	}


	render() {
		return (
			<div className="skills-container">
				<h2>My Skills</h2>
				<div className="grid-x small-up-1 medium-up-3">
					<div className="cell small-4 txtc">
						<img src="images/icon-web-development.png" />
						<div className="mts">
							<span className="skills-name">Web Development</span>
							<p className="skills-list">Python, Django, MySQL, Apache, AWS, JavaScript, jQuery, Vue, React, Webpack, HTML/CSS</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-responsive-design.png" />
						<div className="mts">
							<span className="skills-name">Responsive Web Design</span>
							<p className="skills-list">Foundation, Media Queries</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-cicd.png" />
						<div className="mts">
							<span className="skills-name">Continuous Integration & Delivery</span>
							<p className="skills-list">Kubernetes, Docker, Jenkins, Selenium Grid</p>
						</div>				
					</div>
				</div>
				<div className="grid-x mtxl small-up-1 medium-up-3">
					<div className="cell small-4 txtc">
						<img src="images/icon-automation-testing.png" />
						<div className="mts">
							<span className="skills-name">Automation Testing & QA</span>
							<p className="skills-list">Unittest, Jasmine, Cucumber</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-data-science.png" />
						<div className="mts">
							<span className="skills-name">Data Science</span>
							<p className="skills-list">Scikit-learn, Pandas, Pyspark, Zeppelin, AWS EMR, D3</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-agile.png" />
						<div className="mts">
							<span className="skills-name">Agile Software Development</span>
							<p className="skills-list">Scrum, Automation</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;