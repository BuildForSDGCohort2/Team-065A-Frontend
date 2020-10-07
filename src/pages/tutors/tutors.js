import React from "react";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TitleComponent from "../../components/title/title.component";
import { TutorCard } from "../../components/cards/product-card";

const Tutors = () => (
  <>
    <PageHeader text="Our Amazing Tutors" />
    <div className="tutors-list">
      <TitleComponent title = 'ALL TUTORS' subtitle= 'Meet all our amazing tutors' />
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Ikenna Idigo"
              link="/tutors"
              description="Ikenna Idigo is one of the best back end developers there is."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Elijah Obominuru"
              link="/tutors"
              description="Elijah Obominuru is an astute full stack developer skilled in React and Rails."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Peter Chukwu"
              link="/tutors"
              description="Peter Chukwu is one of the best mobile developers there is."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Adeshola Adewale"
              link="/tutors"
              description="Adeshola Adewale is an astute full stack developer skilled in React and Rails."
              rating={5}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Plang Dakon"
              link="/tutors"
              description="Plang Dakon is one of the best mobile developers there is."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Timilehin Aderinola"
              link="/tutors"
              description="Timilehin Aderinola is an astute full stack developer skilled in React and Rails."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Peter Chukwu"
              link="/tutors"
              description="Peter Chukwu is one of the best mobile developers there is."
              rating={5}
            />
          </Col>
          <Col lg={3} md={4} sm={12} >
            <TutorCard img="https://images.unsplash.com/photo-1598372450684-282b7d0091d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              name="Adeshola Adewale"
              link="/tutors"
              description="Adeshola Adewale is an astute full stack developer skilled in React and Rails."
              rating={5}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Tutors;