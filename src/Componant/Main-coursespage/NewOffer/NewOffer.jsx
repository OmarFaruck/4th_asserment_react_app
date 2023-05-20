import React from 'react';
import '../NewOffer/NewOffer.css'
import '../../Responsive/Responsive.css'
import image1 from '../../images/service1.jpg'
import image2 from '../../images/service2.jpg'
import image3 from '../../images/service3.jpg'
const NewOffer = () => {
    return (
        <section id="newOffer">
          <div className="container">
           <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="offer_start">
               <img src={image1} alt="" className="img-fluid mx-auto d-block"/>
               <h2>Web Development</h2>
               <p>Web development typically refers to the coding and programming side of website production. When you learn web development, you might start out writing a simple page of HTML text and build up to creating more complex, feature-rich applications designed.</p>
              </div>
             </div>
             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
               <div className="offer_start">
                 <img src={image2}  alt="" className="img-fluid mx-auto d-block"/>
                 <h2>Mobile Development</h2>
                 <p>Mobile applications enable us to perform a nearly endless array of tasks. They allow us to send and receive messages, provide us with entertaining games, and help us keep track of appointments. App developers are responsible for creating.</p>
               </div> 
             </div>
             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
               <div className="offer_start">
                 <img src={image3}  alt="" className="img-fluid mx-auto d-block"/>
                 <h2>Responsive Design</h2>
                 <p>Back before smartphones and tablets, it was safe to assume that websites would only be viewed on desktop screens, in browser windows that were 1000-ish pixels wide. Of course, that’s simply not the case today. Over half of all internet traffic comes from mobile.</p>
               </div> 
             </div>
           </div>
          </div>
        </section>
    );
};

export default NewOffer;