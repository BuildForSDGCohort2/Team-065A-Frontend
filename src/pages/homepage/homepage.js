import React, { Component } from 'react';
import './homepage.css';
import EventComponent from '../../components/cards/event-card.jsx';
import NewsComponent from '../../components/cards/news-card';
import Slides from './slides';
import { TutorsList } from '../tutors/tutors-list';
import { Container } from 'react-bootstrap';
import TitleComponent from '../../components/title/title.component';
import CustomBtn from '../../components/shared/button/custom-btn';

class HomePage extends Component {

  componentDidMount() {
    this.props.getTeachers();
    this.props.getCourses();
    this.props.getPosts();
  }

  render(){
    return(
      <>
        <Slides />
        <div className='homepage'>
          <main>
            <div className = 'product-card text-center'>
              <TitleComponent title = 'MEET OUR TUTORS' subtitle= 'Meet our skilled and friendly tutors'/>
              <Container>
                <TutorsList tutors={this.props.tutors} rows={1} />
                <a href="/tutors"><CustomBtn className='custom-button see-all'>SEE ALL TUTORS</CustomBtn></a>
              </Container>
            </div>
            <EventComponent courses={this.props.courses} rows={1} />
            <NewsComponent posts={this.props.posts} rows={2} />
          </main>
        </div>
      </>
    )
  }
}   


export default HomePage;