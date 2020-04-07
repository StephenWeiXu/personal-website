import React, { Component } from "react";
import buttercms from "../../api/buttercms";
import BlogPostCard from "./BlogPostCard";

class BlogPostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPostList: []
		};
	}

	getBlogPostList() {
		buttercms.post.list()
			.then(response => {
					try {
						this.setState({blogPostList: response.data.data});
					}
					catch(error) {
						console.error(error);
					}
			});
	}

	componentDidMount() {
		if (!this.state.blogPostList.length) {
			this.getBlogPostList();
		}
	}

	render() {
		return (
			<div className="blog-post-container">
				<div className="grid-x grid-padding-x small-up-1 medium-up-2 xlarge-up-3">
					{
						this.state.blogPostList.map((card, index) => {
							return (
								<BlogPostCard key={index} card={card} classProp={index >= 6 ? "hide" : ""} />
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default BlogPostList;