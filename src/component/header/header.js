import React, { useState } from 'react';
import './header.css';
import {
    useHistory
} from "react-router-dom";

const Header = (props) => {
    const [active, setActive] = useState(props.activePath);
    console.log(props.activePath)
    let history = useHistory();
    return (
        <div className="header">
            <div className="header-logo">
            </div>
            {/* <div className="list row">
                Humberger
            </div> */}
            <ul className="list d-flex flex-lg-row flex-column justify-content-between ">
                <li className={"list-item   "   + (active == 'home' ? 'active' : '')} onClick={() => { setActive('home'); history.push('/home') }}>Home</li>
                <li className={"list-item   "   + (active == 'about' ? 'active' : '')} onClick={() => { setActive('about'); history.push('/about') }}>About Us</li>
                <li className={"list-item   "  + (active == 'courses' ? 'active' : '')} onClick={() => { setActive('courses'); history.push('/courses') }}>Courses</li>
                <li className="list-item ">Admission</li>
                <li className="list-item ">Direct Message</li>
                <li className="list-item ">Gallary</li>
                <li className="list-item ">Placement</li>
                <li className="list-item ">Contact Us</li>
                <li className="list-item ">Facilities/ Methodology</li>
                <li className="list-item ">Student View</li>
            </ul>
        </div>
    );
}

export default Header;
