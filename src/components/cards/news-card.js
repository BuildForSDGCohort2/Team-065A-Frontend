// WRITE YOUR NEWS CARD CODE HERE. DON'T EDIT THE COMMENT PLEASE.
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomBtn from '../shared/button/custom-btn';
import TitleComponent from '../title/title.component';
import CalendarDateIcon from '../icons/calendar.components';
import EyeIcon from '../icons/eye.components';
import BxsChatIcon from '../icons/chat.components.jsx';
import './news-card.css';

export const BlogCard = (props) => (
  <div className="blog-card text-left">
    <Row className="no-gutters">
      <Col lg={5} md={6} sm={12} className="blog-img">
        <img src={props.img} alt="Blog Post" />
      </Col>
      <Col lg={7} md={6} sm={12}>
        <div className="blog-body">
          <div className="card-title font-weight-bold">{props.title}</div>
          <div className="blog-desc">
            <CalendarDateIcon/><small> {props.date} <EyeIcon/> {props.views}  <BxsChatIcon/> {props.comments} </small><br/>
              {props.content}
          </div> 
          <a href={props.link}><CustomBtn className='custom-button'>READ NOW</CustomBtn></a>
        </div>
      </Col>
    </Row>
  </div>
);

const NewsComponent = () => (
    <div className = 'news-card text-center'>
      <TitleComponent title = 'LATEST POSTS' subtitle= 'Read educational posts from our tutors'/>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
        <a href="/blog"><CustomBtn className='custom-button see-all'>SEE ALL POSTS</CustomBtn></a>
      </Container>
    </div>
 )
    
    
    export default NewsComponent;