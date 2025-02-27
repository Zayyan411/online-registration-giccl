import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { LinkRouter } from "../comon";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="bg-black p-3 py-5">
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
          <h2 className="text-white">Quick Links</h2>
          <Stack gap="2">
            <LinkRouter path="/home" title="Home" className="text-white" />
            <LinkRouter path="" title="About" className="text-white" />
            <LinkRouter path="" title="Admission" className="text-white" />
            <LinkRouter
              path="/contact-us"
              title="Contact us"
              className="text-white"
            />
          </Stack>
        </Col>
        <Col className="d-flex flex-column">
          <h2 className="text-white">Connect with us</h2>
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
  );
};

export { Footer };
