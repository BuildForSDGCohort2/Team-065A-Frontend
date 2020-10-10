import React, { Component } from "react";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
import TitleComponent from "../../components/title/title.component";
import { CoursesList } from "./courses-list";


class Courses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return(
      <>
        <PageHeader text="Our Courses" />
        <div className="courses-list">  
          <TitleComponent title = 'ALL COURSES' subtitle= 'Browse all our available courses' />
          <Container>
            <CoursesList courses={this.props.courses} />
          </Container>
        </div>
      </>
    );
  }
}

export default Courses;