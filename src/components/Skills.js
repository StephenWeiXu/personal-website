import React, { Component } from "react";
import * as d3 from "d3";

class Skills extends Component {
	constructor(props) {
		super(props);

		this.nodes = [
			{ id: "python", group: 0, label: "Python", level: 1 },
			{ id: "django"   , group: 1, label: "Django"   , level: 2 },
			{ id: "pandas"   , group: 1, label: "Pandas"   , level: 2 },
			{ id: "pycharm", group: 1, label: "Pycharm", level: 3 },
			{ id: "mysql"   , group: 1, label: "MySQL"   , level: 2 },
			{ id: "html"   , group: 1, label: "HTML"   , level: 2 },
			{ id: "css"  , group: 2, label: "CSS"   , level: 2 },
			{ id: "javascript"   , group: 0, label: "JavaScript"   , level: 1 },
			{ id: "es6"  , group: 2, label: "ES6"   , level: 2 },
			{ id: "react"  , group: 2, label: "React"   , level: 2 },
		]

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
			.force('charge', d3.forceManyBody().strength(-50)) 
			.force('center', d3.forceCenter(width/2, height/3));


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