 import React from 'react';
import NavLink from 'react-bootstrap/esm/NavLink'; 
import { IoMdTrophy,IoMdDesktop } from "react-icons/io";
import { HiTv } from "react-icons/hi2";
import { IoLogoWindows } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import '../../Responsive/Responsive.css'
import '../Ourcourses/Ourcourses.css'
import Col from 'react-bootstrap/esm/Col';
 
 const Ourcourses = () => {
    return (
        <section id="callaction">
            <div className="container"> 
                    <div className="aligncenter">
                        <h1>Our Featured Courses</h1>
                        <p>This course will support leaders at the every stage of their management journey. It will help you identify and address negative thought and behaviour patterns that undermine your confidence, and help you to develop your own leadership style and behaviours.Through this course, you will be empowered to recognise negative behaviours and leadership anxiety, and provided with the tools to help overcome these hurdles as and when they arise.</p>
                    </div>
                    <div className="Course pt-4">
                    <div className="row">
                    <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                        <div className="card mx-auto">
                        <span className="icons1"><IoMdTrophy/> </span> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                        </div>
                        </div>
                    </Col>
                    <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                        <div className="card mx-auto">
                        <span className="icons2"><HiTv/></span> 
                        <div className="card-body text-center">
                            <h5 className="card-title">UI Design</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                        </div>
                        </div>
                    </Col>
                    <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                        <div className="card mx-auto">
                        <span className="icons3"><IoMdDesktop/></span> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Interaction</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                        </div>
                        </div>
                    </Col>
                    <Col xxl="3" xl="3" lg="6" md="6" sm="12" className='pb-3'>
                        <div className="card mx-auto">
                        <span className="icons4"><IoLogoWindows/></span>
                        <div className="card-body text-center">
                            <h5 className="card-title">User Experiance</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink href="#"><Button className='courses_btn'>Go somewhere</Button></NavLink>
                        </div>
                        </div>
                    </Col>
                    
                    </div>
                    </div> 
            </div>  
        </section>
    );
 };
 
 export default Ourcourses;