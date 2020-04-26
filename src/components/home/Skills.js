import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";


class Skills extends Component {
	render() {
		return (
			<div className="skills-container">
				<h2>My Skills</h2>
				<Row>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-web-development.png" />
						<div className="mts">
							<span className="skills-name">Backend Web Development</span>
							<p className="skills-list">Java, Spring, Python, Django, MySQL, DynamoDB, AWS Lambda, Apache</p>
						</div>
					</Col>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-responsive-design.png" />
						<div className="mts">
							<span className="skills-name">Front-end Web Development</span>
							<p className="skills-list">React, Redux, React Native, Vue, JavaScript, jQuery, Webpack, HTML/CSS, Foundation/Bootstrap, SASS</p>
						</div>
					</Col>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-cicd.png" />
						<div className="mts">
							<span className="skills-name">CI/CD</span>
							<p className="skills-list">Kubernetes, Docker, Jenkins, EKS</p>
						</div>				
					</Col>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-automation-testing.png" />
						<div className="mts">
							<span className="skills-name">Automated Testing & QA</span>
							<p className="skills-list">Selenium, Appium, Unittest, Jest, Cucumber</p>
						</div>
					</Col>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-agile.png" />
						<div className="mts">
							<span className="skills-name">Agile Software Development</span>
							<p className="skills-list">Scrum, Automation</p>
						</div>
					</Col>
					<Col sm={12} md={6} lg={4} className="mtxl txtc">
						<img src="images/icon-data-science.png" />
						<div className="mts">
							<span className="skills-name">Data Science</span>
							<p className="skills-list">Scikit-learn, Pandas, Pyspark, Zeppelin, AWS EMR, D3</p>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Skills;