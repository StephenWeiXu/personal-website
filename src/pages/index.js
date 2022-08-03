import React from 'react';
import Home from "../components/Home";
import { Helmet } from "react-helmet";

import "../scss/index.scss";


const App = () => {
	return(
		<>
			<Helmet>
				<meta name="icon" href="/images/favicon.ico" />
			</Helmet>

			<Home />
		</>
	);
}

export default App;
