import React, { Component } from "react";


class Experiment extends Component {
	render() {
		return (
			<div>
				<h2>Experiments</h2>
				<div>
					<p>In order to verifythe effectiveness of our proposed method, we compare four kinds of algorithms:</p> 
					<ul>
						<li>STL-SVM on original images (STL-SVM)</li>
						<li>SVM+MTL on original images (SVM+MTL)</li> 
						<li>STL-SVM on images after saliency detection (STL-SVM_Saliency)</li> 
						<li>SVM+MTL on images after saliency detection (SVM+MTL_Saliency)</li>
					</ul>
				</div>

				<h3>Experiment on Corel 10 dataset</h3>
				<div>
					<p><b>Corel 10 dataset:</b> This dataset consists of a subset of 1,000 images of the Corel photo database, which are classified into 10 categories. For each category, 100 images with the size of 384 × 256 or 256 × 384 pixels are included. Most of categories or images are informative with complex background.</p>
					<div className="txtc">
						<p className="bold">Table 1. Classification performance on Corel 10 dataset</p>
						<table className="data-table">
							<tbody>
								<tr className="data-heading">
									<th>Algorithms</th>
									<th>Buildings</th>
									<th>Buses</th>
									<th>Dinosaurs</th>
									<th>Elephants</th>
									<th>Flowers</th>
									<th>Food</th>
									<th>Mean</th>
								</tr>
								<tr>
									<th>STL-SVM</th><td>0.66</td><td>0.94</td><td>1</td><td>0.98</td><td>0.98</td><td>0.74</td><td>0.88</td>
								</tr>
								<tr>
									<th>SVM+MTL</th><td>0.94</td><td>0.90</td><td>0.90</td><td>0.96</td><td>0.88</td><td>0.90</td><td>0.91</td>
								</tr>
								<tr>
									<th>STL-SVM_Saliency</th><td>0.90</td><td>0.98</td><td>1</td><td>1</td><td>0.78</td><td>0.94</td><td>0.93</td>
								</tr>
								<tr>
									<th>SVM+MTL_Saliency</th><td>0.98</td><td>0.98</td><td>0.98</td><td>1</td><td>0.98</td><td>1</td><td>0.93</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<h3>Experiment on Caltech 101 dataset</h3>
				<div>
					<p><b>Caltech 101 dataset:</b> This Dataset is composed of 101 categories in total, with inconsistent number of images ranging from 40 to 800 per category. The size of each image is roughly 300×200 pixels. For some categories in this database, the images do not contain cluster background, which may results in little difference between the original images and those after saliency region detection. Thus we choose 10 categories with rich background from this database, which are airplanes, motorbikes, electric guitar, elephant, dolphin, faces, dalmatian, kangaroo, sunflower and flamingo, each with a label.</p>
					<div className="txtc">
						<p className="bold">Table 2. Classification performance on Caltech 101 dataset</p>
						<table className="data-table">
							<tbody>
								<tr className="data-heading">
									<th>Algorithms</th>
									<th>Airplanes</th>
									<th>Motorbikes</th>
									<th>Guitar</th>
									<th>Elephant</th>
									<th>Dophin</th>
									<th>Faces</th>
									<th>Dalmatian</th>
									<th>Kangaroo</th>
									<th>Sunflower</th>
									<th>Flamingo</th>
									<th>Mean</th>

								</tr>
								<tr>
									<th>STL-SVM</th><td>0.76</td><td>0.73</td><td>0.20</td><td>0.20</td><td>0.33</td><td>0.90</td><td>0.43</td><td>0.30</td><td>0.73</td><td>0.36</td><td>0.49</td>
								</tr>
								<tr>
									<th>SVM+MTL</th><td>0.93</td><td>0.93</td><td>0.90</td><td>0.56</td><td>0.93</td><td>0.90</td><td>0.70</td><td>0.33</td><td>0.43</td><td>0.26</td><td>0.68</td>
								</tr>
								<tr>
									<th>STL-SVM_Saliency</th><td>1</td><td>1</td><td>0.83</td><td>0.76</td><td>0.70</td><td>0.70</td><td>0.93</td><td>0.76</td><td>1</td><td>0.66</td><td>0.83</td>
								</tr>
								<tr>
									<th>SVM+MTL_Saliency</th><td>1</td><td>1</td><td>0.83</td><td>1</td><td>0.86</td><td>0.80</td><td>1</td><td>0.43</td><td>0.86</td><td>0.73</td><td>0.85</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Experiment;