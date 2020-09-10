// WRITE YOUR NAVBAR CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './custom-nav.css';

const CustomNav = () => (
  <>
    <div className="top-header">
      <Container>
        <Row className="top-row">
          <Col sm={12} md={5} lg={7}>
            <span className="headerSpan">Have any question? <a href="tel:+2348030000000">0803 000 0000</a></span>
          </Col>
          <Col sm={12} md={7} lg={5} className="text-center skewed-div">
            <div className="top-right"><img src="/images/user.png" alt="user" /><a href="#">My account</a><span className="divider-span">|</span> </div>
            <div className="top-right"><img src="/images/heart.png" alt="user" /><a href="#">Wishlist</a><span className="divider-span">|</span> </div>
            <div className="top-right"><img src="/images/cart.png" alt="user" /><a href="#">Checkout</a></div>
          </Col>
          <div className="short-div"></div>
        </Row>
      </Container>
    </div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="/images/quateach.svg" alt="QuaTeach" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#tutors">Tutors</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default CustomNav;