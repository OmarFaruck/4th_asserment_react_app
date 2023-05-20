import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
 import back_img from '../images/contackbackimg.png' 
 import { FaPhoneSquare,FaEnvelopeSquare } from "react-icons/fa";
 import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
 import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/esm/Col';
import '../Registrationpage/Registration.css'
import  '../Responsive/Responsive.css' 
import Form from 'react-bootstrap/Form'; 
import auth from '../../Firebase.init';
import GoogleSingUp from '../GoogleSingUp/GoogleSingUp';
import FaceBookSingUp from '../FaceBookSingUp/FaceBookSingUp';
import GitHubSingUp from '../GitHubSingUp/GitHubSingUp';
import Gmail from '../Gmail/Gmail';
 
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const messegeDiv = document.getElementById('messege-div');
  
  const [
   createUserWithEmailAndPassword,
   user,
   loading,
   error,
 ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification :true});

 if (error) {
   messegeDiv.innerHTML =error;
 
 }
 
 if (loading) {
   messegeDiv.innerHTML =<p>Loading...</p>;
    
 }

 if (user) {
   messegeDiv.innerHTML="Registered User"; 
 }
    return (
        <section id="From" style={{backgroundImage: `url(${back_img})`}}>
        <div className="container">
       
         <div className="row">
         <h1 className='Sing'>Registration here</h1>
          <Col xxl="6" xl="6" lg="6" md="6" sm="12">
          <Form.Group className="mb-3 my-4">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group> 

                <div id='messege-div'></div>
 
            <div className="new_link new">
            <p>already have an account?
                <NavLink className= "nav-link reglink" to="/">sing in.</NavLink> 
                </p>
            </div>


            <Button variant="primary" className="btn text-light w-100 mt-3 mb-3 new" onClick={() => createUserWithEmailAndPassword(email, password)}>Submit</Button>
          </Col>
          <Col xxl="6" xl="6" lg="6" md="6" sm="12">
          
          <div className="information">
          <div className="text-center">
            <h1>Contact Information</h1>
           <div className="con_information">
           <FaPhoneSquare  className='phone'/>
            <p>+8801858927228</p> 
           </div>
           <div className="con_information">
           <FaEnvelopeSquare  className='envelope'/>
            <p>omarfaruck1994@gmial.com</p>  
           </div>
           <span className="text-center fs-4">Or Login With</span> 
           <span><hr/></span>
           <div className="font"> 
           <GoogleSingUp/>
           <FaceBookSingUp/>
            <GitHubSingUp/>
            <Gmail/>
          </div>
          </div>
          </div> 
         </Col>
        </div>
        </div>
      </section>
    );
};

export default Registration;