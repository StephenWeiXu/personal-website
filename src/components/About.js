import React, { Component } from "react";


class About extends Component {
	render() {
		return (
			<div className="profile txtc">
				<h1>WEI XU</h1>
				<span>Web Application Developer</span>
				<div className="social-icons">
					<ul className="inline-list">
						<li>
							<a href="https://github.com/StephenWeiXu" target="_blank">
								<i className="fa fa-github"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/wei-xu-75952aab/" target="_blank">
								<i className="fa fa-linkedin-square"></i>
							</a>
						</li>
						<li>
							<a href="mailto: stephenweixu@gmail.com">
								<i className="fa fa-envelope"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default About;