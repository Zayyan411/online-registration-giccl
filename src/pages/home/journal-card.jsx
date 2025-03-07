import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const JournalCard = () => {
  return (
    <Container className="my-4">
      <Card
        className="text-white"
        style={{
          backgroundColor: "#f27272",
          padding: "30px",
        }}
      >
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="http://www.giccl.edu.pk/assets/images/mbr-1076x717.jpg"
              alt="Stack of books"
              className="img-fluid"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Col>

          <Col md={6}>
            <h4 className="fw-bold">
              Pakistan Journal of Emerging Science and Technologies (PJEST)
            </h4>
            <p>
              Pakistan Journal of Emerging Sciences and Technologies (PJEST) by
              Govt. Islamia Graduate College Civil Lines, Lahore Pakistan is
              licensed under a Creative Commons Attribution-ShareAlike 4.0
              International License.
            </p>
            <p>
              Feel free to contact us for any questions and queries:
              <br />
              <strong>Email:</strong> managingeditor@pjest.com
            </p>
            <Button variant="light" className="fw-bold">
              Visit
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export { JournalCard };
