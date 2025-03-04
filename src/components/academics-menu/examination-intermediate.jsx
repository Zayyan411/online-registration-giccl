import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ExaminationIntermediateData = [
  {
    image:
      "http://www.giccl.edu.pk/assets/images/whatsapp-image-2023-02-17-at-11.05.19-am-834x1280.jpg",
  },
  {
    image:
      "http://www.giccl.edu.pk/assets/images/whatsapp-image-2023-02-17-at-11.05.20-am-1-884x1280.jpg",
  },
];

const ExaminationIntermediate = () => {
  return (
    <Container>
      <Row className="align-align-items-center justify-content-center g-3 p-2">
        {ExaminationIntermediateData.map((inter, index) => (
          <Col key={index} md={6} className="mb-4">
            <img
              src={inter?.image}
              alt={inter?.image}
              className="w-100 h-auto"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { ExaminationIntermediate };
