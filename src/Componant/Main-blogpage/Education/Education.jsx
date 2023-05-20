import React from 'react';
import '../Education/Education.css'
import '../../Responsive/Responsive.css'
import back_img from '../../images/education_header.jfif' 
const Education = () => {
    return (
        <section id="education" style={{backgroundImage: `url(${back_img})`}}>
             <div className="container">
                <div className="text-center">
                  <h3 className="EDUCATION">EDUCATION IS THE ONE THING,NO ONE CAN TAKE AWAY FROM YOU.</h3>
                  <h5 className="Endless">Endless Education is Providing <span className='span'>"Education Counselling and Academic Advisory"</span> </h5>
                 <a href="#GLOBAL"><button className="Visit">Visit us to know more</button></a>
              </div>
              </div>
          </section>
    );
};

export default Education;