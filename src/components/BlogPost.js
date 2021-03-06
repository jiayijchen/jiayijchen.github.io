import React from 'react';
import {
  Col,
  Card
} from 'react-bootstrap';

export default function BlogPost(props) {
  return (
    <Col xs={12} className="my-0 font2">
      <Card className="bg-light border-0">
        <Card.Body className="py-0">
         
          {/* <Card.Subtitle className="text-muted pb-2">{"Week " + props.blogPost.id}</Card.Subtitle> */}
          <Card.Title className="fw-bold">{props.blogPost.name}</Card.Title>
          <Card.Text className="blog">
            {props.blogPost.description}
          </Card.Text>
           {/* <hr /> */}
        </Card.Body>
      </Card>
    </Col>
    
  )
}
