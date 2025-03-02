import React from "react";
import { Home } from "./home";
import { ContactUs } from "./contact-us";
import { Container } from "react-bootstrap";
import { About } from "./about";

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <ContactUs />
    </>
  );
};

export { MainPage };
