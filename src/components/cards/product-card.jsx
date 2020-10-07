// WRITE YOUR PRODUCT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
// import SuitHeartFillIcon from '../icons/love.components';
// import ArrowsRotateIcon from '../icons/arrows.component';
import StarIcon from '../icons/stars.component';

import './product-card.css';

export const TutorCard = (props) => (
  <Card>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className="font-weight-bold">{props.name}</Card.Title>
      <Card.Text>{props.description}.</Card.Text>
      <h6>Rating: <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h6> 
      <a href={props.link}><CustomBtn className='custom-button'>VIEW PROFILE</CustomBtn></a>
    </Card.Body>
  </Card>
);

const ProductComponent = () => (
  <div className = 'product-card text-center'>
    <TitleComponent title = 'MEET OUR TUTORS' subtitle= 'Meet our skilled and friendly tutors'/>
    <Container>
      <Row>
        <Col lg={3} md={4} sm={12} >
          <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            name="Ikenna Idigo"
            link="/tutors"
            description="Ikenna Idigo is one of the best back end developers there is."
            rating={5}
          />
        </Col>
        <Col lg={3} md={4} sm={12} >
          <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            name="Elijah Obominuru"
            link="/tutors"
            description="Elijah Obominuru is an astute full stack developer skilled in React and Rails."
            rating={5}
          />
        </Col>
        <Col lg={3} md={4} sm={12} >
          <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            name="Peter Chukwu"
            link="/tutors"
            description="Peter Chukwu is one of the best mobile developers there is."
            rating={5}
          />
        </Col>
        <Col lg={3} md={4} sm={12} >
          <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            name="Adeshola Adewale"
            link="/tutors"
            description="Adeshola Adewale is an astute full stack developer skilled in React and Rails."
            rating={5}
          />
        </Col>
      </Row>
      <a href="/tutors"><CustomBtn className='custom-button see-all'>SEE ALL TUTORS</CustomBtn></a>
    </Container>
  </div>
);


export default ProductComponent;