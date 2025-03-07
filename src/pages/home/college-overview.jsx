import React from "react";
import { Container } from "react-bootstrap";

const CollegeOverview = () => {
  return (
    <Container
      className="py-5"
      style={{ background: "linear-gradient(to right, #fff9c4, #dcedc8)" }}
    >
      <Container className="text-center">
        <h5 className="fw-bold">AT A GLANCE</h5>
        <h4 className="fw-bold">
          GOVERNMENT ISLAMIA GRADUATE COLLEGE CIVIL LINES, LAHORE
        </h4>
        <p className="mt-3" style={{ fontSize: "1.1rem", color: "#333" }}>
          Govt. Islamia Graduate College Civil Lines, Lahore is one of the first
          ranked institutions of Punjab. Let us have a glance at the past
          history of the college. The history of the Govt. Islamia College Civil
          Lines, Lahore goes back to the last years of the 19th century when the
          Arya Samajists founded the school of Dayanand Ayur Vedic on June 1,
          1886. The huge building of Dayanand Vedic College (DAV College)
          experienced many revolutionary changes in the last two centuries. The
          school started Intermediate classes in 1888 and graduate classes in
          1892 and finally M.A. in 1895. The name of the college was attributed
          to the Hindu leader Swami Dayanand Sarasvati, founder of the Arya
          Samaj movement.
        </p>
      </Container>
    </Container>
  );
};

export { CollegeOverview };
