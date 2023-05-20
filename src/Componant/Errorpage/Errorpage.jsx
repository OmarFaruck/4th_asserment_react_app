import React from 'react';
import '../Errorpage/Errorpage.css'
const Errorpage = () => {
    return (
        <section className="error-area error-one">
        <div className="container">
           <div className="row justify-content-center">
              <div className="col-xxl-7 col-xl-8 col-lg-8">
                 <div className="error-content text-center">
                    <span className="error-404">404</span>
                    <h5 className="sub-title">Page Not Found</h5>  
                 </div> 
              </div>
           </div> 
        </div> 
     </section>
    );
};

export default Errorpage;