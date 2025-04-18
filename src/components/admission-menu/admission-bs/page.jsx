import React from "react";
import { Container } from "react-bootstrap";
import { BSProgramSection } from "./bs-section";
import { BSPrograms } from "./bs-program";

const AdmissionBs = () => {
  return (
    <Container fluid className="flex gap-3">
      <BSProgramSection />
      {/* <BSPrograms /> */}
    </Container>
  );
};

export { AdmissionBs };
