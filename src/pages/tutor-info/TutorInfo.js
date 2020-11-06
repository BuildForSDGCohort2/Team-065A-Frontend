import React from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tutor-info.css';

const TutorInfo = ({tutors}) => {
    const { info } = useParams()
    
    return tutors ? (
        <div>
        {
            tutors.filter(tutor => tutor.info.user.full_name  === info)
            .map(tutor => (
                <>
        <div key={uuid_v4()} className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
          <span className="mask bg-gradient-default opacity-8"></span>
          <Container fluid className="d-flex align-items-center">
            <Row>
              <Col lg={12} md={10}>
                <h1 className="display-2 text-white">Connect with Tutor {tutor.info.user.full_name}</h1>
                <p className="text-white mt-0 mb-5">Read my profile below to see if i fit the description of your desired tutor.</p>
              </Col>
            </Row>
          </Container>
        </div> 
        <Container key={tutor.info.id} fluid className="mt--7">
        <Row>
        <Col xl={{span:12,  order: 2 }} className="mb-5 mb-xl-0">
        <div className="card card-profile shadow">
          <Row className="justify-content-center">
            <Col lg={{span:3,  order: 2 }}>
              <div className="card-profile-image">
                  <img alt='users' src="/images/avatar.png" className="rounded-circle" />
              </div>
            </Col>
          </Row>
          <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" />
          <div className="card-body pt-0 pt-md-5">
            <div className="text-center mt-5">
              <h3>
              {tutor.info.user.full_name}
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2"></i>Lagos, Nigeria
              </div>
              <div className="card-header text-center border-0 pt-5 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-center">
                <a href={`${tutor.info.user.phone}`} className="btn btn-sm btn-contact">Contact</a>
                <a href={`mailto:${tutor.info.user.email}`} className="btn btn-sm btn-color ml-2">Email</a>
              </div>
            </div>
            <p>{tutor.info.user.full_name} teaches mathematics and computer science. Has over 3 years of tutoring students.
            </p>
              <hr className="my-4" />
              <div>
              <i className="ni education_hat mr-2"></i>Rating: {tutor.info.rating || 4}
            </div>
            </div>
          </div>
        </div>
      </Col>
        </Row>
        </Container>
        </>
        ))
            }
        </div>
    ) : (
        <p>Loading....</p>
    )
}

export default TutorInfo
