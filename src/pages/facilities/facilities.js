import React from 'react';
import './facilities.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Facilities = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Facilities</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/pics/makeit%20copy.jpg" alt="facilities"></img>
            </div>
            <div className="row background section">
                <div className="col-md-3">
                    <QuickLinks />
                </div>
                <div className="col-md-9">
                    <h1 style={{marginLeft:"175px"}}>Facilities</h1>
                    <div align="left" style={{backgroundColor:"#435F9C", color:"#FFF", paddingLeft:"8px"}}>
                        <b>Institute's Facilities</b>
                    </div>
                    <ul className="facilitiesUL">
                        <li>
                            100% Placement Facility in India with 4 to 5 Star Hotels, Cruise Liners, Multi-National 
                            Companies (MNCs).
                        </li>
                        <li>Visit to : Dubai/Thailand/Malasia/Abu-Dhabi for projects.</li>
                        <li>Frequently Hotel Visit.</li>
                        <li>Industrial Training & Internship anywhere in India.</li>
                        <li>Modern Teaching Facility.</li>
                        <li>Live Assignment, Project based and Roll Play Learning.</li>
                        <li>Lectures by Management & Hotelier Gurus.</li>
                        <li>Personality Development (P.D.) Session.</li>
                        <li>Wi-Fi.</li>
                        <li>Library</li>
                    </ul>
                </div>

            </div>

        </div>


    );
}

export default Facilities;
