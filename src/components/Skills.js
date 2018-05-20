import React, { Component } from "react";
import * as d3 from "d3";

class Skills extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;

		this.languageNodes = [
			{ id: "python", position: 0, group: 0, label: "Python", level: 1},
			{ id: "javascript", position: 0, group: 1, label: "JavaScript", level: 1}
		]

		this.areaNodes = {
			"python": {
				"web-app": [
					{ id: "python-web-app"   , position: 1, group: 0, label: "Python Web APP"   , level: 2 }
				],

				"data-science": [
					{ id: "pyton-data-science"   , position: 2, group: 0, label: "Python Data Science"   , level: 2 }
				]
			},

			"javascript": {
				"web-app": [
					{ id: "javascript-web-app"  , position: 1, group: 1, label: "JavaScript Web App"   , level: 2 }
				],

				"data-science": [
					{ id: "javascript-data-science"  , position: 2, group: 1, label: "JavaScript Data Science"   , level: 2 }
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
					{ id: "mysql"   , position: 1, group: 0, label: "MySQL"   , level: 2 },
					{ id: "foundation"  , position: 1, group: 0, label: "Foundation"   , level: 2 },
					{ id: "html"   , position: 1, group: 0, label: "HTML"   , level: 2 },
					{ id: "css"  , position: 1, group: 0, label: "CSS"   , level: 2 },
					{ id: "pycharm", position: 1, group: 0, label: "Pycharm", level: 3 },

					{ id: "responsive-design", position: 1, group: 0, label: "Responsive Design", level: 3 },
					{ id: "accessibility", position: 1, group: 0, label: "Accessibility", level: 3 },
				],

				"data-science": [
					{ id: "pandas"   , position: 2, group: 0, label: "Pandas"   , level: 2 },
					{ id: "scikit-learn"   , position: 2, group: 0, label: "Scikit-learn"   , level: 2 },
					{ id: "pyspark"   , position: 2, group: 0, label: "Pyspark"   , level: 2 },
					{ id: "aws-emr"   , position: 2, group: 0, label: "AWS EMR"   , level: 2 },
					{ id: "zeppelin"   , position: 2, group: 0, label: "Zeppelin"   , level: 2 },
				]
			},

			"javascript": {
				"web-app": [
					{ id: "es6"  , position: 1, group: 1, label: "ES6"   , level: 2 },
					{ id: "react"  , position: 1, group: 1, label: "React"   , level: 2 },
					{ id: "jquery"  , position: 1, group: 1, label: "jQuery"   , level: 2 },
					{ id: "webpack"  , position: 1, group: 1, label: "Webpack"   , level: 2 },
				],

				"data-science": [{ id: "d3"  , position: 2, group: 1, label: "D3.js"   , level: 2 }]
			}
		}

		this.nodes = [];
		this.languageNodes.forEach(languageNode => {
			languageNode.radius = languageNode.label.length * 5;
			this.nodes.push(languageNode);
		})
		
		for(let language in this.skillNodes) {
			for(let area in this.skillNodes[language]) {
				this.skillNodes[language][area].forEach(skillNode => {
					skillNode.radius = skillNode.label.length * 5;
					this.nodes.push(skillNode);
				});
			}
		}

		this.links = [];
		this.languageNodes.forEach(languageNode => {
			let language = languageNode.id;
			for(let area in this.skillNodes[language]) {
				this.skillNodes[language][area].forEach(skillNode => {
					let tempLink = {};
					tempLink.target = language;
					tempLink.source = skillNode.id;
					tempLink.type = area;
					this.links.push(tempLink);
				});
			}
		});
	}

	getNodeColor(node) {
		const nodeColorMap = {
			1: "red",
			2: "green",
			3: "gray",
		}

		return nodeColorMap[node.level];
	}

	getLinkColor(link) {
		const linkColorMap = {
			"web-app": "black",
			"data-science": "blue"
		}

		return linkColorMap[link.type];
	}

	appendNodes(nodesData, nodesElements, area = "", language = "") {
		let tempNodes = nodesElements.append("g").attr("class", "nodes");
		
		// if(area.length && language.length) {
		// 	tempNodes
		// 		.selectAll("circle")
		// 		.data(this.areaNodes[language][area])
		// 		.enter().append("circle")
		// 		.attr("class", "area-node")
		// 		.attr("r", 150)
		// 		.attr("fill", "transparent")
		// 		.style("stroke", "black");

		// 	this.areaNodes[language][area].forEach(node => {
		// 		this.nodes.push(node);
		// 	});
		// }

		tempNodes
			.selectAll("circle")
			.data(nodesData)
			.enter().append("circle")
			.attr("id", node => node.id)
			.attr("class", "skill-node")
			.attr("r", node => node.radius)
			.attr("fill", this.getNodeColor);
	}

	appendTexts(nodesData, textsElements) {
		textsElements.append("g")
			.attr("class", "texts")
			.selectAll("text")
			.data(nodesData)
			.enter().append("text")
			.style("text-anchor", "middle")
			.text(node => node.label)
			.attr("font-size", 15)
			.attr("dy", 4);
	}

	componentDidMountDisable() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}

		const width = 500;
		const height = 500;
		const svg = d3.select("svg");
		svg.attr("width", width).attr("height", height);

		let g = svg.append("g").attr("transform", "translate(2,2)"),
			format = d3.format(",d");
		
		let pack = d3.pack()
			.size([width - 4, width - 4])
			.padding(5);

		d3.json("/src/components/skills.json", (error, root) => {
			if (error) throw error;

			root = d3.hierarchy(root)
				.sum(function(d) { return d.size; })
				.sort(function(a, b) { return b.value - a.value; });

			let node = g.selectAll(".node")
				.data(pack(root).descendants())
				.enter().append("g")
				.attr("class", function(d) { return d.children ? "node" : "leaf node"; })
				.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
				.attr("fill", "lightblue")
				.attr("fill-opacity", "0.25")
				.style("stroke", "black");

			node.append("title")
				.text(function(d) { return d.data.name + "\n" + format(d.value); });

			node.append("circle")
				.attr("r", function(d) { return d.r; });

			node.filter(function(d) { return !d.children; }).append("text")
				.attr("dy", "0.3em")
				.attr("text-anchor", "middle")
				.style("font", "10px sans-serif")
				.text(function(d) { return d.data.name.substring(0, d.r / 3); });
		});	
	}

	componentDidMount() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}

		const width = window.innerWidth;
		const height = window.innerHeight;
		const svg = d3.select("svg");
		svg.attr("width", width).attr("height", height);

		const simulation = d3.forceSimulation()
			// .force("link", d3.forceLink().id(link => link.id).distance(300))
			.force("charge", d3.forceManyBody().strength(-200))
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
						return height/4;
					} else if(node.group === 1) {
						return height/2;
					}
				}))
			.force("center", d3.forceCenter(width/3, height/3))
			.force("collide", d3.forceCollide().radius(function(d) { return d.radius }));
		

		let nodes = svg.append("g"),
			texts = svg.append("g");

		this.appendNodes(this.languageNodes, nodes);
		this.appendTexts(this.languageNodes, texts);

		for(let language in this.skillNodes) {
			for(let area in this.skillNodes[language]) {
				this.appendTexts(this.skillNodes[language][area], texts);
				this.appendNodes(this.skillNodes[language][area], nodes, area, language);
			}
		}

		let links = svg.append("g")
			.attr("class", "links")
			.selectAll("line")
			.data(this.links)
			.enter().append("line")
			.attr("stroke-width", 2)
			.attr("stroke", this.getLinkColor);

		simulation.nodes(this.nodes).on("tick", () => {
			nodes.selectAll("circle.area-node")
				.attr("cx", node => {
				 return node.x 
				})
				.attr("cy", node => node.y);

			nodes.selectAll("circle.skill-node")
				.attr("cx", node => {
				 return node.x 
				})
				.attr("cy", node => node.y);
 
			texts.selectAll("g").selectAll("text")
				.attr("x", node => node.x)
				.attr("y", node => node.y);

			links
				.attr("x1", link => link.source.x)
				.attr("y1", link => link.source.y)
				.attr("x2", link => link.target.x)
				.attr("y2", link => link.target.y);
		});

		// simulation.force("link").links(this.links);
	}

	render() {
		return(
		    <svg></svg>
		);
	}
}

export default Skills;