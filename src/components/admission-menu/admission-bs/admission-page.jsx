import React from "react";
import {
  Container,
  Card,
  Button,
  ListGroup,
  Badge,
  Accordion,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdmissionsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Container className="my-5">
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="bg-light">
          <h1
            style={{
              color: "#036674",
            }}
          >
            ADMISSIONS
          </h1>
          <Card.Text className="lead">
            All the information that you will need to apply to GIGCCL for
            academic programs can be found here. Feel free to contact the
            Registrar Office with any questions you may still have. We wish you
            the best of luck in your pursuit of your course/degree programs at
            GIGCCL University, Lahore.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Intermediate Admissions Section */}
      <Card className="mb-4" style={{ border: "1px solid #036674" }}>
        <Card.Header style={{ background: "#036674" }} className="text-white">
          <h2 className="mb-0">BS ADMISSIONS 2025 - ONLY FOR BOYS</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            The last date to apply for admission in BS/BSC has been extended
            till 23rd of April, 2025.
          </Card.Text>

          <div className="d-flex flex-wrap gap-3 mb-3">
            <Button variant="success" size="lg" onClick={handleClick}>
              Apply Online
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              as="a"
              href="https://applyonline.giccl.edu.pk/resources/downloads/GIGCCL_PROSPECTUS_2023-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Prospectus
            </Button>
          </div>

          <div className="alert alert-warning d-flex align-items-center">
            <div className="me-2">☑</div>
            <div>Please ensure all documents are ready before applying</div>
          </div>
        </Card.Body>
      </Card>

      {/* Additional Information Sections */}
      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="mb-0">
              Advertisement of Intermediate (BS/BSC) Admission 2025
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Details about the intermediate admissions advertisement would
              appear here.
            </p>
            <Button variant="outline-secondary">View Advertisement</Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="mb-0">
              Eligibility Criteria for Intermediate (BS/BSC) Admissions 2025
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Minimum 60% marks in Matriculation
              </ListGroup.Item>
              <ListGroup.Item>Science group for FSc</ListGroup.Item>
              <ListGroup.Item>Arts group for FA</ListGroup.Item>
              <ListGroup.Item>Commerce group for ICom</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="mb-0">
              Schedule of Trials for Co-Curricular Activities
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Trial dates and requirements for co-curricular activities would be
              listed here.
            </p>
            <Badge bg="info" className="me-2">
              Coming Soon
            </Badge>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4 className="mb-0">Schedule of Trials for Sports Admissions</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>Trial dates and sports categories would be listed here.</p>
            <Badge bg="info" className="me-2">
              Coming Soon
            </Badge>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Contact Information */}
      <Card className="border-info">
        <Card.Header className="bg-info text-white">
          <h3 className="mb-0">Contact Registrar Office</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Email:</strong> giccllahore@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone:</strong> 042-9921067, 042-99212477
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Address:</strong> H8F3+33M Library, St Nagar, Lahore,
              54000
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { AdmissionsPage };
