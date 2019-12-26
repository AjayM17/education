import React from 'react';
import './placement.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Placement = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Placement</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/pics/new-placement.png" alt="placement"></img>
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

export default Placement;
