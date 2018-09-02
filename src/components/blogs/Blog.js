import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Blog extends Component {
	constructor(props) {
		super(props);

		this.contentFile = props.contentFile;

		this.state = {content: ""}
	}

	componentWillMount() {
		fetch(`blogs/${this.contentFile}`)
			.then(response => response.text())
			.then(text => this.setState({content:text}))
	}

	render() {
		return (
			<div>
				<ReactMarkdown source={this.state.content} />
			</div>
		);
	}
}

export default Blog;