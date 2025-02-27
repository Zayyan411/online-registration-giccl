import React from "react";
import GoogleMap from "./google-map";
import { Col, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Row className=" mb-3">
      <Col md={6} className="d-flex flex-column gap-4 p-4 shadow-lg rounded-2">
        <h2 className="text-black fs-2">Contact Us</h2>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-start gap-3">
            <i class="bi bi-telephone" style={{ fontSize: "20px" }}></i>
            <div className="d-flex flex-column gap-0">
              <h3 className="fs-5 fw-bolder">Phone</h3>
              <p className="fs-6 ">042-99210676</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <i class="bi bi-envelope" style={{ fontSize: "20px" }}></i>
            <div className="d-flex flex-column gap-0">
              <h3 className="fs-5 fw-bolder">Email</h3>
              <p>giccllahore@gmail.com</p>
            </div>
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
