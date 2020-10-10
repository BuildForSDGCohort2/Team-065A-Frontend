import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TutorCard } from '../../components/cards/product-card';

export const TutorsList = ({tutors, rows}) => {
  let n = rows ? rows : Math.floor(tutors.length/4) + 1;
  let groups = [];
  let sub_array = [];
  let data = tutors;
  let idx = 0;
  for(let i = 0; i < n; i++){
    sub_array = data.splice(0, 4);
    groups.push(sub_array);
  }
  return(
    <>
      {groups.map(group => (
        <Row key={"group"+idx++*50}>
          {group.map(tutor =>(
            <Col lg={3} md={4} sm={12} key={tutor.info.user.id}>
                <TutorCard img={"/images/avatar.png"}
                  name={tutor.info.user.full_name}
                  link="/tutors"
                  description={tutor.info.user.address}
                  rating={tutor.info.rating}
                />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}