// WRITE YOUR PRODUCT CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import SuitHeartFillIcon from '../icons/love.components';
import ArrowsRotateIcon from '../icons/arrows.component';
import StarIcon from '../icons/stars.component';

import './product-card.css'

const ProductComponent = () => (
<div className = 'product-card'>
<TitleComponent title = 'ONLINE LIBRARY' subtitle= 'There are many variation of passages'/>
<Container>
<Row>
<Col md={3} >
<div className="card">
<img src="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
  <div className="container background">
    <h5><b>Title Product Here</b></h5> 
    <p>Book</p> 
    <h6>$25 <StarIcon/></h6>
    <CustomBtn className='custom-button'>ADD TO CART</CustomBtn> <SuitHeartFillIcon/> <ArrowsRotateIcon/>
  </div>
</div>
</Col>
<Col md={3} >
<div className="card">
<img src="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
  <div className="container background">
    <h5><b>Title Product Here</b></h5> 
    <p>Book</p> 
    <h6>$25 <StarIcon/></h6>
    <CustomBtn className='custom-button'>ADD TO CART</CustomBtn> <SuitHeartFillIcon/> <ArrowsRotateIcon/>
  </div>
</div>
</Col>
<Col md={3} >
<div className="card">
<img src="https://images.unsplash.com/photo-1568006559435-b308bb4dbd2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
  <div className="container background">
    <h5><b>Title Product Here</b></h5> 
    <p>Book</p> 
    <h6>$25 <StarIcon/></h6>
    <CustomBtn className='custom-button'>ADD TO CART</CustomBtn> <SuitHeartFillIcon/> <ArrowsRotateIcon/>
  </div>
</div>
</Col>
<Col md={3} >
<div className="card">
<img src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"/>
  <div className="container background">
    <h5><b>Title Product Here</b></h5> 
    <p>Book</p>
    <h6>$25 <StarIcon/></h6> 
    <CustomBtn className='custom-button'>ADD TO CART</CustomBtn> <SuitHeartFillIcon/> <ArrowsRotateIcon/>
  </div>
</div>
</Col>
</Row>
</Container>
</div>
)


export default ProductComponent;