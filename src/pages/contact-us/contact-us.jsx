import React from "react";
import GoogleMap from "./google-map";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container fluid>
      <Row className="p-3 mb-3">
        <Col md={6} className="d-flex flex-column gap-4">
          <h2 className="text-black">Contact Us</h2>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-start gap-3">
              <i class="bi bi-telephone" style={{ fontSize: "20px" }}></i>
              <div className="d-flex flex-column gap-1">
                <h3>Phone</h3>
                <p>042-99210676</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <i class="bi bi-envelope" style={{ fontSize: "20px" }}></i>
              <div className="d-flex flex-column gap-1">
                <h3>Email</h3>
                <p>giccllahore@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <GoogleMap />
        </Col>
      </Row>
    </Container>
  );
};

export { ContactUs };
