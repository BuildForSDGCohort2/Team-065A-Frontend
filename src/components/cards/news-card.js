// WRITE YOUR NEWS CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import CalendarDateIcon from '../icons/calendar.components';
import EyeIcon from '../icons/eye.components';
import BxsChatIcon from '../icons/chat.components.jsx';
import './news-card.css';

const NewsComponent = () => (
    <div className = 'news-card'>
    <TitleComponent title = 'LATEST NEWS' subtitle= 'There are many variation of passages'/>
    <Container>
    <Row>
    <Col md={6}>
    <Card >
  <Row className="row no-gutters">
    <Col md={6}>  
<Card.Img style={{ width: '100%', height: '100%' }} src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </Col>
      <Col md={6} className = 'news-container'>
      <Card.Body>
        <Card.Title>Learn English In Ease</Card.Title>
         <Card.Text>
         <CalendarDateIcon/><small> 25 June 2020 <EyeIcon/> 25  <BxsChatIcon/> 100 </small><br/>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
   </Card.Body>
    </Col>
  </Row>
</Card>
    </Col>
    <Col md={6} >
    <Card>
  <Row className="row no-gutters">
    <Col md={6}>  
<Card.Img style={{ width: '100%', height: '100%' }} src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </Col>
      <Col md={6} className = 'news-container'>
      <Card.Body>
        <Card.Title>Learn English In Ease</Card.Title>
         <Card.Text>
         <CalendarDateIcon/><small> 25 June 2020 <EyeIcon/> 25  <BxsChatIcon/> 100 </small><br/>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
   </Card.Body>
    </Col>
  </Row>
</Card>
    </Col>
    </Row>
    <Row className= 'mt-3'>
    <Col md={6}>
    <Card >
  <Row className="row no-gutters">
    <Col md={6}>  
<Card.Img style={{ width: '100%', height: '100%' }} src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </Col>
      <Col md={6} className = 'news-container'>
      <Card.Body>
        <Card.Title>Learn English In Ease</Card.Title>
         <Card.Text>
         <CalendarDateIcon/><small> 25 June 2020 <EyeIcon/> 25  <BxsChatIcon/> 100 </small><br/>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
   </Card.Body>
    </Col>
  </Row>
</Card>
    </Col>
    <Col md={6} >
    <Card>
  <Row className="row no-gutters">
    <Col md={6}>  
<Card.Img style={{ width: '100%', height: '100%' }} src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </Col>
      <Col md={6} className = 'news-container'>
      <Card.Body>
        <Card.Title>Learn English In Ease</Card.Title>
         <Card.Text>
         <CalendarDateIcon/><small> 25 June 2020 <EyeIcon/> 25  <BxsChatIcon/> 100 </small><br/>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
   </Card.Body>
    </Col>
  </Row>
</Card>
    </Col>
    </Row>
    </Container>
    </div>
 )
    
    
    export default NewsComponent;