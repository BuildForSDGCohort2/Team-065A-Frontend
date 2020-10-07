import React from "react";
import { CourseCard } from "../../components/cards/event-card";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TitleComponent from "../../components/title/title.component";

const Courses = () => (
  <>
    <PageHeader text="Our Courses" />
    <div className="courses-list">
      <TitleComponent title = 'ALL COURSES' subtitle= 'Browse all our available courses' />
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} >
            <CourseCard img="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&     fit=crop&w=500&q=60"
              title="English Basics"
              link="/courses"
            />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <CourseCard img="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Physics Basics"
                link="/courses"
            />
          </Col>
          <Col lg={4} md={4} sm={12} >
            <CourseCard img="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  title="Linear Algebra"
                  link="/courses"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} >
            <CourseCard img="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&     fit=crop&w=500&q=60"
              title="Organic Chemistry"
              link="/courses"
            />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <CourseCard img="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Literature"
                link="/courses"
            />
          </Col>
          <Col lg={4} md={4} sm={12} >
            <CourseCard img="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  title="Sociology"
                  link="/courses"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Courses;