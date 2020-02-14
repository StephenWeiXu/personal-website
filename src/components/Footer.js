import React, { Component } from "react";


class Footer extends Component {
	getCurrentYear() {
		const today = new Date();
		return today.getFullYear();
	}

	render() {
		return (
			<div className="footer-container txtc">
				Copyright © {this.getCurrentYear()} Wei Xu. All rights reserved.
			</div>
		)
	}
}

export default Footer;