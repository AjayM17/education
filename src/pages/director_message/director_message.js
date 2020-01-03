import React from 'react';
import './director_message.css';
import QuickLinks from '../../component/quick_links/quick_links'

const DirectorMessage = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Message From Director's</div>
                <img className="d-block w-100" src="http://himgirieducation.com/home/pics/messages-banner.jpg" alt="message"></img>
            </div>
            <div className="row background section">
                <div className="col-md-3">
                    <QuickLinks />
                </div>
                <div className="col-md-9">
                    <div className="heading">
                        MESSAGE FROM DIRECTOR'S
                    </div>
                    <div className="sub-heading">
                        Message from Director's
                    </div>

                    <div className="sub-heading2">
                    Achieve institute of hotel management is established to prepare qualified hospitality professionals. 
We instill concurrent methods and practices to ensure we deliver par excellence professionals In the hotel industry.
The learning and development imparted in our Institute also helps our students to progress professionally as well as personally
We encourage you to explore options and talk to us to help you understand what better suits your needs
                    </div>
                    <div className="sub-heading1">
                    Naveen Shah (Masters in Hotel Management) <br/>
                    Director
                       
                    </div>
                </div>

            </div>

        </div>


    );
}

export default DirectorMessage;
