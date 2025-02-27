import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LinkRouter } from "../comon";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center gap-2">
            <img
              src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
              alt=""
              width="50px"
              height="50px"
            />
            <span className="fs-5 fw-bolder">GIGCCL</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-5">
            <LinkRouter path="/home" title="Home" />
            <LinkRouter path="/about" title="About" />
            <LinkRouter path="/admission-form" title="Admission" />
            <LinkRouter path="/blog" title="Blog" />
            <LinkRouter path="/contact-us" title="Contact us" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
