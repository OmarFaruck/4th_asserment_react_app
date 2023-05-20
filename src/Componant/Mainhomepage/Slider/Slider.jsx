import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import '../Slider/Slider.css'
import  '../../Responsive/Responsive.css'
const Slider = () => {
    return (
        <section id='slider'>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={image1}
                alt="First slide"
                />
                <Carousel.Caption>
                <div className="item_introtext"> 
                    <h1>Online Education</h1>
                    <p>The best educational template.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div className="item_introtext"> 
                    <h1>School Education</h1>
                    <p>Get all courses with on-line content.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <div className="item_introtext"> 
                    <h1>Collage Education</h1>
                    <p>Awesome Template get it know.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
       </Carousel>
        </section>
    );
};

export default Slider;