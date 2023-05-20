import React from 'react'; 
import image1 from '../../images/list 1.png'
import image2 from '../../images/list 2.png'
import image3 from '../../images/list 3.png'
import image4 from '../../images/list 4.png'
// import {FaEnvelopeSquare,FaGooglePlusSquare,FaGithubSquare } from "react-icons/fa";  
import { FaFacebookF,FaTwitter,FaTelegramPlane,FaPhoneAlt } from "react-icons/fa";

import '../Member/Member.css'
import '../../Responsive/Responsive.css'

const Member = () => {
    return (
        <section className="list">
        <div className="container">
          <div className="row">
            <h2>List of Authors</h2>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 py-3">
              <div className="card mx-auto">
                <img src={image1} className="img-fluid mx-auto card-img-top mt-4 w-50" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title ">Dianne Russell</h5>
                  <p className="card-text">Content Writer @Company.</p>
                  <div className="social_icoon d-flex mb-3 text-dark mt-4">
                 <FaFacebookF  className='w-50'/>
                  <FaTwitter  className='w-50'/>
                  <FaTelegramPlane  className='w-50'/>
                  <FaPhoneAlt  className='w-50'/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 py-3">
              <div className="card mx-auto">
                <img src={image2} className="img-fluid mx-auto card-img-top mt-4 w-50" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Dianne Russell</h5>
                  <p className="card-text">Content Writer @Company.</p>
                  <div className="social_icoon d-flex mb-3 text-dark mt-4">
                 <FaFacebookF  className='w-50'/>
                  <FaTwitter  className='w-50'/>
                  <FaTelegramPlane  className='w-50'/>
                  <FaPhoneAlt  className='w-50'/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 py-3">
              <div className="card mx-auto">
                <img src={image3} className="img-fluid mx-auto card-img-top mt-4 w-50" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Jenny Wilson</h5>
                  <p className="card-text">Content Writer @Company.</p>
                  <div className="social_icoon d-flex mb-3 text-dark mt-4">
                 <FaFacebookF  className='w-50'/>
                  <FaTwitter  className='w-50'/>
                  <FaTelegramPlane  className='w-50'/>
                  <FaPhoneAlt  className='w-50'/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 py-3">
              <div className="card mx-auto">
                <img src={image4} className="img-fluid mx-auto card-img-top mt-4 w-50" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Leslie Alexander</h5>
                  <p className="card-text">Content Writer @Company.</p>
                  <div className="social_icoon d-flex mb-3 text-dark mt-4">
                 <FaFacebookF  className='w-50'/>
                  <FaTwitter  className='w-50'/>
                  <FaTelegramPlane  className='w-50'/>
                  <FaPhoneAlt  className='w-50'/>
                </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
       </section>
    );
};

export default Member;