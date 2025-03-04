import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationPrograms = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center text-black py-2 rounded">
        Intermediate Subject Combinations
      </h2>
      <div className="w-50">
        <img
          src="http://www.giccl.edu.pk/assets/images/comb14-1300x863.jpg"
          alt=""
          className="w-100 h-h-auto "
        />
      </div>
    </Container>
  );
};

export { EducationPrograms };
