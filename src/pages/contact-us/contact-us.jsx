import React from "react";
import GoogleMap from "./google-map";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Row className="bg-info p-3">
      <Col md={6} className="gap-2">
        <h1 className="text-white">Contact Us</h1>
        <div className="d-flex align-items-start gap-2">
          <i class="bi bi-telephone"></i>
          <div className="d-flex flex-column gap-2">
            <h2>Phone</h2>
            <p>042-99210676</p>
          </div>
        </div>
        <div className="d-flex align-items-start gap-2">
          <i class="bi bi-envelope" className=""></i>
          <div className="d-flex flex-column gap-2">
            <h2>Email</h2>
            <p>giccllahore@gmail.com</p>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <GoogleMap />
      </Col>
    </Row>
  );
};

export { ContactUs };
