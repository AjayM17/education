import React from 'react';
import './home.css';
import { Carousel } from 'react-bootstrap';

const Home = ()  => {
let sliderImages = [
    {
      'id' : 1,
      'url' : 'http://himgirieducation.com/home/pics/placementslide.jpg'
    },
    {
      'id' : 2,
      'url' : 'http://himgirieducation.com/home/pics/makeit%20copy.jpg'
    },
    {
      'id' : 3,
      'url' : 'http://himgirieducation.com/home/pics/newstudent.jpg'
    },
    {
      'id' : 4,
      'url' : 'http://himgirieducation.com/home/gallery/institute%20building.jpg'
    },
    {
      'id' : 5,
      'url' : 'http://himgirieducation.com/home/pics/housekeeping.png'
    }
  ]
  return (
    <div style={{ backgroundColor: 'white', padding:'8px'}}>
      <Carousel>
        {
          sliderImages.map( data => (
            <Carousel.Item key={data.id}>
            <img
              className="d-block w-100"
              src={data.url}
              alt="slide"
            />
          </Carousel.Item>
          ))
        }


        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://himgirieducation.com/home/pics/housekeeping.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://himgirieducation.com/home/pics/housekeeping.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://himgirieducation.com/home/pics/housekeeping.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    
        <div className="row">
          <div className="col-md-3">
            <div className="listFirst">
              FACILITIES
         </div>
            <div className="listSecond">
              Merhodology
         </div>
          </div>
          <div className="col-md-3">
            <div className="listFirst">
              COURSES
         </div>
            <div className="listSecond">
              Courses
         </div>
          </div>
          <div className="col-md-3">
            <div className="listFirst">
              ADMISSION
         </div>
            <div className="listSecond">
              Admission
         </div>
          </div>
          <div className="col-md-3">
            <div className="listFirst">
              PLACEMENT
         </div>
            <div className="listSecond">
              Placement
         </div>
          </div>
        </div>
       
        <div className="divider">
        
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="listThird">
            </div>
            <div className="listFourth">
              Campus Location
         </div>
          </div>
          <div className="col-md-3">
            <div className="listThird">
            </div>
            <div className="listFourth">
              Contact Us
         </div>
          </div>
          <div className="col-md-3">
            <div className="listThird">
            </div>
            <div className="listFourth">
              Gallery
         </div>
          </div>
          <div className="col-md-3">
            <div className="listThird">
            </div>
            <div className="listFourth">
              News & Headlines
         </div>
          </div>

        </div>
      
    
      </div>
   

  );
}

export default Home;
