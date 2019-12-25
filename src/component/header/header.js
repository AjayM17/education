import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, ListGroup } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <ul className="list">
                <li className="list-item">Home</li>
                <li className="list-item active">About Us</li>
                <li className="list-item">Courses</li>
                <li className="list-item">Admission</li>
                <li className="list-item">Direct Message</li>
                <li className="list-item">Gallary</li>
                <li className="list-item">Placement</li>
                <li className="list-item">Contact Us</li>
                <li className="list-item">Facilities / Methodology</li>
                <li className="list-item">Student View</li>
            </ul>
        </div>
    );
}

export default Header;
