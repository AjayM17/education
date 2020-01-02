import React from 'react';
import './quick_links.css';
import {
  useHistory
} from "react-router-dom";

const QuickLinks = ()  => {
  let history = useHistory();
  return (
    <div>
    <div className="quick_links_list">
        QUICK LINKS
    </div>
    <ul className="quick_links_item">
        <li  onClick={() => { history.push('/home') }}>Home</li>
        <li onClick={() => { history.push('/about') }}>About Us</li>
        <li onClick={() => { history.push('/courses') }}>Courses</li>
        <li onClick={() => { history.push('/admission') }}>Admission</li>
        <li onClick={() => { history.push('/message') }}>Director Message</li>
        <li onClick={() => { history.push('/gallery') }}>Gallery</li>
        <li onClick={() => { history.push('/placement') }}>Placement</li>
        <li onClick={() => { history.push('/contact') }}>Contact Us</li>
        <li onClick={() => { history.push('/facilities') }}>Facilities / Methodology</li>
      
    </ul>
      </div>
   

  );
}

export default QuickLinks;
