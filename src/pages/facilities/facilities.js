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

                </div>

            </div>

        </div>


    );
}

export default Facilities;
