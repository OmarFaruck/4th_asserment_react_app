import React from 'react';
import {FaGooglePlusSquare} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import '../GoogleSingUp/GoogleSingUp.css'

const GoogleSingUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>User Registered?</p>
          </div>
        );
      }

    return (
        <>
            <Button type="sub" className="w-0" onClick={() =>signInWithGoogle()}><FaGooglePlusSquare  className='Google'/></Button> 
        </>
    );
};

export default GoogleSingUp;