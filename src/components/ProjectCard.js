import React from 'react';
import {
  Col,
  Card
} from 'react-bootstrap';

export default function ProjectCard(props) {
  return (
    <Col xs={12} className="my-0 font2">
      <Card className="bg-light border-0">
        <Card.Body className="py-0">
          <Card.Subtitle className="text-muted pb-2">
            {props.project.week}
          </Card.Subtitle>
          <Card.Title className="fw-bold">{props.project.name}</Card.Title>
          <Card.Text className="blog">
            {props.project.description}
          </Card.Text>
          <p>
            {props.project.live_link !== 0 ?
              <a href={props.project.live_link} className="pe-2">link</a> : <span />}
            <a href={props.project.live_link}>repo</a>
          </p>
          <hr />
        </Card.Body>
      </Card>
    </Col>

  )
}