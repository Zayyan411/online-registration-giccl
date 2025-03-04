import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const DepartmentSection = () => {
  const departments = [
    "DEPARTMENT OF ARABIC",
    "DEPARTMENT OF BOTANY",
    "DEPARTMENT OF CHEMISTRY",
    "DEPARTMENT OF COMMERCE",
    "DEPARTMENT OF COMPUTER SCIENCE",
    "DEPARTMENT OF ECONOMICS",
    "DEPARTMENT OF EDUCATION",
    "DEPARTMENT OF ENGLISH LANGUAGE & LITERATURE",
    "DEPARTMENT OF GEOGRAPHY",
    "DEPARTMENT OF HISTORY",
    "DEPARTMENT OF ISLAMIAT",
    "DEPARTMENT OF LIBRARY & INFORMATION SCIENCE",
    "DEPARTMENT OF MATHEMATICS",
    "DEPARTMENT OF PERSIAN",
  ];

  return (
    <Container className="mt-4">
      <h2>Departments</h2>
      <ListGroup variant="flush">
        {departments.map((dept, index) => (
          <ListGroup.Item key={index} className="fw-bold">
            {dept}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export { DepartmentSection };
