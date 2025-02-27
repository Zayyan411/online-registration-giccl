import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <Row className="my-3">
      <Col md={6} className="d-flex flex-column gap-2 p-4 shadow-lg rounded-2">
        <h2 className="text-black fs-1">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus a sint similique nobis ea odio reiciendis id incidunt
          magnam provident exercitationem possimus sunt laborum tempora,
          pariatur eaque ut dolorum autem, repellendus eos. Accusantium nostrum
          sunt vel amet, eligendi iste assumenda saepe enim adipisci officia
          quidem tenetur labore ad consectetur voluptas? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Incidunt rem accusamus deleniti
          quia numquam itaque quam, facilis commodi optio ducimus consequatur
          reiciendis temporibus natus eos, eius velit pariatur id cupiditate.
        </p>
        <div>
          <Button size="1" className="" style={{ background: "#036674" }}>
            View More
          </Button>
        </div>
      </Col>
      <Col md={6}>
        <img
          src="http://www.giccl.edu.pk/assets/images/1.jpg"
          alt=""
          className="w-100 h-100 max-w rounded-3"
        />
      </Col>
    </Row>
  );
};

export { About };
