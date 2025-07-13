import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkRouter } from "../comon";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu } from "./drop-down";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar
      expand="lg"
      style={{
        background: "#036674",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Dropdown>
              <Dropdown.Toggle
                style={{ background: "transparent", border: "unset" }}
                id="dropdown-basic"
              >
                Admission
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="inter-admission"
                  className="text-black fw-bold"
                >
                  Intermediate
                </Dropdown.Item>

                <Dropdown.Item
                  as={Link}
                  to="/bs-admission"
                  className="text-black fw-bold"
                >
                  Bs
                </Dropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/bs-prospectus"
                  className="text-black fw-bold"
                >
                  Propectus
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/bs-fees"
                  className="text-black fw-bold"
                >
                  Fee structure
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/merit-list"
                  className="text-black fw-bold"
                >
                  Merit List
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <LinkRouter
              path="/about"
              title="About"
              className="text-white fw-bold"
            />
            <Dropdown>
              <Dropdown.Toggle
                style={{ background: "transparent", border: "unset" }}
                id="dropdown-basic"
              >
                Academics
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <LinkRouter
                    path="/departments"
                    title=" Departments"
                    className="text-black fw-bold"
                  />
                </Dropdown.Item>
                <NavDropdown
                  title="Time Table"
                  id="nav-dropdown"
                  className="px-2 fw-bold text-black"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/inter-timetable"
                    className="text-black fw-bold"
                  >
                    Intermediate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/bs-timetable"
                    className="text-black fw-bold"
                  >
                    BS
                  </NavDropdown.Item>
                </NavDropdown>
                <Dropdown.Item to="/conferences">
                  <LinkRouter
                    path="/conferences"
                    title=" Conferences"
                    className="text-black fw-bold"
                  />
                </Dropdown.Item>
                <NavDropdown
                  title="Examinations"
                  id="nav-dropdown"
                  className="px-2 fw-bold text-black"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/inter-examinations"
                    className="text-black fw-bold"
                  >
                    Intermediate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/bs-examinations"
                    className="text-black fw-bold"
                  >
                    BS
                  </NavDropdown.Item>
                </NavDropdown>
              </Dropdown.Menu>
            </Dropdown>
            <LinkRouter
              path="/contact-us"
              title="Contact us"
              className="text-white fw-bold"
            />
            {location.pathname.startsWith("/dashboard") && <DropdownMenu />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
