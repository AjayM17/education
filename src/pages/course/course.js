import React from 'react';
import './course.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Course = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Courses</div>
                <img className="d-block w-100" src="http://himgirieducation.com/home/pics/a6.jpg" alt="course"></img>
            </div>
            <div className="row background section">
                <div className="col-md-3">
                    <QuickLinks />
                </div>
                <div className="col-md-9">
                    <div className="heading">
                        CONTACT US
                    </div>
                    <div className="sub-heading">
                    CONTACT US
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Course;
