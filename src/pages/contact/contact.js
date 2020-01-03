import React from 'react';
import './contact.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Contact = () => {

    const handleSubmit = (event) => {
        alert('submit')
        event.preventDefault();
    }

    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Contact</div>
                <img className="d-block w-100" src="http://himgirieducation.com/home/pics/contact-us-banner%20(1).jpg" alt="contact"></img>
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
                        QUICK ENQUIRY
                    </div>
                    <form style={{ marginTop: '16px' }}>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Name</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Father's/Mother's Name</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Address</label>
                            <div className="col-md-6">
                                <textarea type="text" className="form-control" rows="2" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Phone No.</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">E-mail</label>
                            <div className="col-md-6">
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Education Qualification</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Courses of Interest</label>
                            <div className="col-md-6">
                                <select className="form-control ">
                                    <option>--- SELECT ---</option>
                                    <option>DHM 1 Year</option>
                                    <option>DHM 1 AND HALF YEAR</option>
                                    <option>DHM 2 YEAR</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Your Query</label>
                            <div className="col-md-6">
                                <textarea type="text" className="form-control" rows="3" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary" onClick={(event) => {handleSubmit(event)}}>Submit</button>
                            </div>
                            <div className="col-2 "  style={{marginLeft:'30px'}}>
                                <button type="button" className="btn btn-primary">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );

}

export default Contact;


