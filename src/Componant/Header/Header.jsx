import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Image from '.././images/logo.png' 
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import '../Header/Header.css';  
import '../Responsive/Responsive.css'  
const Header = () => {

  const [user] = useAuthState(auth);
  // console.log(user);

  //Sing out function
  const handleSingOut=()=>{
  signOut(auth);
  } 

    return (
    <header className="header">
      <Navbar bg="navber" variant="dark" expand="lg">
       <Container>
           <Navbar.Brand>
             <img src={Image} className="img-fluid mx-auto logo" alt=''/>
           </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav p-2">
                 <Nav className="ms-auto py-2 m-1 fw-bolder fs-5">
                 <NavLink className= "nav-link" to="/">Home</NavLink>
                 <NavLink className= "nav-link" to="/about">About Us</NavLink> 
                 <NavLink className= "nav-link" to="/courses">Courses</NavLink>   
                 <NavLink className= "nav-link" to="/blog">Blog</NavLink>   
                 <NavLink className= "nav-link" to="/pricing">Pricing</NavLink>  

                 {user ? (
                <Button className= "btn sing_out" onClick={handleSingOut}>sing out</Button> 
                ) : (

                  <NavLink className= "nav-link sing_in" to="/">sing in</NavLink> 
                )
              }

               </Nav>
             </Navbar.Collapse>
       </Container>
    </Navbar>
    </header>
);
};

export default Header;