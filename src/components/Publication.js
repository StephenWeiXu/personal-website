import React, { Component } from "react";
import Description from "./publication/Description";
import Experiment from "./publication/Experiment";
import Conclusion from "./publication/Conclusion";

class Publication extends Component {
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