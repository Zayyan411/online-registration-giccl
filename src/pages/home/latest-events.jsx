import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { eventData } from "./map-data";

const LatestEvents = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-black py-2">Latest Events and News</h2>
      <Row className="gy-4">
        {eventData.map((event) => (
          <Col md={4} key={event.id}>
            <Card className="h-100 shadow-lg border-0">
              <Card.Img
                variant="top"
                src={event.image}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Text className="text-dark">{event.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center ">{event.date}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { LatestEvents };
