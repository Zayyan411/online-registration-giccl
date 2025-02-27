import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkRouter } from "../comon";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container className="bg-black">
        <Navbar.Brand href="/home">
          <div className="d-flex align-items-center gap-2">
            <img
              src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
              alt="Logo"
              width="50px"
              height="50px"
            />
            <span className="fs-5 fw-bolder text-white">GIGCCL</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            <LinkRouter
              path="/home"
              title="Home"
              className="text-white fw-bold"
            />
            <LinkRouter
              path="/about"
              title="About"
              className="text-white fw-bold"
            />
            <LinkRouter
              path="/admission-form"
              title="Admission"
              className="text-white fw-bold"
            />
            <LinkRouter
              path="/blog"
              title="Blog"
              className="text-white fw-bold"
            />
            <LinkRouter
              path="/contact-us"
              title="Contact us"
              className="text-white fw-bold"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
