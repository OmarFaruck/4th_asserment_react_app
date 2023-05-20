import React from 'react';
import '../Facility/Facility.css'
import '../../Responsive/Responsive.css'
import image1 from '../../images/FACILITIES-1.png'
import image2 from '../../images/FACILITIES-2.png'
import image3 from '../../images/FACILITIES-3.png'
const Facility = () => {
    return (
        <section id="ourfacilities">
        <div className="container">
         <div className="text-center">
           <h1>OUR FACILITIES</h1>
           <p> The future will build on 
             this emerging technology and take us to new heights in terms 
             of integration of learning -- with computers, with 
             telecommunications, with virtual reality, and with the 
             community as a whole (Lackney 2001). For example, picture 
             a teenager, let’s call her Savannah, waking up on October 15, 
             2055. She washes down her nutritional, but artificially 
             engineered, breakfast bar with synthesized orange juice, and 
             heads for her learning capsule. The capsule, located in 
             family’s communication center off the den, is a fully learning center. Through state-of-the-art 
             telecommunication interfaces, she has access to the best 
             teachers in the nation and, in some cases, the world</p>
         </div>
         <div className="row"> 
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
           <div className="text-center">
             <img src={image1} className="img-fluid rounded mx-auto" alt="..."/>
            <div className="world_class">
             <h3>world class library</h3> 
             <h6>Regardless of our roles in society, each of us will be 
               affected by what happens in the field of education in the 
               coming decades. it may well relate to the quality of our employees and, thus, 
               our chances for business.</h6>
            </div>
           </div>
          </div>  
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
           <div className="text-center">
             <img src={image2} className="img-fluid rounded mx-auto" alt="..."/>
             <div className="world_class">
             <h3>world class basketball</h3>
             <h6>The knowledge gained, the work habits developed, and even the moral values learned by 
               today’s students in our schools will, for every American, at 
               least partially determine the future efficacy of our health.</h6>
           </div>
           </div>
          </div>  
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
           <div className="text-center">
             <img src={image3} className="img-fluid rounded mx-auto" alt="..."/>
             <div className="world_class">
           <h3>world tasty health food</h3>
           <h6>this paper presents both 
             possibilities and critical issues related to what the future holds 
             for the field of education and the facilities that house it. This is 
             done with the hope that, regardless of one’s role or position.</h6>
           </div>
           </div>
          </div>  
         </div>
        </div>
      </section>
    );
};

export default Facility;