import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ExaminationBsData = [
  {
    image: "http://www.giccl.edu.pk/assets/images/mbr-1836x1836.jpg",
  },
];

const ExaminationBs = () => {
  return (
    <Container>
      <Row className="align-align-items-center justify-content-center g-3 p-2">
        {ExaminationBsData.map((inter, index) => (
          <Col key={index} md={6} className="mb-4">
            <img src={inter.image} alt={inter.image} className="w-100 h-auto" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { ExaminationBs };
