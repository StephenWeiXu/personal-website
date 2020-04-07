import React, { Component } from "react";
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';


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
							<span className="skills-name">Backend Web Development</span>
							<p className="skills-list">Java, Spring, Python, Django, MySQL, DynamoDB, AWS Lambda, Apache</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-responsive-design.png" />
						<div className="mts">
							<span className="skills-name">Front-end Web Development</span>
							<p className="skills-list">React, Redux, React Native, Vue, JavaScript, jQuery, Webpack, HTML/CSS, Foundation, SASS, Media Queries</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-cicd.png" />
						<div className="mts">
							<span className="skills-name">CI/CD</span>
							<p className="skills-list">Kubernetes, Docker, Jenkins, EKS</p>
						</div>				
					</div>
				</div>
				<div className="grid-x mtxl small-up-1 medium-up-3">
					<div className="cell small-4 txtc">
						<img src="images/icon-automation-testing.png" />
						<div className="mts">
							<span className="skills-name">Automated Testing & QA</span>
							<p className="skills-list">Selenium, Appium, Unittest, Jest, Cucumber</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-agile.png" />
						<div className="mts">
							<span className="skills-name">Agile Software Development</span>
							<p className="skills-list">Scrum, Automation</p>
						</div>
					</div>
					<div className="cell small-4 txtc">
						<img src="images/icon-data-science.png" />
						<div className="mts">
							<span className="skills-name">Data Science</span>
							<p className="skills-list">Scikit-learn, Pandas, Pyspark, Zeppelin, AWS EMR, D3</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;