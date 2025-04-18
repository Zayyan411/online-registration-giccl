import React from "react";
import { Container, Card, ListGroup, Badge } from "react-bootstrap";

const MeritLists = () => {
  // Sample data - replace with your actual data
  const meritLists = [
    {
      id: 1,
      name: "Intermediate (F.A / F.Sc / I.Com)",
      status: "Pending",
      schedule: "To be announced",
    },
    {
      id: 2,
      name: "BS Program",
      status: "Pending",
      schedule: "To be announced",
    },
    {
      id: 3,
      name: "MS / M.Phil",
      status: "Pending",
      schedule: "To be announced",
    },
    {
      id: 4,
      name: "MBA / E.MBA",
      status: "Pending",
      schedule: "To be announced",
    },
    { id: 5, name: "Diplomas", status: "Pending", schedule: "To be announced" },
    {
      id: 6,
      name: "Certificates",
      status: "Pending",
      schedule: "To be announced",
    },
    { id: 7, name: "Hostels", status: "Pending", schedule: "To be announced" },
  ];

  return (
    <Container className="my-5">
      <Card>
        <Card.Header
          style={{
            background: "#036674",
          }}
          className="text-white"
        >
          <h2 className="mb-0">MERIT LISTS</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Merit List will be uploaded as per Admissions schedule.
          </Card.Text>

          <ListGroup variant="flush">
            {meritLists.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.name}</h5>
                  <small className="text-muted">
                    Schedule: {item.schedule}
                  </small>
                </div>
                <Badge
                  pill
                  bg={item.status === "Available" ? "success" : "warning"}
                >
                  {item.status}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">
          Last updated: {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export { MeritLists };
