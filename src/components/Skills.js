import React, { Component } from "react";
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import * as d3 from "d3";
import { toTitleCase, unslugify } from "../utils";

window.d3 = d3;

class Skills extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;

		MediaQuery._init();
		this.isSmallScreen = MediaQuery.is("small only");

		this.languageNodes = [
			{ id: "python", position: 0, group: 0, label: "Python", level: 1, radius: 55, "fontSize": 18, "fontWeight": "bold", "stroke": "white"},
			{ id: "javascript", position: 0, group: 1, label: "JavaScript", level: 1, radius: 55, "fontSize": 18, "fontWeight": "bold", "stroke": "white"}
		]

		this.areaNodes = {
			"python": {
				"web-app": [
					{ id: "python-web-app"   , position: 1, group: 0, label: "Software Development"   , level: 2 }
				],

				"data-science": [
					{ id: "python-data-science"   , position: 2, group: 0, label: "Data Science"   , level: 2 }
				]
			},

			"javascript": {
				"web-app": [
					{ id: "javascript-web-app"  , position: 1, group: 1, label: "Software Development"   , level: 2 }
				],

				"data-science": [
					{ id: "javascript-data-science"  , position: 2, group: 1, label: "Data Science"   , level: 2 }
				]
			}
		}

		this.skillNodes = {
			"python": {
				"web-app": [
					{ id: "django"   , position: 1, group: 0, label: "Django"   , level: 2 },
					{ id: "apache", position: 1, group: 0, label: "Apache", level: 2 },
					{ id: "aws", position: 1, group: 0, label: "AWS", level: 2 },
					{ id: "docker", position: 1, group: 0, label: "Docker", level: 2 },
					{ id: "kubernetes", position: 1, group: 0, label: "Kubernetes", level: 2 },
					{ id: "mysql"   , position: 1, group: 0, label: "MySQL"   , level: 2, radius: 30 },
					{ id: "foundation"  , position: 1, group: 0, label: "Foundation"   , level: 2 },
					{ id: "html"   , position: 1, group: 0, label: "HTML"   , level: 2 },
					{ id: "css"  , position: 1, group: 0, label: "CSS"   , level: 2 },
					{ id: "pycharm", position: 1, group: 0, label: "Pycharm", level: 3 },

					{ id: "responsive-design", position: 1, group: 0, label: "Responsive Design", level: 3, radius: 70 },
					{ id: "accessibility", position: 1, group: 0, label: "Accessibility", level: 3, radius: 50 },
				],

				"data-science": [
					{ id: "pandas"   , position: 2, group: 0, label: "Pandas"   , level: 2 },
					{ id: "scikit-learn"   , position: 2, group: 0, label: "Scikit-learn"   , level: 2, radius: 50 },
					{ id: "pyspark"   , position: 2, group: 0, label: "Pyspark"   , level: 2 },
					{ id: "aws-emr"   , position: 2, group: 0, label: "AWS EMR"   , level: 2 },
					{ id: "zeppelin"   , position: 2, group: 0, label: "Zeppelin"   , level: 2 },
				]
			},

			"javascript": {
				"web-app": [
					{ id: "es6"  , position: 1, group: 1, label: "ES6"   , level: 2 },
					{ id: "react"  , position: 1, group: 1, label: "React"   , level: 2 },
					{ id: "Vue"  , position: 1, group: 1, label: "Vue"   , level: 2 },
					{ id: "jquery"  , position: 1, group: 1, label: "jQuery"   , level: 2 },
					{ id: "webpack"  , position: 1, group: 1, label: "Webpack"   , level: 2 },
				],

				"data-science": [
					{ id: "d3"  , position: 2, group: 1, label: "D3.js"   , level: 2 },
					{ id: "data-visualization"  , position: 2, group: 1, label: "Data Visualization"   , level: 3, radius: 70 }
				]
			}
		}

		this.nodes = [];
		this.languageNodes.forEach(languageNode => {
			if (!("radius" in languageNode)) {
				languageNode.radius = languageNode.label.length * 5;
			}
			this.nodes.push(languageNode);
		})
		
		for(let language in this.skillNodes) {
			for(let area in this.skillNodes[language]) {
				this.skillNodes[language][area].forEach(skillNode => {
					if (!("radius" in skillNode)) {
						let maxLength = skillNode.label.length > 15 ? 15 : skillNode.label.length;

						if( skillNode.label === skillNode.label.toUpperCase() ) {
							skillNode.radius = maxLength * 7;
						} else {
							skillNode.radius = maxLength * 5;
						}
					}
					this.nodes.push(skillNode);
				});
			}
		}

		this.links = [];
		this.languageNodes.forEach(languageNode => {
			let language = languageNode.id;
			for(let area in this.areaNodes[language]) {
				this.areaNodes[language][area].forEach(areaNode => {
					let tempLink = {};
					tempLink.id = `${language}-${area}`;
					tempLink.source = language;
					tempLink.target = areaNode.id;
					tempLink.type = area;
					this.links.push(tempLink);
				});
			}
		});
	}


	render() {
		return (
			<div className="grid-x skills-container">
				<div className="cell small-3 txtc">
					<img src="images/icon-web-development.png" />
					<div>
						Web Development
						<p>I use Django</p>
					</div>
				</div>
				<div className="cell small-3 txtc">
					<img src="images/icon-data-science.png" />
					<div>
						Data Science
						<p>I use Django</p>
					</div>				</div>
				<div className="cell small-3 txtc">
					<img src="images/icon-cicd.png" />
					<div>
						Continuous Integration / Dellivery
						<p>I use Django</p>
					</div>				</div>
				<div className="cell small-3 txtc">
					<img src="images/icon-agile.png" />
					<div>
						Agile Software Development
						<p>I use Django</p>
					</div>				</div>
			</div>
		);
	}
}

export default Skills;