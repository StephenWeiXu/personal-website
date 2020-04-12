import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Description from "./publication/Description";
import Experiment from "./publication/Experiment";
import Conclusion from "./publication/Conclusion";

class Publication extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="publication-container">
				<h2>My Publication</h2>
				<p>
					<span className="bold">Wei Xu</span>, Xuemeng Yang and Zhong Ji. Image classification with saliency region and multi-task learning. In <span className="italic">Proceedings of the Fifth International Conference on Internet Multimedia Computing and Service(ICIMCS'13)</span>, pp. 199-202, 2013.
					<a className="mls" href="https://dl.acm.org/citation.cfm?id=2499811&dl=ACM&coll=DL" target="_blank">View</a>
				</p>
				
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle className="accordion-header" as={Button} variant="link" eventKey="0">
								<span>Description</span>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Description />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle className="accordion-header" as={Button} variant="link" eventKey="1">
								<span>Experiments</span>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Experiment />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle className="accordion-header" as={Button} variant="link" eventKey="2">
								<span>Conclusion</span>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								<Conclusion />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		)
	}
}

export default Publication;