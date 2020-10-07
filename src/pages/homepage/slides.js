import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomBtn from '../../components/shared/button/custom-btn';
// import styles from '../styles/header.module.scss';

const Slides = () =>
(
  <Carousel className="slides" fade={true}>
    <Carousel.Item>
      <img className="d-block w-100"
        src="/images/children-in-school.jpeg" alt="slide1" />
      <Carousel.Caption>
        <div>
          <h3>We believe quality education is a fundamental human right.</h3>
          <a href="/sign_up"><CustomBtn>get started</CustomBtn></a>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div className="slideDiv">
        <img className="d-block w-100"
        src="/images/student-with-tab.jpg" alt="slide2" />
      </div>
      <Carousel.Caption>
        <div>
          <h3>Are you a tutor? You can make impact here!</h3>
          <a href="/sign_up"><CustomBtn>get started</CustomBtn></a>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div className="slideDiv">
        <img className="d-block w-100"
        src="/images/lady-with-tab.jpg" alt="slide3" />
      </div>
      <Carousel.Caption>
        <div>
          <h3>Are you a student? We have all the right tutors for you.</h3>
          <a href="/sign_up"><CustomBtn>get started</CustomBtn></a>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slides;
