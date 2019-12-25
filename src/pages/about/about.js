import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {

	return (
		<div>
			<div className="container">
				
				<div className="col-md-12 ">
					<div align="left" style={{backgroundColor:'#435F9C',color: '#FFF'}}>
						<b>About Achieve Management Education</b>
					</div>
				</div>

				<div>
					<p style={{textAlign:"justify"}}>Himgiri Management Education (School of Hotel and Catering Education) is an 
					autonomous Institute of Hotel Management and catering Technology in Dehradun setup 
					and governed by Himgiri Shiksha Samiti, Uttarakhand under Society Act of 21,1860 
					(Registered No. 2743ID), Certified By ISO 9001:2015 (Quality Management System), 
					EGAC, IAF Certificate No. 161209301 started  its first academic session from January 2015
					 in dehradun.</p>
				</div>
			</div>
		</div>
	);
}

export default About;
