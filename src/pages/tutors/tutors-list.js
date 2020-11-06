import React from 'react';
import { v4 as uuid_v4 } from 'uuid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TutorCard } from '../../components/cards/product-card';

export const TutorsList = ({tutors}) => {
  return(
    <>
    <Row key={uuid_v4()}>
      {
        tutors.filter((_, indx) => indx <= 3).map((tutor) =>(
            <Col lg={3} md={4} sm={12} key={tutor.info.user.id}>
                <TutorCard img={"/images/avatar.png"}
                  name={tutor.info.user.full_name}
                  description={tutor.info.user.address}
                  rating={tutor.info.rating}
                />
            </Col>
      ))
    }
    </Row>

    </>
  )
  }