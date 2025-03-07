import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { LinkRouter } from "../comon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ background: "#036674" }}>
      <Container>
        <Row className="py-5 p-3">
          <Col className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-2">
              <img
                src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
                alt=""
                width="50px"
                height="50px"
                className="rounded-5"
              />
              <span className="fs-5 text-white fw-bolder">GIGCCL</span>
            </div>
            <Stack gap="2">
              <LinkRouter
                path="/home"
                title="University of the Punjab"
                className="text-white"
              />
              <LinkRouter path="" title="BISE Lahore" className="text-white" />
            </Stack>
          </Col>
          <Col>
            <h2 className="text-white fs-4">Quick Links</h2>
            <Stack gap="2">
              <LinkRouter path="/about" title="About" className="text-white" />
              <LinkRouter path="" title="Admission" className="text-white" />
              <LinkRouter
                path="/contact-us"
                title="Contact us"
                className="text-white"
              />
            </Stack>
          </Col>
          <Col>
            <h2 className="text-white fs-4">Culture Day</h2>
            <LinkRouter
              path="/"
              title="Culture Day Events"
              className="text-white"
            />
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="text-white fs-4">Connect with us</h2>
            <h6 className="text-white">
              H8F3+33M Library, St Nagar, Lahore, 54000
            </h6>
            <div className="d-flex gap-3">
              <LinkRouter className="text-white">
                <i class="bi bi-facebook"></i>
              </LinkRouter>
              <LinkRouter className="text-white">
                <i class="bi bi-instagram "></i>
              </LinkRouter>
              <LinkRouter className="text-white">
                <i class="bi bi-twitter "></i>
              </LinkRouter>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Footer };
