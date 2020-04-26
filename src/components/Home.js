import React, { Component } from 'react';
import About from './home/About';
import Skills from './home/Skills';
import Work from './home/Work';
import Publication from './home/Publication';
import Blog from './home/Blog';
import Nav from './home/HomeNav';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	scrollListener() {
		if (window.pageYOffset > document.getElementById("skills").offsetTop) {
			document.getElementById("navigation-bar").classList.add("scroll-motion");
		} else {
			document.getElementById("navigation-bar").classList.remove("scroll-motion");
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollListener);
		this.registerHomeNavListener();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
	}

	registerHomeNavListener() {
		document.getElementById("home_nav").addEventListener("click", (event) => {
			event.preventDefault();

			window.scrollTo({top: 0, behavior: "smooth"});
		})
	}

	render() {
		return (
      <>
        <Nav />

        <div className="home">
          <div className="section background-base" id="about">
            <About />
          </div>
          <div className="section" id="skills">
            <Skills />
          </div>
          <div className="section" id="work">
            <Work />
          </div>
          <div className="section" id="publication">
            <Publication />
          </div>
        </div>
      </>
		);
	}
}

export default Home;
