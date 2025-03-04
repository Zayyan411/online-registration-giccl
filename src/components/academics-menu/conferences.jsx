import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const conferences = [
  {
    title: "Conference on School Education and Impact on Youth",
    date: "May 7th, 2022",
    description: "Department of Education and Faranian Alumni Fraternity",
    image:
      "http://www.giccl.edu.pk/assets/images/educationconference7-5-22-928x800.jpg",
  },
  {
    title: "Chemistry Conference",
    date: "April 1st, 2022",
    description:
      "Chemistry Conference held on April 1st, 2022 in Govt. Islamia Graduate College Civil Lines, Lahore",
    image:
      "http://www.giccl.edu.pk/assets/images/chemistryconference1-4-22-1156x867.jpg",
  },
  {
    title: "Farsi Conference",
    date: "Adabiyat-e-Farsi",
    description:
      "Farsi Conference 'Adabiyat-e-Farsi' was held in Government Islamia Graduate College, Civil Lines, Lahore on March 7th, 2022.",
    image:
      "http://www.giccl.edu.pk/assets/images/farsiconference07-03-22-1280x853.jpg",
  },
  {
    title: "Botany Day",
    date: "Botany Day Celebrations",
    description:
      "Botany Day Celebrations were held at Government Islamia Graduate College, Civil Lines, Lahore on February 17th, 2022,",
    image:
      "http://www.giccl.edu.pk/assets/images/botonyday17-02-22-696x483.jpg",
  },
];

const ConferenceCards = () => {
  return (
    <Container className="mt-4">
      <Row>
        {conferences.map((conf, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <Card.Img variant="top" src={conf.image} />
              <Card.Body>
                <Card.Title>{conf.title}</Card.Title>
                <Card.Subtitle className="mb-2">{conf.date}</Card.Subtitle>
                <Card.Text>{conf.description}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { ConferenceCards };
