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
import { PostsList } from '../../pages/blog/posts-list';

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

const NewsComponent = (props) => (
    <div className = 'news-card text-center'>
      <TitleComponent title = 'LATEST POSTS' subtitle= 'Read educational posts from our tutors'/>
      <Container>
        <PostsList posts={props.posts} rows={props.rows} />
        <a href="/blog"><CustomBtn className='custom-button see-all'>SEE ALL POSTS</CustomBtn></a>
      </Container>
    </div>
 )
    
    
    export default NewsComponent;