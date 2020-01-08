import React from "react";
import { Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
const ShowList = props => {
  const { name, id, isLoading,img } = props;

  return (
    <Col lg={3}>
      <Link to={`/${id}`}>
      <Card>
        <Card.Header>{id}</Card.Header>

        <Card.Body className="mx-auto">
          <Card.Text><img style={{width:"45px",postiion:"absolute"}}src={img} alt={name}></img></Card.Text>

          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default ShowList;
