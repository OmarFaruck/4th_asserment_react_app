import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import back_img from '../../images/contackbackimg.png'
//  import back_img from '../../images/contackimg.png' 
import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../Responsive/Responsive.css'
import '../From/From.css'
import Col from 'react-bootstrap/esm/Col';
import auth from '../../../Firebase.init';
import FaceBookSingUp from '../../FaceBookSingUp/FaceBookSingUp';
import GoogleSingUp from '../../GoogleSingUp/GoogleSingUp';
import GitHubSingUp from '../../GitHubSingUp/GitHubSingUp';
import Gmail from '../../Gmail/Gmail';

const From = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const messegeDiv = document.getElementById('messege-div');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    messegeDiv.innerHTML = error;

  }

  if (loading) {
    messegeDiv.innerHTML = <p>Loading...</p>;

  }

  if (user) {
    messegeDiv.innerHTML = "User Singin successfully";
  }

  return (
    <section id="From" style={{ backgroundImage: `url(${back_img})` }}>
      <div className="container">

        <div className="row">
          <h1 className='Sing'>Sing In here</h1>
          <Col xxl="6" xl="6" lg="6" md="6" sm="12">
            <Form.Group className="mb-3 my-4">
              <Form.Label className='text-light'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <div id='messege-div'></div>

            <div className="new_link new">
              <p className="nav-link reglink">New user? <NavLink to="/registration">registration.</NavLink></p>
            </div>


            <Button className="btn text-light w-100 mt-3 mb-3 submit" onClick={() => signInWithEmailAndPassword(email, password)}>Submit</Button>
          </Col>
          <Col xxl="6" xl="6" lg="6" md="6" sm="12">

            <div className="information">
              <div className="text-center">
                <h1>Contact Information</h1>
                <div className="con_information">
                  <FaPhoneSquare className='phone' />
                  <p>+8801858927228</p>
                </div>
                <div className="con_information">
                  <FaEnvelopeSquare className='envelope' />
                  <p>omarfaruck1994@gmial.com</p>
                </div>
                <span className="text-center fs-4">Or Login With</span>
                <span><hr /></span>
                <div className="font">

                  <GoogleSingUp />
                  <FaceBookSingUp />
                  <GitHubSingUp />
                  <Gmail />

                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default From;