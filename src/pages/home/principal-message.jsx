import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const PrincipalMessage = () => {
  return (
    <Container className="py-5">
      <Card
        className="p-4 border-0"
        style={{ background: "linear-gradient(to right, #fdecec, #fde9e9)" }}
      >
        <Row className="align-items-center">
          <Col md={8}>
            <h3 className="fw-bold">Principal’s Message</h3>
            <p>
              Keeping in view the challenges posed to man by emerging trends of
              the present millennium, we have introduced a system of education
              that is based on the lines and parameters of modern approaches in
              the field of science and education. The basic purpose of the
              college is to provide the students the opportunities for quality
              education at an affordable cost and to groom them in a
              well-disciplined environment.
            </p>
            <p>
              Our goal is to work collaboratively with students, their parents,
              and society to implement effective strategies that ensure the
              creation of a safe yet effective learning environment for our
              nation builders. I envision a scintillating future for this
              college and wish it great colors in the times to come.
            </p>
            <p className="fst-italic">
              Welcome to Islamia Graduate College Civil Lines, Lahore
            </p>
            <p className="fw-bold">
              Professor Dr. Akhtar Hussain Sandhu <br />
              Principal
            </p>
            <Button variant="danger" className="fw-bold">
              Read More
            </Button>
          </Col>

          <Col md={4} className="text-center">
            <img
              src="http://www.giccl.edu.pk/assets/images/faranian-2022-sep-to-dec-2022-final-curved-cdr-21-1-1-695x1038.jpeg"
              alt="Principal"
              className="img-fluid rounded"
              style={{
                border: "4px solid white",
                backgroundColor: "#4b2766",
              }}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export { PrincipalMessage };
