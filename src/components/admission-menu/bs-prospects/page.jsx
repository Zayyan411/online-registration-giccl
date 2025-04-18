import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BsPropectus = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "60vh",
          backgroundImage: "url(/path-to-your-banner-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 40,
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          GCU Press
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50%",
            background:
              "linear-gradient(to right, maroon 40%, gold 50%, navy 100%)",
            clipPath: "polygon(0 100%, 100% 30%, 100% 100%, 0% 100%)",
            opacity: 0.8,
          }}
        />
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>GIGCCL PROSPECTUS</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  GIGCCL University is one of the leading institutions of higher
                  learning in Pakistan. Every year, thousands of applicants from
                  here and abroad apply for admission to under- and
                  post-graduate programs. The Prospectus contains a detailed
                  description of all the departments, facilities, and courses
                  offered. Also, much sought-after information such as admission
                  process, accommodations, etc. is also given.
                </Card.Text>
                <Card.Img
                  variant="bottom"
                  src="/path-to-prospectus-cover.jpg"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { BsPropectus };
