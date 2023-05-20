 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componant/Header/Header';
import Footer from './Componant/Footer/Footer';   
import Homepage from './Componant/Mainhomepage/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Aboutpage from './Componant/Main-aboutpage/Aboutpage/Aboutpage';
import Coursepage from './Componant/Main-coursespage/Coursepage/Coursepage';
import Blogpage from './Componant/Main-blogpage/Blogpage/Blogpage';
import Pricingpage from './Componant/Main-pricingpage/Pricingpage/Pricingpage';
import Errorpage from './Componant/Errorpage/Errorpage';
import Registration from './Componant/Registrationpage/Registration';
import RequireAuth from './Componant/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App"> 
      <Header/>  

      <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/about" element={<Aboutpage />} /> 
      <Route path="/courses" element={<Coursepage />} /> 
      <Route path="/blog" element={

          <RequireAuth> 
          <Blogpage />
          </RequireAuth>
 
      } /> 

      <Route path="/pricing" element={

         <RequireAuth> 
         <Pricingpage />
         </RequireAuth>
      
      } />   
      <Route path="/registration" element={<Registration />} />   
    
      <Route path="*" element={<Errorpage />} />   
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
