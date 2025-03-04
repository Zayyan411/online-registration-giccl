import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const TimeTableBsData = [
  {
    image: "http://www.giccl.edu.pk/assets/images/mbr-1836x1836.jpg",
  },
];

const TimeTableBs = () => {
  return (
    <Container>
      <Row className="align-align-items-center justify-content-center g-3 p-2">
        {TimeTableBsData.map((inter, index) => (
          <Col key={index} md={6} className="mb-4">
            <img src={inter.image} alt={inter.image} className="w-100 h-auto" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { TimeTableBs };
