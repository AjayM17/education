import React from 'react';
import './admission.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Admission = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Admission</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/pics/admission.jpg" alt="admission"></img>
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

export default Admission;
