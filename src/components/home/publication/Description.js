import React, { Component } from "react";

class Description extends Component {
	render() {
		return (
			<li className="accordion-item" data-accordion-item>
				<a href="#" className="accordion-title"><h4>Description</h4></a>
				<div className="accordion-content" data-tab-content>
					<p>
						In this paper, we propose a novel image classification method based 
						on <span className="italic">saliency region detection and multi-task learning (MTL)</span>. The proposed method 
						has the advantages of both region-based and MTL-based methods. Specifically, we firstly detect the object region 
						of an image with saliency detection technique, then extract the visual features of detected saliency region, 
						cluster them into groups, and finally employ the combination of MTL and SVM(Support Vector Machine) to build the 
						classifier. Experimental results on two popular data sets 
						(<a href="http://users.dsic.upv.es/~rparedes/english/research/rise/MiPRCV-WP6-RF/" target="_blank">Corel 10</a> and <a href="http://www.vision.caltech.edu/Image_Datasets/Caltech101/" target="_blank">Caltech 101</a>) have 
						shown that our method has satisfactory classification performances and outperforms the traditional methods employing only region information or MTL.
					</p>
					<ul>
						<li className="mts">
							<span className="bold">Saliency Detection:</span> Utilize the <a href="http://mmcheng.net/salobj/" target="_blank">region constrast(RC)</a> method and image processing techique to extract the object region which has high constrast to its surrounding regions for each image.
						</li>
						<li className="mts">
							<span className="bold">Feature Extraction:</span> Extract a 139-dimensional visual feature vector for each image, including 72-dimensional color histogram in the HSV color space, 9-dimensional color moments,12-dimensional gray-level co-occurrence matrix feature, 4-dimensional gray-level difference histogram feature,2-dimensional connected domain feature, and 40-dimensional Gabor feature.
						</li>
						<li className="mts">
							<span className="bold">Fuzzy Clustering:</span> Employ <a href="http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=4046215&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D4046215" target="_blank">fuzzy clustering</a> method to seperate and cluster the categories based on their relevance, which is determined by the distance between the centroids of the representative feature vector for each category.
						</li>
						<li className="mts">
							<span className="bold">Support Vector Machine:</span> Support vector machine(<a href="http://www.support-vector-machines.org/" target="_blank">SVM</a>) is a supervised learning model which is widely used in classification and regression problems. A popular tool "A Library for Support Vector Machines"(<a href="http://www.csie.ntu.edu.tw/~cjlin/libsvm/" target="_blank">LIBSVM</a>) can be used to efficiently implement SVM algorithm.
						</li>  
						<li className="mts">
							<span className="bold">Mulit-task Learning:</span> Multi-task learning(MTL) tries to learn a bias (hypothesis space) by considering multiple related learning tasks simultaneously. The learned bias can then be used to guide the learning of each task. MTL focuses on sharing information among tasks and has been demonstrated to be superior to single-task learning(STL). We utilize <a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6183517" target="_blank">Generalized sequential minimal optimization (GSMO) for SVM-Based Multitask Learning</a> method, which gives faster computation speed and handls larger datasets than traditional CVX optimization method to implement SVM+MTL classification algorithm.
						</li>
					</ul>

					<div className="txtc mtm">
						<img src="images/publication-flow-chart.jpg" />
						<p className="mts">Figure 1. The framework of Multi-task learning SVM based on saliency region detection</p>
					</div>
				</div>
			</li>
		);
	}
}

export default Description;