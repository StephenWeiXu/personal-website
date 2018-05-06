import React, { Component } from "react";
import ProjectCard from "./project/ProjectCard";
import ProjectDetail from "./project/ProjectDetail";
import { Route } from "react-router-dom";


class Project extends Component {
	constructor(props) {
		super(props);

		this.match = props.match;

		this.cards = [
			{
				"name": "umich-dataset-catalog",
				"imagePath": "images/project-dataset-catalog.jpg",
				"title": "Web App Development for UMICH Health System Dataset Catalog",
				"labels": ["Python", "Pylons", "Jinja2", "JavaScript", "HTML/CSS"],
				"description": 'I worked on this project as a Software Developer Intern at <a href="http://cci.med.umich.edu/" target="_blank"> \
					University of Michigan Health System - Cancer Center Informatics</a> for 4 months. The project goal is to collect and publish \
					the meatdata of research datasets across departments in University of Michigan Health System to provide researchers a convinent \
					and informative way to browse and search the research datasets they need. I developed this web aplication based on the Open \
					Source Platform - <a href="http://ckan.org/" target="_blank">CKAN</a>. The web infrastructure is built on Python, Pylons web \
					framework, and Jinja2 templating language. The database is designed using PostgreSQL and accessed using SQLAlchemy. \
					The front-end website is customized using HTML, CSS, JavaScript, and JQuery.'
			},
			{
				"name": "retinal-diagnose-tool",
				"imagePath": "images/project-retinal-diagnose.jpg",
				"title": "Diagnostic Tool Development with Machine Learning for Retinal Dystrophy",
				"labels": ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
				"description": 'I participated in this project as a team member of Machine Learning group, conducted \
					by <a href="http://www.kellogg.umich.edu/" target="_blank"><i>Kellogg Eye Center(KEC)</i></a> of University of Michigan. Based \
					on efficient Image Processing techniques and Machine Learning methods, our goal is to design a diagnostic support tool for \
					retinal dystrophy based on a database of imaging, history and clinical findings and validated algorithms to identify likely \
					outcomes/diagnosis. Such a tool would assist ophthalmologists located globally in clinical diagnosis and selection of \
					genetic testing. Upon entering a patient’s symptoms (such as age of onset, type of vision loss, chronicity), pertinent \
					history (especially regarding affected family members), examination findings and imaging, the tool would compute a likely \
					diagnosis.'
			},
			{
				"name": "car-brand-prediction",
				"imagePath": "images/project-car-brand-prediction.jpg",
				"title": "Car Brand Prediction Based on Twitter Tweets",
				"labels": ["Python", "Tweepy", "Twitter API", "Machine Learning"],
				"description": 'This is the final project for UMICH <a href="http://web.eecs.umich.edu/~mihalcea/498IR/" target="_blank">EECS \
					inter 2015 Special Topics 498-001</a>(<i><b>Information Retrieval and Web Search</b></i>). In this project, we built an \
					efficient text classifier to automatically predict the owned car brand based on the twitter user\'s relevant tweets. \
					Using <a href="https://dev.twitter.com/overview/documentation" target="_blank">Twitter API</a> and \
					<a href="http://www.tweepy.org/" target="_blank">tweepy package</a> in Python, we crawled and created a dataset containing \
					tweets from thousands of Twitter user samples together. Each user sample is manually labeled with the car brand based on \
					the information from their tweets. Three prediction model - Decision Tree, Naive Bayes, and SVM(Support Vector Machine) \
					classifiers are built to learn the information pattern from the dataset. Based on the dataset and prediction performance, we \
					also perform Words Frequency Analysis and Linguistic Analysis to analyze the underlying user habits and dominant words for \
					each car brand. Code, report and documentation are available<a href="https://github.com/StephenWeiXu/PredictYourCarBrand" target="_blank"> here</a>.'
			},
			{
				"name": "natural-scene-text-detection",
				"imagePath": "images/project-text-detection.jpg",
				"title": "Text Detection in Natural Scene Images",
				"labels": ["Python", "Machine Learning"],
				"description": 'This is a project for my graduation thesis of senior year in Tianjin University. The goal is to detect text \
					strings in natural scene images based on Adaboost Learning method and structural analysis according to the \
					paper <a href="http://dl.acm.org/citation.cfm?id=2238208.2238211" target="_blank"><i>Assistive text reading from complex \
					background for blind persons</i></a>. My <a href="Project/Text_Detection/TextDetection.pdf"><i>graduation thesis</i></a>(Chinese version) based \
					on this project won <i>Excellent Graduation Paper prize</i> from the university. The text detection algorithm is trained \
					and evaluated on <a href="http://algoval.essex.ac.uk/icdar/Datasets.html" target="_blank"><i>Robust \
					Reading Datasets</i></a> provided by <a href="http://algoval.essex.ac.uk/icdar/Competitions.html" target="_blank"><i>ICDAR 2003 Competitions</i></a>. Experimental \
					results demonstrate that our method can successfully localize and extract the text information in natural scene images with satisfactory performance.'
			}
		];

		this.totalCardsLength = this.cards.length;
	}

	componentDidMount() {
		if (this.match.url !== "/") {  // Remove active style on About nav link for non-about pages
			$("a#about_nav").removeClass("active");
		}
	}

	getPreviousCardName(currentIndex) {
		let previousIndex = currentIndex > 0 ? currentIndex-1 : this.totalCardsLength-1;
		return this.cards[previousIndex].name;
	}

	getNextCardName(currentIndex) {
		let nextIndex = currentIndex < this.totalCardsLength-1 ? currentIndex+1 : 0;
		return this.cards[nextIndex].name;
	}

	getCardsTemplate() {
		let cardsTemplate = this.cards.map((card, index) => {
			return (
				<ProjectCard key={index} card={card} match={this.match} />
			);
		});

		return cardsTemplate;
	}

	getProjectRoute() {
		let projectRoute = <Route exact path={this.match.path} render={() => (
				<div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
					{this.getCardsTemplate()}
				</div>
			)}
		/>

		return projectRoute;
	}

	getCardsRoutes() {
		let self = this;
		let cardsRoutes = this.cards.map((card, index) => {
			return (
				<Route key={index} path={`${this.match.path}/${card.name}`} render={() => (
					<ProjectDetail 
						currentIndex={index}
						previousCard={this.getPreviousCardName(index)}
						nextCard={this.getNextCardName(index)}
						totalLength={this.totalCardsLength}
						parentmatch={self.match}
						card={card} 
					/>
				)} />
			);
		});

		return cardsRoutes;
	}

	render() {
		return (
			<div className="project-container">
				{this.getProjectRoute()}
				{this.getCardsRoutes()}
			</div>
		);
	}
}

export default Project;