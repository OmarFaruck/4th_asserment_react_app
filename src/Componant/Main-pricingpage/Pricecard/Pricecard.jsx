import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import '../Pricecard/Pricecard.css'
import '../../Responsive/Responsive.css'
import Button from 'react-bootstrap/Button';
const Pricecard = () => {
    return (
        <section id='card'>
           <div className="container">
               <div className="row">
               <Col xxl="3" xl="3" lg="3" md="6" sm="12">
                    <div className="main_card">
                        <div className="text-center">
                            <div className="header_card">
                                <h4>Basic</h4>
                                <h3>$15.00 / Year</h3>
                                    </div>
                                <div className="body_card">
                                    <p>Responsive Design</p>     
                                    <p>Bootstrap  Design</p>
                                    <p>Unlimited Support</p>
                                    <p>Free Trial version</p>
                                    <p>HTML5 CSS3 jQuery</p>
                               </div>
                               <Button variant="outline-primary" className='w-50 mt-1'>Get Now</Button>
                        </div>
                    </div>
                </Col>
                <Col xxl="3" xl="3" lg="3" md="6" sm="12">
                    <div className="main_card">
                        <div className="text-center">
                            <div className="header_card">
                                <h4>Standard</h4>
                                <h3>$20.00 / Year</h3>
                                    </div>
                                <div className="body_card">
                                    <p>Responsive Design</p>     
                                    <p>Bootstrap  Design</p>
                                    <p>Unlimited Support</p>
                                    <p>Free Trial version</p>
                                    <p>HTML5 CSS3 jQuery</p>
                               </div>
                               <Button variant="outline-primary" className='w-50 mt-1'>Get Now</Button>
                        </div>
                    </div>
                </Col>
                <Col xxl="3" xl="3" lg="3" md="6" sm="12">
                    <div className="main_card">
                        <div className="text-center">
                            <div className="header_card">
                                <h4>Advanced</h4>
                                <h3>$15.00 / Year</h3>
                                    </div>
                                <div className="body_card">
                                    <p>Responsive Design</p>     
                                    <p>Bootstrap  Design</p>
                                    <p>Unlimited Support</p>
                                    <p>Free Trial version</p>
                                    <p>HTML5 CSS3 jQuery</p>
                               </div>
                               <Button variant="outline-primary" className='w-50 mt-1'>Get Now</Button>
                        </div>
                    </div>
                </Col>
                <Col xxl="3" xl="3" lg="3" md="6" sm="12">
                    <div className="main_card">
                        <div className="text-center">
                            <div className="header_card">
                                <h4>Mighty</h4>
                                <h3>$15.00 / Year</h3>
                                    </div>
                                <div className="body_card">
                                    <p>Responsive Design</p>     
                                    <p>Bootstrap  Design</p>
                                    <p>Unlimited Support</p>
                                    <p>Free Trial version</p>
                                    <p>HTML5 CSS3 jQuery</p>
                               </div>
                               <Button variant="outline-primary" className='w-50 mt-1'>Get Now</Button>
                        </div>
                    </div>
                </Col>
               </div>
           </div>
           
           
        </section>
    );
};

export default Pricecard;