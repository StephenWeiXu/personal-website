import React, { Component } from "react";
import * as d3 from "d3";

class Skills extends Component {
	constructor(props) {
		super(props);

		this.languages = [
			{ id: "python", position: 0, group: 0, label: "Python", level: 1},
			{ id: "javascript", position: 0, group: 1, label: "JavaScript", level: 1}
		]

		this.skillNodes = {
			"python": [
				{ id: "django"   , position: 1, group: 0, label: "Django"   , level: 2 },
				{ id: "apache", position: 1, group: 0, label: "Apache", level: 2 },
				{ id: "aws", position: 1, group: 0, label: "AWS", level: 2 },
				{ id: "docker", position: 1, group: 0, label: "Docker", level: 2 },
				{ id: "kubernetes", position: 1, group: 0, label: "Kubernetes", level: 2 },
				{ id: "mysql"   , position: 1, group: 0, label: "MySQL"   , level: 2 },
				{ id: "html"   , position: 1, group: 0, label: "HTML"   , level: 2 },
				{ id: "css"  , position: 1, group: 0, label: "CSS"   , level: 2 },
				{ id: "pycharm", position: 1, group: 0, label: "Pycharm", level: 3 },

				{ id: "pandas"   , position: 2, group: 0, label: "Pandas"   , level: 2 },
				{ id: "scikit-learn"   , position: 2, group: 0, label: "Scikit-learn"   , level: 2 },
				{ id: "pyspark"   , position: 2, group: 0, label: "Pyspark"   , level: 2 },
				{ id: "aws-emr"   , position: 2, group: 0, label: "AWS EMR"   , level: 2 },
				{ id: "zeppelin"   , position: 2, group: 0, label: "Zeppelin"   , level: 2 },
			],
			"javascript": [
				{ id: "es6"  , position: 1, group: 1, label: "ES6"   , level: 2 },
				{ id: "react"  , position: 1, group: 1, label: "React"   , level: 2 },
				{ id: "jquery"  , position: 1, group: 1, label: "jQuery"   , level: 2 },
				{ id: "webpack"  , position: 1, group: 1, label: "Webpack"   , level: 2 },

				{ id: "d3"  , position: 2, group: 1, label: "D3"   , level: 2 },
			]
		}	

		this.nodes = this.languages;
		for (let language in this.skillNodes) {
			this.skillNodes[language].map( element => {
				this.nodes.push(element);
			});
		}

		this.links = [
			{ target: "python", source: "django" , strength: 0.7 },
			{ target: "python", source: "pandas" , strength: 0.7 },
			{ target: "insect", source: "ant" , strength: 0.7 },
			{ target: "insect", source: "bee" , strength: 0.7 },
			{ target: "fish"  , source: "carp", strength: 0.7 },
			{ target: "fish"  , source: "pike", strength: 0.7 },
			{ target: "cat"   , source: "elk" , strength: 0.1 },
			{ target: "carp"  , source: "ant" , strength: 0.1 },
			{ target: "elk"   , source: "bee" , strength: 0.1 },
			{ target: "dog"   , source: "cat" , strength: 0.1 },
			{ target: "fox"   , source: "ant" , strength: 0.1 },
			{ target: "pike"  , source: "cat" , strength: 0.1 }
		]
	}

	getNodeColor(node) {
		const nodeColorMap = {
			'1': 'red',
			'2': 'green',
			'3': 'gray',
		}

		let level = node.level.toString();

		return nodeColorMap[level];
	}

	componentDidMount() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const svg = d3.select('svg');
		svg.attr('width', width).attr('height', height);

		const simulation = d3.forceSimulation()
			.force('charge', d3.forceManyBody().strength(-80))
				.force("x", d3.forceX(node => {
					if(node.position === 0) {
						return width/3;
					} else if(node.position === 1) {
						return width/4;
					} else if(node.position === 2) {
						return width/2;
					}
				}))
				.force("y", d3.forceY(node => {
					if(node.group === 0) {
						return height/3;
					} else if(node.group === 1) {
						return height/2;
					}
				}))
			.force('center', d3.forceCenter(width/3, height/3));


		const nodeElements = svg.append('g')
			.attr("class", "nodes")
			.selectAll('circle')
			.data(this.nodes)
			.enter().append('circle')
			.attr('r', 10)
			.attr('fill', this.getNodeColor);

		const textElements = svg.append('g')
			.attr("class", "texts")
			.selectAll('text')
			.data(this.nodes)
			.enter().append('text')
			.text(node => node.label)
			.attr('font-size', 15)
			.attr('dx', 15)
			.attr('dy', 4);

		simulation.nodes(this.nodes).on("tick", () => {
			nodeElements
				.attr("cx", node => node.x)
				.attr("cy", node => node.y);

			textElements
				.attr("x", node => node.x)
				.attr("y", node => node.y);
		});
	}

	render() {
		return(
		    <svg></svg>
		);
	}
}

export default Skills;