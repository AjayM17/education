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

                </div>

            </div>

        </div>


    );
}

export default DirectorMessage;
