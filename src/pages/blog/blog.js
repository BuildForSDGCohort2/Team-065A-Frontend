import React, { Component } from "react";
import PageHeader from "../../components/shared/page-header";
import Container from 'react-bootstrap/Container';
import TitleComponent from "../../components/title/title.component";
import { PostsList } from "./posts-list";


class Blog extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return(
      <>
        <PageHeader text="Tutors' Blog" />
        <div className="posts-list">
          <TitleComponent title = 'ALL POSTS' subtitle= 'Browse all content created by our tutors' />
          <Container>
            <PostsList posts={this.props.posts} />
          </Container>
        </div>
      </>
    );
  }
}

export default Blog;