// WRITE YOUR NAVBAR CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './custom-nav.css';

const MyAccount = props => {
  return (
    <>
      {props.user.full_name ? 
      <>
        <div className="top-right"><img src="/images/user.png" alt="user" /><a href="/dashboard">{props.user.full_name}</a><span className="divider-span">|</span></div>
        <div className="top-right first"><button href="/sign_in" onClick={props.handleLogout}>Logout</button></div>
      </> :
      <>
        <div className="top-right"><img src="/images/user.png" alt="user" /><a href="/sign_in">Login</a><span className="divider-span">|</span></div>
        <div className="top-right first"><a href="/sign_up">Register</a></div>
      </>
      }
    </>
  )
}

const CustomNav = ({user, handleLogout}) => (
  <>
    <div className="top-header">
      <Container>
        <Row className="top-row">
          <Col sm={12} md={5} lg={7}>
            <span className="headerSpan">Have any question? <a href="tel:+2348030000000">0803 000 0000</a></span>
          </Col>
          <Col sm={12} md={7} lg={5} className="text-center skewed-div">
            <MyAccount user={user} handleLogout={handleLogout} />
          </Col>
          <div className="short-div"></div>
          <div className="my-account pull-right">
            <MyAccount user={user} handleLogout={handleLogout} />
          </div>
        </Row>
      </Container>
    </div>
    <Navbar expand="lg">
      <Container className="nav-items">
        <Navbar.Brand href="/"><img src="/images/quateach.svg" alt="QuaTeach" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/tutors">Tutors</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link id="get-the-app"
              rel="noopener noreferrer"
              target="_blank"
              href="https://appetize.io/app/y6mn4x2f6uhw1btvrt4k0vrrx8?device=nexus5&scale=75&orientation=portrait&osVersion=8.1"
            >
              <img className="appetize-logo" src="/images/demo-app.png" alt="Appetize.io"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default CustomNav;