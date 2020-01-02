import React, { useState } from 'react';
import './header.css';
import {
    useHistory
} from "react-router-dom";

const Header = (props) => {
    const [active, setActive] = useState(props.activePath);
    let history = useHistory();
    return (
        <div className="header">
            <div className="header-logo">
            </div>
            {/* <div className="list row">
                Humberger
            </div> */}
            <ul className="list d-flex flex-lg-row flex-column justify-content-between ">
                <li className={"list-item "   + (active === 'home' ? 'active' : '')} onClick={() => { setActive('home'); history.push('/home') }}>Home</li>
                <li className={"list-item "   + (active ==='about' ? 'active' : '')} onClick={() => { setActive('about'); history.push('/about') }}>About Us</li>
                <li className={"list-item "  + (active === 'courses' ? 'active' : '')} onClick={() => { setActive('courses'); history.push('/courses') }}>Courses</li>
                <li className={"list-item "  + (active === 'admission' ? 'active' : '')} onClick={() => { setActive('admission'); history.push('/admission') }}>Admission</li>
                <li className={"list-item "  + (active === 'message' ? 'active' : '')} onClick={() => { setActive('message'); history.push('/message') }}>Director Message</li>
                <li className={"list-item "  + (active === 'gallery' ? 'active' : '')} onClick={() => { setActive('gallery'); history.push('/gallery') }}>Gallery</li>
                <li className={"list-item "  + (active === 'placement' ? 'active' : '')} onClick={() => { setActive('placement'); history.push('/placement') }}>Placement</li>
                <li className={"list-item "  + (active === 'contact' ? 'active' : '')} onClick={() => { setActive('contact'); history.push('/contact') }}>Contact Us</li>
                <li className={"list-item "  + (active === 'facilities' ? 'active' : '')} onClick={() => { setActive('facilities'); history.push('/facilities') }}>Facilities/ Methodology</li>
                <li className={"list-item "  + (active === 'student' ? 'active' : '')} onClick={() => { setActive('student'); history.push('/student') }}>Student View</li>
            </ul>
        </div>
    );
}

export default Header;
