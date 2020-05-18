import React, { Component } from "react";
import buttercms from "../../api/buttercms";
import BlogPostCard from "./BlogPostCard";
import BlogPostDetail from "./BlogPostDetail";
import { Row, Col } from "react-bootstrap";
import {withRouter, Route} from 'react-router-dom';

class BlogPostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPostList: []
		};
	}

	componentDidMount() {
		window.scrollTo({
			top: 0
		});

		if (!this.state.blogPostList.length) {
			this.getBlogPostList();
		}
	}

	/**
	 * Call buttercms to get a list of blog posts
	 */
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

	/**
	 * Build the routes and render templates for blog post cards. This is for current blog page
	 */
	buildBlogPostCardsRoutes() {
		return (
			<Route exact path={this.props.match.path} render={() => (
				<>
        <Row className="blog-header">
          <Col className="blog-header-left">
            <h1>Blog</h1>
          </Col>
          <Col className="blog-header-right">
          </Col>
        </Row>
        <Row className="section">
            {this.state.blogPostList.map((post, index) => {
              return (
                <Col key={index} sm={12} md={{ span: 6 }} className={`mbl ${index >= 6 ? "hide" : ""}`}>
                  <BlogPostCard key={index} card={post} classProp={index >= 6 ? "hide" : ""} />
                </Col>
              );
            })}
        </Row>
				</>
			)}/>
		)
	}

	/**
	 * Build the routes and render templates for blog post detail. This is for individual blog post page
	 */
	buildBlogPostDetailRoutes() {
		const blogPostRoutes = this.state.blogPostList.map((post, index) => {
			return (
				<Route key={index} exact path={`${this.props.match.path}/${post.slug}`} render={() => (
          <div className="section">
						<BlogPostDetail post={post} />
          </div>
				)}/>
			)
		})
		return blogPostRoutes;
	}

	render() {
		return (
      <div className="blog-post-container">
        {this.buildBlogPostCardsRoutes()}
        {this.buildBlogPostDetailRoutes()}
      </div>
		);
	}
}

export default withRouter(BlogPostList);