import React from 'react';
import './student.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Student = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Student View</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/pics/studentviewnew.jpg" alt="student"></img>
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

export default Student;
