import React from "react";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TitleComponent from "../../components/title/title.component";
import { BlogCard } from "../../components/cards/news-card";

const Blog = () => (
  <>
    <PageHeader text="Tutors' Blog" />
    <div className="posts-list">
      <TitleComponent title = 'ALL POSTS' subtitle= 'Browse all content created by our tutors' />
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/1.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <BlogCard img="/images/4.jpg"
              title="Learn English With Ease"
              link="/blog"
              content="Some quick example text to build on the card title and make up the bulk of
              the card's content"
              date="25 June 2020"
              views="25"
              comments="100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Blog;