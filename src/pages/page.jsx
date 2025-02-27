import React from "react";
import { Home } from "./home";
import { ContactUs } from "./contact-us";
import { Container } from "react-bootstrap";

const MainPage = () => {
  return (
    <Container fluid className="d-flex flex-column gap-3">
      <Home />
      <ContactUs />
    </Container>
  );
};

export { MainPage };
