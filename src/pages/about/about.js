import React from 'react';
import './about.css';

function About() {

	return (
		<div>
			
			<div style={{ backgroundColor: 'white', padding:'8px'}}>
				<div className="container">
					<div className="row">
						<img className="d-block w-100" src="http://himgirieducation.com/home/Hme%20Pics/about.png"/>
					</div>
				</div>
			</div>
			
			<div style={{marginTop:"13px"}}></div>
			<div style={{ backgroundColor: 'white', padding:'8px'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-8">
							<h1 style={{marginLeft:"175px"}}>ABOUT US</h1>
							<div align="left" style={{backgroundColor:"#435F9C", color:"#FFF", paddingLeft:"8px"}}>
								<b>Achieve Institute of Hotel Management</b>
							</div>
							<p style={{textAlign:"justify",fontFamily:"Arial, Helvetica, sans-serif"}}>
								<br/>	
								About achieve education Achieve management education is an autonomous Institute 
								of Hotel Management and catering technology in barhani bajpur setup and governed by 
								hilliyan shiksha samiti, under Hilliyan welfare society ( Registered No.507 / 2003-2004 
								started its first academic session from Jan 2018.
								<br/><br/>
								<strong>Mission</strong>
								<br/><br/>
								The mission of HME is to provide education and employment oppturnities to 
								youth is an absolute necessity to achieve inclusive and sustainable growth 
								given the favorable demographics. Hme education has been a front runner 
								in providing skills and livelihood traning to people from different social 
								groups. Our programmes have yielded impact through improvement and income and
								standard of living not only for the individual but their families and 
								communities too.
								<br/><br/>
								We have skilled and placed more than 500 students in different five star and four star hotels of india.
							</p>	
						</div>
					</div>
				</div>
			</div>

		
		</div>
	);
}

export default About;
