import React from "react";
import { Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
const ShowList = props => {
  const { name, id, isLoading,img,properties,price,category } = props;

  return (
    <Col lg={3}>
     
      <Card>
        <Card.Header>{id}</Card.Header>

        <Card.Body className="mx-auto">
          <Card.Text className="imgtoHover"><img  style={{width:"45px",postiion:"absolute"}}src={img} alt={name}></img></Card.Text>
          
          <Card.Text className="hovered">
          {properties}<br></br>
          {price}<br></br>
          {category}<br></br>
          </Card.Text>
          <Link to={`/${id}`}>
          <Card.Title style={{textTransform: "none"}}>{name}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
      
    </Col>
  );
};

export default ShowList;
