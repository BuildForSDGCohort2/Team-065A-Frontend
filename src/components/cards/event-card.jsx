// WRITE YOUR EVENT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import './event-card.css'

const EventComponent = () => (
<div className = 'event-card'>
<TitleComponent title = 'OUR EVENTS' subtitle= 'Lorem ipsium.......................'/>
<Container>
<Row>
<Col md={4} >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN MORE</CustomBtn>
  </Card.Body>
</Card>
</Col>
<Col md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN MORE</CustomBtn>
  </Card.Body>
</Card>
</Col>
<Col md={4} >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN MORE</CustomBtn>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
)


export default EventComponent;