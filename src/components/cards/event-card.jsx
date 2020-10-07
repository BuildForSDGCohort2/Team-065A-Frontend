// WRITE YOUR EVENT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
// import GeoAltFillIcon from '../icons/location.components';
// import ClockIcon from '../icons/clock.components';

import './event-card.css'

export const CourseCard = (props) => (
  <Card>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className="font-weight-bold">{props.title}</Card.Title>
      <Card.Text>Get skilled tutors for personalized learning in {props.title}.</Card.Text> 
      <a href={props.link}><CustomBtn className='custom-button'>LEARN NOW</CustomBtn></a>
    </Card.Body>
  </Card>
);

const EventComponent = () => (
  <div className = 'event-card text-center'>
    <TitleComponent title = 'OUR COURSES' subtitle= 'Our most popular courses'/>
    <Container>
      <Row>
        <Col lg={4} md={4} sm={12} >
          <CourseCard img="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&     fit=crop&w=500&q=60"
            title="English Basics"
            link="/courses"
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <CourseCard img="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Physics Basics"
              link="/courses"
          />
        </Col>
        <Col lg={4} md={4} sm={12} >
          <CourseCard img="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Linear Algebra"
                link="/courses"
          />
        </Col>
      </Row>
      <a href="/courses"><CustomBtn className='custom-button see-all'>SEE ALL COURSES</CustomBtn></a>
    </Container>
  </div>
)


export default EventComponent;