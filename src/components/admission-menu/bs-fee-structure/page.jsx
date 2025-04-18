import React from "react";
import { Accordion, Table, Card } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { fines, footnotes, programGroups, rules } from "./data";

const FeeRules = () => {
  return (
    <div className="container my-4">
      <h4>
        <strong>Undergraduate / Postgraduate</strong>
      </h4>
      <Accordion defaultActiveKey="0" className="mt-3" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Fee / Dues: Rules & Regulations</Accordion.Header>
          <Accordion.Body>
            {rules.map((rule, idx) => (
              <p key={idx}>
                <BsCheckCircleFill className="text-primary me-2" />
                {rule}
              </p>
            ))}

            <Table striped bordered hover responsive className="mt-4">
              <thead className="table-dark text-white">
                <tr>
                  <th>Sr. No.</th>
                  <th>Period</th>
                  <th>Fine (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {fines.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.period}</td>
                    <td>{item.fine}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {footnotes.map((note, idx) => (
              <p key={idx}>
                <BsCheckCircleFill className="text-primary me-2" />
                {note}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>University Programs</Accordion.Header>
          <Accordion.Body>
            {programGroups.map((group, index) => (
              <Card key={index} className="mb-3">
                <Card.Header>
                  <Accordion.Button
                    as={Card.Header}
                    eventKey={`program-group-${index}`}
                    className="p-0 border-0 bg-transparent"
                  >
                    <h5 className="mb-0 w-100 text-start p-3">{group.title}</h5>
                  </Accordion.Button>
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Program Name</th>
                        <th>1st Semester Fee</th>
                        <th>2nd Semester Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.programs.map((program, idx) => (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{program}</td>
                          <td>{group.semester1Fee}</td>
                          <td>{group.semester2Fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export { FeeRules };
