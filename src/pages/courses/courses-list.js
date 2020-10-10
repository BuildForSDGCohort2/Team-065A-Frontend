import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CourseCard } from '../../components/cards/event-card';

export const CoursesList = ({courses, rows}) => {
  let n = rows ? rows : Math.floor(courses.length/3) + 1;
  let groups = [];
  let sub_array = [];
  let data = courses;
  let images = ["https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&     fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"]
  let idx = 0;
  for(let i = 0; i < n; i++){
    sub_array = data.splice(0, 3);
    groups.push(sub_array);
  }
  return(
    <>
      {groups.map(group => (
        <Row key={"group"+idx++*10}>
          {group.map(course =>(
            <Col lg={4} md={4} sm={12} key={course.coursename+idx++*20}>
                <CourseCard key={course.coursename+idx++*102} img={images[Math.floor(Math.random()*3)]}
                  title={course.coursename}
                  link="/courses"
                  tutors={course.teachers}
                />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}