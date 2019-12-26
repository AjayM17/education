import React from 'react';
import './contact.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Contact = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Contact</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/pics/contact-us-banner%20(1).jpg" alt="contact"></img>
            </div>
            <div className="row background section">
                <div className="col-md-3">
                    <QuickLinks />
                </div>
                <div className="col-md-9">

                </div>

            </div>

        </div>


    );
}

export default Contact;
