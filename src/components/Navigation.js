import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/new-logo.png";

const Navigation = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/technozarre", { state: { targetSection: sectionId } });
    }
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          
          {/* Updated Brand Section */}
          <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              alt="WHHC Logo"
              src={logo}
              height="60" /* Increased height, removed hardcoded width so it scales proportionally */
              style={{ objectFit: 'contain' }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-toggle"
            style={{backgroundColor: 'grey'}}
          />
        </div>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="/photogallery">
              Events
            </Nav.Link>
            <Nav.Link className="navlink" href="/team">
              Team
            </Nav.Link>
            <NavDropdown title="Technozarre'26" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item
                className="technozarre-hlink"
                onClick={() => navigate("/technozarre")}
              >
                Technozarre2k26
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("workshops")}
              >
                Workshops
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("technical")}
              >
                Technical
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("nontech")}
              >
                Non-Technical
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("gaming")}
              >
                Gaming
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;