// WRITE YOUR EVENT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import GeoAltFillIcon from '../icons/location.components';
import ClockIcon from '../icons/clock.components';

import './event-card.css'

const EventComponent = () => (
<div classNameName = 'event-card'>
<TitleComponent title = 'OUR EVENTS' subtitle= 'There are many variation of passages'/>
<Container>
<Row>
<Col md={4} >
<div className="card">
<img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
<div className = 'date'>
<h3>06</h3>
<h6>Sep</h6>
</div>
  <div className="container background">
    <h5><b>Learn English In Ease</b></h5> 
    <p><ClockIcon/> 4:00pm - 8:00pm <GeoAltFillIcon/> Lagos Nigeria</p>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
  </div>
</div>
</Col>
<Col md={4} >
<div className="card">
<img src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
<div className = 'date'>
<h3>10</h3>
<h6>Aug</h6>
</div>
<div className="container background">
    <h5><b>Learn English In Ease</b></h5> 
    <p><ClockIcon/> 4:00pm - 8:00pm <GeoAltFillIcon/> Lagos Nigeria</p>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
  </div>
</div>
</Col>
<Col md={4} >
<div className="card">
<img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
<div className = 'date'>
<h3>08</h3>
<h6>Jun</h6>
</div> 
<div className="container background">
    <h5><b>Learn English In Ease</b></h5> 
    <p><ClockIcon/> 4:00pm - 8:00pm <GeoAltFillIcon/> Lagos Nigeria</p>
    <CustomBtn className='custom-button'>LEARN NOW</CustomBtn>
  </div>
</div>
</Col>
</Row>
</Container>
</div>
)


export default EventComponent;