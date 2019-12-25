import React from 'react';
import './course.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Course = () => {
    return (
        <div>
            <div className=" background">
                <div className="bannerImage ">

                </div>
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

export default Course;
