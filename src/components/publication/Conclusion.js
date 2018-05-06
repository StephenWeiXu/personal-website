import React, { Component } from "react";

class Conclusion extends Component {
	render() {
		return (
			<li className="accordion-item" data-accordion-item>
				<a href="#" className="accordion-title"><h4>Conclusion</h4></a>
				<div className="accordion-content" data-tab-content>
					<p>In this paper we have presented a new method combining MTL and saliency region detection for image classification. Saliency detection helps classification accuracy improved and multi-task learning algorithm enhances the generalization performance of classifiers. Fuzzy clustering is used to get multiple related tasks. Experiments have demonstrated that our method obtains improvements on both Corel 10 and Caltech 101 databases.</p>
					<p>In the study of multi-task learning, the definition of tasks relevance is still an open problem, especially when applied in image classification work, which needs to consider the multi-class situation and complex semantics or background problem.</p>
				</div>
			</li>
		);
	}
}

export default Conclusion;