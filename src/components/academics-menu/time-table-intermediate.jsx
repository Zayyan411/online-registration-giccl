import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const TimeTableIntermediateData = [
  {
    image:
      "http://www.giccl.edu.pk/assets/images/faranian-2022-sep-to-dec-2022-final-curved-cdr-21-8-2-632x473.jpg",
  },
  {
    image:
      "http://www.giccl.edu.pk/assets/images/faranian-2022-sep-to-dec-2022-final-curved-cdr-21-9-2-632x473.jpg",
  },
  {
    image: "http://www.giccl.edu.pk/assets/images/t-1-1-632x473.jpg",
  },
  {
    image:
      "http://www.giccl.edu.pk/assets/images/time-table-eve-2nd-768x1024.jpeg",
  },
];

const TimeTableIntermediate = () => {
  return (
    <Container>
      <Row className="align-align-items-center justify-content-center g-3 p-2">
        {TimeTableIntermediateData.map((inter, index) => (
          <Col key={index} md={6} className="mb-4">
            <img src={inter.image} alt={inter.image} className="w-100 h-auto" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { TimeTableIntermediate };
