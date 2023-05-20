import React from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import Col from 'react-bootstrap/esm/Col';
import { FaEnvelopeSquare,FaGooglePlusSquare,FaFacebookSquare,FaGithubSquare } from "react-icons/fa";
import '../Footer/Footer.css';
import '../Responsive/Responsive.css'
const Footer = () => {
    return (
        <section id='footer'>
             <div className="container">
        <div className="row"> 
         
          <Col xxl="3" xl="3" lg="3" md="6" col="12">
            <div className="text-center">
              <h2>Our Contact</h2>
                <p>Abovecompany Inc</p>
                <p>JC Main Road, Near Silnile tower</p>
                <p>Pin-21542 NewYork US.</p>
                <p>(123) 456-789 - 1255-12584</p>
                 <p>omarfaruck1994@gmial.com</p>
            </div>
          </Col>
          <Col xxl="3" xl="3"  lg="3"  md="6"  col="12">
            <div className="text-center">
              <h2>Quick Links</h2>
              <p>Latest Events</p>
              <p>Terms and conditions</p>
              <p>Privacy policy</p>
              <p className="fs-4">Career</p>
              <p className="fs-5">Contact us</p>
            </div>
          </Col>
          <Col xxl="3" xl="3" lg="3" md="6" col="12">
            <div className="text-center">
              <h2>Latest posts</h2>
              <p>Aarul Malviya, the founder of Zamt, said Union Budget 2023-24 reflects the government's profound interest in bringing a digital revolution in the education sector and promoting.</p>
            </div>
          </Col>
          <Col xxl="3" xl="3" lg="3" md="6" col="12">
            <div className="text-center">
              <h2>Recent News</h2>
              <p>Nurturing children to think, feel and connect beyond physical boundaries, mental barriers, and numerous virtual compartments will go a long way in creating a generation of thinkers.</p>
            </div>
            <div className="font_icon">
              <NavLink to="#"> <FaGooglePlusSquare  className='Google'/></NavLink>
              <NavLink to="#"> <FaFacebookSquare  className='facebook'/></NavLink>
              <NavLink to="#"><FaGithubSquare  className='github'/></NavLink>
              <NavLink to="#"><FaEnvelopeSquare  className='envelope_1'/> </NavLink>
            </div>
          </Col>
        </div>
         
      </div>
        </section>
    );
};

export default Footer;