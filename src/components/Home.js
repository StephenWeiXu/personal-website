import React, { Component } from "react";


class Home extends Component {
	render() {
		return (
	      <div class="profile">
	        <table class="personal-info" cellspacing="10px"> <tr>
	          <td>
        	     <p class="cell-title"><b>WEI XU</b></p>
	          	   Web Application Developer
	          	   Email: stephenweixu@gmail.com
	                <ul>
	      	  	      <li><a href="https://www.linkedin.com/in/wei-xu-75952aab?trk=nav_responsive_tab_profile" target="_blank"><img src="Icons/linkedin.png" /></a></li>
	                  <li><a href="https://github.com/StephenWeiXu" target="_blank"><img src="Icons/github.png" /></a></li>
	                </ul>
	    	    </td>
	          <td>
	             <p class="cell-title"><b>SKILL SET</b></p>
	              <table class="skill-tags">
	              <tr><td>Python</td>
	                  <td>Django</td>
	                  <td>JavaScript</td>
	                  <td>Java</td>
	              </tr>
	              <tr>
	                  <td>JQuery</td>
	                  <td>MySQL</td>
	                  <td>HTML</td>
	                  <td>CSS</td>
	              </tr>
	            </table>    
	          </td>
	          <td>
	             <p class="cell-title"><b>SPECIALITIES</b></p>
	              <table class="skill-tags">
	              <tr><td>Web Development</td>
	                  <td>Software Engineering</td>
	              </tr>
	              <tr>
	                  <td>Data Science</td>
	                  <td>Machine Learning</td>
	              </tr>
	            </table>    
	          </td></tr>
	          </table>
	      </div>
		)
	}
}

export default Home;