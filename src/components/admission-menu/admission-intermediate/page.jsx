import React from "react";
import { AdmissionPolicy } from "./admission-policy";
import { AdmissionSteps } from "./admission-steps";
import { Container } from "react-bootstrap";
import { EducationPrograms } from "./education-program";
import { AdmissionSection } from "./admission-section";

const AdmissionIntermediate = () => {
  return (
    <Container className="py-3 flex gap-3">
      <AdmissionSection />
      <EducationPrograms />
      <AdmissionSteps />
      <AdmissionPolicy />
    </Container>
  );
};

export { AdmissionIntermediate };
