// WRITE YOUR FOOTER CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

export const UsefulLinks = () => (
  <>
  <h4>useful links</h4>
  <ul>
    <li><a href="tutors">Our Tutors</a></li>
    <li><a href="courses">Our Courses</a></li>
    <li><a href="categories">Course Categories</a></li>
  </ul>
  </>
);

const Summary = () => (
  <>
    <>
      <img className="footer-logo" src="/images/quateach_w.svg" alt="QuaTeach Logo" />
      <p>
        At QuaTeach, we believe that quality education is a basic human right. 
        With our team of exceptional tutors, we seek to level the playing field
        in education by making quality teaching available at all levels in Africa.
      </p>
      <p>
        If you would like a our vision and would love to partner with us, feel
        to reach out to us via the listed contacts.
      </p>
    </>
  </>
);

const GetInTouch = () => (
  <>
    <h4>get in touch</h4>
    <ul>
      <li><img src="/images/phone.png" alt="phone" className="icon" /> <a href="tel:+2348030000000">0803 000 0000</a></li>
      <li><img src="/images/envelope.png" alt="phone" className="icon" /> <a href="mailto:info@quateach.com">info@quateach.com</a></li>
      <li><img src="/images/globe-africa.png" alt="website" className="icon" /> <a href="https://quateach.com">www.quateach.com</a></li>
    </ul>
  </>
);

const Footer = () => (
  <>
    <footer className="footer">
      <Container>
        <Row>
          <Col className="summary" lg={6} md={12} sm={12}>
            <Summary/>
          </Col>
          <Col className="get-in-touch" lg={3} md={6} sm={12}>
            <GetInTouch />
          </Col>
          <Col className="usefulLinksCol" lg={3} md={6} sm={12}>
            <UsefulLinks/>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container>
          <span>
            &copy; QuaTeach 2020. All Rights Reserved. <span className="pull-right policy"><a href="/privacy-policy">Privacy Policy.</a> <a href="/terms-and-conditions">Terms & Conditions</a></span>
          </span>
        </Container>
      </div>
    </footer>
  </>
);

export default Footer;