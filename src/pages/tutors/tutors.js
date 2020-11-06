import React, { Component } from "react";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import TitleComponent from "../../components/title/title.component";
// import { TutorCard } from "../../components/cards/product-card";
// import axios from "axios";
// import { trackPromise } from "react-promise-tracker";
import { TutorsAll } from "./tutors-all";

class Tutors extends Component {

  componentDidMount() {
    this.props.getTeachers();
  }

  render() {
    return(
      <>
        <PageHeader text="Our Amazing Tutors" />
        <div className="tutors-list">
          <TitleComponent title = 'ALL TUTORS' subtitle= 'Meet all our amazing tutors' />
          <Container>
            <TutorsAll tutors={this.props.tutors} />
          </Container>
        </div>
      </>
    );
  }
}

export default Tutors;