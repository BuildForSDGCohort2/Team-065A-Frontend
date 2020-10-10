import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BlogCard } from '../../components/cards/news-card';

export const PostsList = ({posts, rows}) => {
  let n = rows ? rows : Math.floor(posts.length/2) + 1;
  let groups = [];
  let sub_array = [];
  let data = posts;
  let images = ["/images/1.jpg", "/images/4.jpg"]
  let idx = 0;
  for(let i = 0; i < n; i++){
    sub_array = data.splice(0, 2);
    groups.push(sub_array);
  }
  return(
    <>
      {groups.map(group => (
        <Row key={"group"+idx++*10}>
          {group.map(post =>(
            <Col lg={6} md={12} sm={12} key={post.title+idx++*20}>
                <BlogCard key={post.coursename+idx++*102} img={images[Math.floor(Math.random()*2)]}
                  title={post.title}
                  link="/blog"
                  content={post.content.replace(/^(.{60}[^\s]*).*/, "$1")}
                  date={getDate(post.created_at)}
                  views="25"
                  comments="100"
                />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}

function getDate (d) {
  var date = new Date().toLocaleDateString('en-GB', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  })

  return date;
}