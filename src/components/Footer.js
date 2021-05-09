import React, { Component } from "react";


class Footer extends Component {
	getCurrentYear() {
		const today = new Date();
		return today.getFullYear();
	}

	render() {
		return (
			<div className="footer txtc">
				Copyright © {this.getCurrentYear()} Wei Xu. All rights reserved. Made better with <a href="https://buttercms.com" target="_blank" rel="noreferrer"><img height="30" width="120" src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" alt="ButterCMS" /></a>
			</div>
		)
	}
}

export default Footer;