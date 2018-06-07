import React, { Component } from "react";
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import * as d3 from "d3";

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

	getNodeColor(node) {
		const nodeColorMap = {
			1: "orange",
			2: "green",
			3: "green",
		}

		return nodeColorMap[node.level];
	}

	getLinkColor(link) {
		const linkColorMap = {
			"web-app": "white",
			"data-science": "white"
		}

		return linkColorMap[link.type];
	}

	appendNodes(nodesData, nodesElements, area = "", language = "") {
		let nodeGroupClass = (area.length && language.length)? `${language}-${area}` : "skill-nodes";

		let tempNodes = nodesElements.append("g").attr("class", "nodes");
		
		if(!this.isSmallScreen && area.length && language.length) {
			tempNodes
				.selectAll("circle")
				.data(this.areaNodes[language][area])
				.enter().append("circle")
				.attr("id", node => node.id)
				.attr("class", "area-node")
				.attr("r", node => node.radius)
				.attr("fill", "transparent")
				.style("stroke", "white")
				.style("stroke-width", "2px");

			this.areaNodes[language][area].forEach(node => {
				this.nodes.push(node);
			});
		}

		tempNodes
			.append("g")
			.attr("class", nodeGroupClass)
			.selectAll("circle")
			.data(nodesData)
			.enter().append("circle")
			.attr("id", node => node.id)
			.attr("class", "skill-node")
			.attr("r", node => node.radius)
			.attr("fill", this.getNodeColor)
			.style("stroke", node => {
				if("stroke" in node) {
					return node.stroke;
				}
				return "";
			})
			.style("stroke-width", "2px")
			.call(this.dragDrop);
	}

	appendTexts(nodesData, textsElements, area = "", language = "") {
		let textGroupClass = (area.length && language.length)? `${language}-${area}` : "skill-texts";

		let tempTexts = textsElements.append("g").attr("class", "texts");

		if(!this.isSmallScreen && area.length && language.length) {
			tempTexts
				.selectAll("text")
				.data(this.areaNodes[language][area])
				.enter().append("text")
				.attr("id", node => node.id)
				.attr("class", "area-text")
				.attr("dy", 1)
				.text(node => node.label)
				.style("text-anchor", "middle")
				.style("fill", "white")
				.style("font-size", "20px")
				.style("font-weight", "bold");
		}

		tempTexts
			.append("g")
			.attr("class", textGroupClass)
			.selectAll("text")
			.data(nodesData)
			.enter().append("text")
			.attr("id", node => node.id)
			.attr("class", "skill-text")
			.attr("dy", 4)
			.text(node => node.label)
			.style("text-anchor", "middle")
			.style("fill", "white")
			.style("font-size", node => {
				if("fontSize" in node) {
					return node.fontSize;
				}
				return 15;
			})
			.style("font-weight", node => {
				if("fontWeight" in node) {
					return node.fontWeight;
				}
				return "normal";
			})
			.call(this.dragDrop);
	}

	appendLinks(linksData, linksElements) {
		linksElements.append("g")
			.attr("class", "links")
			.selectAll("line")
			.data(linksData)
			.enter().append("line")
			.attr("id", link => link.id)
			.attr("stroke-width", 2)
			.attr("stroke", this.getLinkColor);
	}

	buildElements(svg) {
		this.nodesElements = svg.append("g");
		this.textsElements = svg.append("g");
		this.linksElements = svg.append("g");

		this.appendNodes(this.languageNodes, this.nodesElements);
		this.appendTexts(this.languageNodes, this.textsElements);

		for(let language in this.skillNodes) {
			for(let area in this.skillNodes[language]) {
				this.appendTexts(this.skillNodes[language][area], this.textsElements, area, language);
				this.appendNodes(this.skillNodes[language][area], this.nodesElements, area, language);
			}
		}

		if(!this.isSmallScreen) {
			this.appendLinks(this.links, this.linksElements);
		}
	}

	buildForceSimulation() {
		this.simulation = d3.forceSimulation()
			.force("link", d3.forceLink().id(link => link.id))
			.force("charge", d3.forceManyBody().strength(-120))
				.force("x", d3.forceX(node => {
					if(node.position === 0) {
						return this.width/3;
					} else if(node.position === 1) {
						return this.width/8;
					} else if(node.position === 2) {
						return this.width/2;
					}
				}))
				.force("y", d3.forceY(node => {
					if(node.group === 0) {
						return this.height/3.5;
					} else if(node.group === 1) {
						return this.height/1.5;
					}
				}))
			.force("center", d3.forceCenter(this.width/2.5, this.height/3))
			.force("collide", d3.forceCollide().radius(function(d) { return d.radius }));
	}

	buildDragDropAnimation() {
		this.dragDrop = d3.drag()
			.on('start', node => {
				node.fx = node.x;
				node.fy = node.y;
			})
			.on('drag', node => {
				this.simulation.alphaTarget(1).restart()
					node.fx = d3.event.x;
					node.fy = d3.event.y;
			})
			.on('end', node => {
				if (!d3.event.active) {
					this.simulation.alphaTarget(0);
				}
				node.fx = null;
				node.fy = null;
			})
	}

	simulationTicked() {
		this.nodesElements.selectAll("circle.skill-node")
			.attr("cx", node => node.x)
			.attr("cy", node => node.y);

		this.textsElements.selectAll("g").selectAll("text.skill-text")
			.attr("x", node => node.x)
			.attr("y", node => node.y);

		let classList = ["python-web-app", "python-data-science", "javascript-web-app", "javascript-data-science"];

		classList.forEach(className => {
			let groupBBox = this.nodesElements.selectAll(`.${className}`).node().getBBox(),
				areaNodeCX = groupBBox.x + groupBBox.width/2,
				areaNodeCY = groupBBox.y + groupBBox.height/2,
				areaNodeRadius = d3.max([groupBBox.height/2, groupBBox.width/2]) + 20;

			this.nodesElements.selectAll(`circle#${className}`)
				.attr("cx", node => areaNodeCX)
				.attr("cy", node => areaNodeCY)
				.attr("r", areaNodeRadius);

			this.textsElements.selectAll(`text#${className}`)
				.attr("x", node => areaNodeCX)
				.attr("y", node => areaNodeCY - areaNodeRadius - 10);

			this.linksElements.selectAll(`line#${className}`)
				.attr("x1", link => {
					return link.source.x + (link.target.position === 1 ? -(link.source.radius) : link.source.radius);
				})
				.attr("y1", link => link.source.y)
				.attr("x2", link => {
					return areaNodeCX + (link.target.position === 1 ? areaNodeRadius : -areaNodeRadius); 
				})
				.attr("y2", link => areaNodeCY);
		});		
	}

	componentDidMount() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}

		this.width = window.innerWidth;
		this.height = window.innerHeight;
		let svg = d3.select("svg");
		svg.attr("width", this.width).attr("height", this.height).style("overflow", "visible");

		this.buildForceSimulation();
		this.buildDragDropAnimation();
		this.buildElements(svg);

		this.simulation.nodes(this.nodes).on("tick", () => this.simulationTicked());

		if(!this.isSmallScreen) {
			this.simulation.force("link").links(this.links);
		}
	}

	render() {
		return(
		    <svg></svg>
		);
	}
}

export default Skills;