import React, { Component } from "react";


class About extends Component {
	render() {
		return (
			<div className="profile txtc">
				<h1>WEI XU</h1>
				<span className="occupation">Welcome! I am Wei, a software developer specializing in full stack web application development</span>
				<div className="social-icons mts">
					<ul className="inline-list pln">
						<li>
							<a href="https://github.com/StephenWeiXu" target="_blank" rel="noreferrer">
								<i className="fa fa-github"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/wei-xu-75952aab/" target="_blank" rel="noreferrer">
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