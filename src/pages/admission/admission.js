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
                    <div className="heading">
                        ADMISSION
                    </div>
                    <div className="sub-heading">
                        ADMISSION
                    </div>

                    <div className="sub-heading1">
                        Selection Procedure
                    </div>

                    <div className="sub-heading2">
                        Minimum Qualification: Minimum qualification for taking admission in any diploma of hotel management is 10th / 10+2 Pass or its Equivalent.
                    </div>

                    <div className="sub-heading1">
                    Total Seats:
                    </div>

                    <div className="sub-heading2">
                    Total numbers of seats in a batch are 30 in a session (Two session summer and winter).
                    </div>
                    <div className="sub-heading2">
                    Reservation of Seats: Seats are reserved for candidates belong to Scheduled caste and scheduled tribes accordingly.
                    </div>
                    <div className="sub-heading2">
                    15% seats are reserved for SC Candidates (With Fee Relaxation).
                    </div>
                    <div className="sub-heading2">
                    8% seats are reserved for ST candidates (With Fee Relaxation).
                    </div>
                    <div className="sub-heading2">
                    3% seats are reserved for Physical Handicapped candidates (With Fee Relaxation).
                    </div>

                    <div className="sub-heading1">
                    Admission Procedure:
                    </div>
                    <div className="sub-heading2">
                    All council candidates, who are offered admission as per the counseling result, have to visit the collage at specified time with the letter of admission and all required documents and passport size photograph. At the time of admission a fixed amount of fee should be deposited by the candidates to confirm their admission. All the facilities like uniform, medical facility, gym, foding and accommodation will be offered to the candidates’ terms and conditions applied.
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Admission;
