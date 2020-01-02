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
                        Educating beyond the curriculum is one of the most important characteristic of Himgiri education. It offers a learning environment which allows students to develop their creativity, work ethics, management and leadership skills which are essential for future success..
                    </div>

                    <div className="sub-heading2">
                        Students at Himgiri will not only learn about Hotel Management, Sai Carving, service skills and kitchen operations.
    Our goal is to create an environment where students learn to tackle difficult and complex problem by probing, discussing and integrating, working together towards an understanding, much deeper than making decisions and taking responsibilities.
                        </div>

                    <div className="sub-heading2">
                        We look forward to welcoming you to our Organization.
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
