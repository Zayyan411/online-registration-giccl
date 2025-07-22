import React, { useState } from "react";
import { Accordion, Card, Table, Form } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { fines, footnotes, programGroups, rules } from "./data";

const FeeRules = () => {
  const [shift, setShift] = useState("Morning");
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
            <Form className="mb-3 d-flex gap-3">
              {["Morning", "Evening"].map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  id={`radio-${option}`}
                  label={<span>{option}</span>}
                  name="shift"
                  value={option}
                  checked={shift === option}
                  onChange={(e) => setShift(e.target.value)}
                />
              ))}
            </Form>

            {programGroups.map((group, index) => {
              const fees = group.shiftFees[shift];
              return (
                <Card key={index} className="mb-3">
                  <Card.Header>
                    <h5 className="mb-0 w-100 text-start p-3">{group.title}</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Program Name</th>
                          <th>1st Semester</th>
                          <th>2nd Semester</th>
                          <th>3rd Semester</th>
                          <th>4th Semester</th>
                          <th>5th Semester</th>
                          <th>6th Semester</th>
                          <th>7th Semester</th>
                          <th>8th Semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.programs.map((program, idx) => (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{program}</td>
                            <td>{fees.semester1Fee}</td>
                            <td>{fees.semester2Fee}</td>
                            <td>{fees.semester3Fee}</td>
                            <td>{fees.semester4Fee}</td>
                            <td>{fees.semester5Fee}</td>
                            <td>{fees.semester6Fee}</td>
                            <td>{fees.semester7Fee}</td>
                            <td>{fees.semester8Fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export { FeeRules };
