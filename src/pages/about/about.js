import React from 'react';
import './about.css';
import QuickLinks from '../../component/quick_links/quick_links'

const  About = () => {

	return (
		<div>
			<div className=" background">
				<div className="banner-tag">About</div>
				<img className="d-block w-100" src="http://himgirieducation.com/home/Hme%20Pics/about.png" alt="about"></img>
			</div>
			<div className="row background section">
				<div className="col-md-3">
					<QuickLinks />
				</div>
				<div className="col-md-9">
					<h1>ABOUT US</h1>
					<div className="head2">
						<b>About Achieve Institute of Hotel Management</b>
		 			</div>
		 			<p className="aboutContent">
		 				<br/>
						Achieve Institute of Hotel Management, under the patronage “Hillyans Educational Society”
						having Registration No. 507/2003-2004 with 01 years, supporting the cause of value based
						education, offering education ranging Diplomas in Hospitality. The hospitality industry is an
						exciting, dynamic and international industry in which to forge your career.  Thanks to Achieve
						Institute of Hotel Managements’ strong industry links, you’ll be able to discover the major
						hospitality employers through our national Recruitment Forum.
						<br/>
						Imagine a career that takes you all over the world where you have the skills and confidence to be a leader in your chosen field.
						<br/><br/>
						<strong>Exciting career options</strong>
						<br/><br/>
						Achieve Institute of Hotel Management, Barhani (Bazpur) U.S.Nagar(UK) India is waiting to place
						the students on thousands vacant positions in Hospitality sector. Be inspired! Read some of the
						stories of many successful alumni and help your career path take off.
						<br/><br/>
						As well as academic study, you’ll gain real experience from hands-on learning. Fromday one, you’ll 
						live and study in a hotel atmosphere. During the live-in semesters, you’ll take on a number of hotel 
						management responsibilities. From guest relations, front office management and food and beverage to 
						housekeeping and property management, you’ll gain real experience in all aspects of hotel management & 
						Cruise Operation & Management.
						<br/><br/>
						Along with the practical experience and the academic studies, your lecturers stress the importance of 
						professional work behaviours, such as attitude, punctuality, attendance and presentation to ensure that
						 you develop your management potential.
 					</p>
				</div>

			</div>

		</div>

	);
}

export default About;
