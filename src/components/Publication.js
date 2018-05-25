import React, { Component } from "react";
import { Accordion } from "foundation-sites/js/foundation.accordion";
import Description from "./publication/Description";
import Experiment from "./publication/Experiment";
import Conclusion from "./publication/Conclusion";


class Publication extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;
	}

	componentDidMount() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}

		new Accordion($("[data-accordion]"));
	}

	render() {
		return (
			<div>
				<p>
					<span className="bold">Wei Xu</span>, Xuemeng Yang and Zhong Ji. Image classification with saliency region and multi-task learning. In <span className="italic">Proceedings of the Fifth International Conference on Internet Multimedia Computing and Service(ICIMCS'13)</span>, pp. 199-202, 2013.
					<a className="mls" href="https://dl.acm.org/citation.cfm?id=2499811&dl=ACM&coll=DL" target="_blank">View</a>
				</p>
				
				<ul className="accordion" data-accordion data-multi-expand="true" data-allow-all-closed="true">
					<Description />
					<Experiment />
					<Conclusion />
				</ul>
			</div>
		)
	}
}

export default Publication;