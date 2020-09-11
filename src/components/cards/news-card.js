// WRITE YOUR NEWS CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import './news-card.css';

const NewsComponent = () => (
    <div classNameName = 'event-card'>
    <TitleComponent title = 'LATEST NEWS' subtitle= 'Lorem ipsium.......................'/>
    <Container>
    <Row>
    <Col md={6} >
    <Row className= 'no-gutters'>
    <Col md={6} >
    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
    </Col>
    <Col md={6} className= 'news-info'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
    </Col>
    </Row>
    </Col>
    <Col md={6} >
    <Row className= 'no-gutters'>
    <Col md={6} >
    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
    </Col>
    <Col md={6} className= 'news-info'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
    </Col>
    </Row>
    </Col>
    </Row>

    <Row className="mt-5">
    <Col md={6} >
    <Row className= 'no-gutters'>
    <Col md={6} >
    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
    </Col>
    <Col md={6} className= 'news-info'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
    </Col>
    </Row>
    </Col>
    <Col md={6} >
    <Row className= 'no-gutters'>
    <Col md={6} >
    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
    </Col>
    <Col md={6} className= 'news-info'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    </div>
    )
    
    
    export default NewsComponent;
