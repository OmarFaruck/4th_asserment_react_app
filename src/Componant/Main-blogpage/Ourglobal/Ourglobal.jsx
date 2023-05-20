import React from 'react';
import '../Ourglobal/Ourglobal.css'
import '../../Responsive/Responsive.css'
import image1 from '../../images/london1.png'
import image2 from '../../images/london2.png'
import image3 from '../../images/london3.png'
const Ourglobal = () => {
    return (
        <section id="global">
        <div className="container">
          <div className="text-center">
            <h1 className="GLOBAL">OUR GLOBAL CAMPUS</h1>
            <h4 className="Choose">Choose your EDUATION LEVEL</h4>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="OUR">
                <img src={image1} className="img-fluid rounded mx-auto mb-3 d-block" alt="..."/>
                <div className="overlay">
                  <h3>LONDON</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="OUR">
                <img src={image2} className="img-fluid rounded mx-auto mb-3 d-block" alt="..."/>
                <div className="overlay">
                  <h3>GUJARAT</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="OUR">
                <img src={image3} className="img-fluid rounded mx-auto mb-3 d-block" alt="..."/>
                <div className="overlay">
                  <h3>MUMBAI</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Ourglobal;