import React from 'react';
import './placement.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Placement = () => {
    const images =[
        {
            'id' : 1,
            'url':'http://himgirieducation.com/home/Hme%20Pics/Oberoi0.jpg'
        },
        {
            'id' : 2,
            'url':'http://himgirieducation.com/home/Hme%20Pics/taj.jpg'
        },
        {
            'id' : 3,
            'url':'http://himgirieducation.com/home/Hme%20Pics/Taj%20hotels0.jpg'
        },
        {
            'id' : 4,
            'url':'http://himgirieducation.com/home/Hme%20Pics/sheraton%20hotel0.jpg'
        },
        {
            'id' : 5,
            'url':'http://himgirieducation.com/home/Hme%20Pics/raddison%20group0.jpg'
        },
        {
            'id' : 6,
            'url':'http://himgirieducation.com/home/Hme%20Pics/sarovar%20group0.jpg'
        },
        {
            'id' : 7,
            'url':'http://himgirieducation.com/home/Hme%20Pics/Sayaji%20Hotels0.png'
        }
    ]
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
                <div className="heading">
                       PLACEMENT
                    </div>
                    <div className="sub-heading">
                    Placement
                    </div>

                    <div className="sub-heading1">
                    Training and Placement cell
                    </div>

                    <div className="sub-heading2">
                    Students at Himgiri are backed by a pro-active and well managed placement cell . Care is taken to ensure first steps to a successful career in the hospitality industry are a smooth and pleasant experience. Students have the advantage of being individually counseled and guided right through the placement process – From choosing the right job opportunity, to the interview process, to the final selection and placement and thereafter during the career growth phase..
                    </div>

                    <div className="sub-heading2">
                    To bridge the gap between theory & actual industry practices the students are sent on regular basis for outdoor catering in reputed hotels to get a hands on experience , imbibe field knowledge as well as preparing them for their foray into the industry.
The cell liaison's and maintains healthy and proactive relationship with the industry at all levels and assist students in Industrial training placements in hospitality industry.
                    </div>

                    <div className="sub-heading1">
                    Industry-Institute Interaction
                    </div>

                    <div className="sub-heading2">
                    The placement wing has forged long- term tie-ups with corporate in the world of hospitality and leading hotel chains to guarantee a lucrative job awaits deserving students at the end of the course.
                    </div>
                    <div className="row">
                        {
                            images.map(data => (
                                <div key={data.id} className="col-md-4 img-border">
                                   <img className="d-block w-100" src={data.url} alt="placement"></img>
                                </div>
                            ))
                        }
                   
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Placement;
