import React from 'react';
import Col from 'react-bootstrap/esm/Col';
const Service = ({ item }) => {
  return (
    <Col xxl="6" xl="6" lg="6" md="6" sm="12">
      <div className="text-center">
        <img src={item.img} className="img-fluid mx-auto d-block rounded" alt="..." />
        <div className="service_text">
          <h4>{item.subtext}</h4>
          <p>{item.maintext}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;