import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BSPrograms = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <div className="text-center">
                  <img
                    src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
                    alt="College Logo"
                    width="80"
                    className="mb-3"
                  />
                  <h3 className="fw-bold text-primary">BS FIRST SEMESTER</h3>
                  <p className="text-muted">
                    Eligibility: FA/FSc./I.Com 2nd Division
                  </p>
                </div>

                <Row>
                  {/* Morning Programs */}
                  <Col md={6}>
                    <Card className="border-0">
                      <Card.Body
                        className="text-white"
                        style={{ background: "#5a189a", borderRadius: "10px" }}
                      >
                        <h5 className="fw-bold text-warning">
                          Morning Programs
                        </h5>
                        <ul className="list-unstyled">
                          {[
                            "Botany",
                            "BSCS",
                            "Chemistry",
                            "Economics",
                            "English",
                            "History",
                            "IT",
                            "Islamic Studies",
                            "Mathematics",
                            "Physics",
                            "Pol. Sc.",
                            "Psychology",
                            "Punjabi",
                            "Statistics",
                            "Urdu",
                            "Zoology",
                          ].map((program, index) => (
                            <li key={index} className="fw-bold">
                              {index + 1}. {program}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Evening Programs */}
                  <Col md={6}>
                    <Card className="border-0">
                      <Card.Body
                        className="text-white"
                        style={{ background: "#1d3557", borderRadius: "10px" }}
                      >
                        <h5 className="fw-bold text-warning">
                          Evening Programs
                        </h5>
                        <ul className="list-unstyled">
                          {[
                            "BBA",
                            "B.Com.",
                            "Botany",
                            "BSCS",
                            "Chemistry",
                            "English",
                            "IT",
                            "Mass Media Studies",
                            "Mathematics",
                            "Physics",
                            "Zoology",
                          ].map((program, index) => (
                            <li key={index} className="fw-bold">
                              {index + 1}. {program}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  <p className="fw-bold text-danger">
                    Admission to the 5th Semester for ADP is also available.
                  </p>
                  <p className="text-muted">
                    Admissions in ADP for History, English, and Physics are also
                    available.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { BSPrograms };
