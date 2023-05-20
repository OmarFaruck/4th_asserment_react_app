import React from 'react';
import '../Services/Services.css'
import '../../Responsive/Responsive.css'
// import image1 from '../../images//project1.png'
// import image2 from '../../images//project2.png'
// import image3 from '../../images//project3.png'
// import image4 from '../../images//project4.png'
// import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

import { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [Services, setService] = useState([]);
  useEffect(() => {
    fetch('Services.json')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section id='Services'>
      <div className="container">
        <h1 className="text-center text-dark mt-5 pb-4">Our Services</h1>
        <Row>

          {Services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}

        </Row>
      </div>
    </section>
  );
};

export default Services;