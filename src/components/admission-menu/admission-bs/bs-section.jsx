import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const BSProgramSection = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h4 className="fw-bold fs-2">BS FOUR YEAR PROGRAMME</h4>
            <p className="fs-5 fw-medium " style={{ maxWidth: "500px" }}>
              The College offers a unique range of BS 4 Year Programs designed
              to provide students a strong base for their academic and
              professional careers.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="http://www.giccl.edu.pk/assets/images/main-image-1-595x264.jpg"
              alt="Government Islamia Graduate College"
              className="w-100 h-auto"
            />
            <p className="mt-2 fw-semibold">
              GOVERNMENT ISLAMIA GRADUATE COLLEGE, CIVIL LINES, LAHORE
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { BSProgramSection };
