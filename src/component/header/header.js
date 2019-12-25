import React from 'react';
import './header.css';


function Header() {
    return (
        <div className="header">
            <div className="header-logo">

            </div>
            {/* <div className="list row">
                Humberger
            </div> */}
            <ul className="list row">
                <li className="list-item col-md-1 active">Home</li>
                <li className="list-item  col-md-1">About Us</li>
                <li className="list-item col-md-1">Courses</li>
                <li className="list-item col-md-1">Admission</li>
                <li className="list-item col-md-1">Direct Message</li>
                <li className="list-item col-md-1">Gallary</li>
                <li className="list-item col-md-1">Placement</li>
                <li className="list-item col-md-1">Contact Us</li>
                <li className="list-item col-md-2">Facilities/ Methodology</li>
                <li className="list-item col-md-1">Student View</li>
            </ul>
        </div>
    );
}

export default Header;
