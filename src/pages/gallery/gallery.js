import React from 'react';
import './gallery.css';
import QuickLinks from '../../component/quick_links/quick_links'

const Gallery = () => {
    return (
        <div>
            <div className=" background">
                <div className="banner-tag">Gallery</div>
            <img className="d-block w-100" src="http://himgirieducation.com/home/Hme%20Pics/gallery.png" alt="gallery"></img>
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

export default Gallery;
