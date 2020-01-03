import React from 'react';
import './course.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Course = () => {

    let course = [
        {
            'id': 1,
            'courses_list': 'Diploma In Hotel Management & Catering Education',
            'tenure': '1 Year Academic & 6 Months Industrial Training.',
            'name': 'Diploma In Hotel Management & Catering Education',
            'eligibility': '10th / 10+2 pass or equivalent.',
            'scopes': '5* Hotels and Cruise (Ship)',
            'placement': 'All over India',
            'bg_color': '#FFCC00'

        },
        {
            'id': 2,
            'courses_list': 'Diploma In Hotel Management & Catering Education',
            'tenure': '6 Month Academic & 6 Months Industrial Training.',
            'name': 'Diploma In Hotel Management & Catering Education (One Year)',
            'eligibility': '10th / 10+2 pass or equivalent.',
            'scopes': '5* Hotels and Cruise (Ship)',
            'placement': 'All over India',
            'bg_color': '#ADBCE9'

        },
        {
            'id': 3,
            'courses_list': 'Diploma In Food Production',
            'tenure': '6 Months Academic & 6 Months Industrial Training.',
            'name': 'Diploma In Food Production (One Year)',
            'eligibility': '10th / 10+2 pass or equivalent.',
            'scopes': '5* Hotels and Cruise (Ship)',
            'placement': 'All over India',
            'bg_color': '#FFCC00'

        },
        {
            'id': 4,
            'courses_list': 'Diploma In Food and Beverage Service ',
            'tenure': '6 Months Academic & 6 Months Industrial Training.',
            'name': 'Diploma In Food and Beverage Service (One Year)',
            'eligibility': '10th / 10+2 pass or equivalent.',
            'scopes': '5* Hotels and Cruise (Ship)',
            'placement': 'All over India',
            'bg_color': '#FFCC00'

        },
        {
            'id': 5,
            'courses_list': 'Diploma In Housekeeping Management ',
            'tenure': '6 Months Academic & 6 Months Industrial Training.',
            'name': 'Diploma In Housekeeping Management (ONE Year)',
            'eligibility': '10th / 10+2 pass or equivalent.',
            'scopes': '5* Hotels and Cruise (Ship)',
            'placement': 'All over India',
            'bg_color': '#FFCC00'

        }
    ]
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
                        COURSES
                    </div>
                    <div className="sub-heading">
                        COURSES
                    </div>
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">COURSES LIST</th>
                                <th scope="col">TENURE</th>
                                <th scope="col">COURSES NAME</th>
                                <th scope="col">ELIGIBILITY</th>
                                <th scope="col">SCOPES</th>
                                <th scope="col">PLACES  OF PLACEMENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                course.map(data => (
                                    <tr>
                                        <td className="course_heading"><strong> {data.courses_list}</strong></td>
                                        <td  className="course_heading">{data.tenure}</td>
                                        <td  className="course_heading">{data.name}</td>
                                        <td  className="course_heading">{data.eligibility}</td>
                                        <td  className="course_heading">{data.scopes}</td>
                                        <td  className="course_heading">{data.placement}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Course;
