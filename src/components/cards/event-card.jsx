// WRITE YOUR EVENT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';

import './event-card.css'
import { CoursesList } from '../../pages/courses/courses-list';

export const CourseCard = (props) => (
  <Card>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className="font-weight-bold">{props.title}</Card.Title>
      <Card.Text>Get personalized learning. This course is taught by {props.tutors.map(tutor => (<a key={"user"+tutor.info.user.id} className="taught-by" href={props.link}>{tutor.info.user.full_name}</a>)) }.</Card.Text> 
      <a href={props.link}><CustomBtn className='custom-button'>LEARN NOW</CustomBtn></a>
    </Card.Body>
  </Card>
);

const EventComponent = (props) => (
  <div className = 'event-card text-center'>
    <TitleComponent title = 'OUR COURSES' subtitle= 'Our most popular courses'/>
    <Container>
      <CoursesList courses={props.courses} rows={props.rows} />
      <a href="/courses"><CustomBtn className='custom-button see-all'>SEE ALL COURSES</CustomBtn></a>
    </Container>
  </div>
)


export default EventComponent;