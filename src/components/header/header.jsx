import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkRouter } from "../comon";
import { Dropdown, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="/home">
          <div className="d-flex align-items-center gap-2">
            <img
              src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
              alt="Logo"
              width="50px"
              height="50px"
              className="rounded-5"
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
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/departments">
                  <LinkRouter
                    path="/department"
                    title="Departments"
                    className="fw-bold"
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
