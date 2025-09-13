import React, { Component } from "react";
import ProjectCard from "./work/ProjectCard";
import ProjectDetail from "./work/ProjectDetail";
import { PROJECTS_DATA } from "../../utils/constantsUtil";
import { Modal, Row, Col } from "react-bootstrap";

class Work extends Component {
	constructor(props) {
		super(props);

		this.cards = PROJECTS_DATA;

		this.state = {
			show: null
		};
	}

	componentDidMount() {
	}

	handleClose() {
		this.setState({ show: null });
	}

	handleShow(id) {
		this.setState({ show: id });
	}

	render() {
		return (
			<div className="project-container">
				<h2>Past Work</h2>

				<Row>
					{this.cards.map((card, index) => {
						return (
							<Col
								key={index}
								sm={12}
								md={6}
								lg={4}
								className={`mbl ${index >= 6 ? "hide" : ""}`}
								onClick={() => this.handleShow(card.name)}
							>
								<ProjectCard key={index} card={card} />
							</Col>
						);
					})}
				</Row>

				<div>
					{
						this.cards.map((card, index) => {
							return (
								<Modal
									size="lg"
									centered
									key={index}
									id={card.name}
									show={this.state.show === card.name}
									onHide={() => this.handleClose()}
								>
									<Modal.Body>
										<ProjectDetail
											currentIndex={index}
											card={card}
											handleClose={() => this.handleClose()}
										/>
									</Modal.Body>
								</Modal>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default Work;