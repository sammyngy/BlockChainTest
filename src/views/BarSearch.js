import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const BarSearch = ({ handleSubmit }) => (
  <Form style={{marginTop:'16%'}} fixed="top" onSubmit={handleSubmit}>
    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Col sm="10">
        <Form.Control
          placeholder="Rechercher..."
      
          type="text"
          name="filter"
        />
      </Col>
      <Col sm="2">
        <Button type="submit" value="Filtrer">
          Rechercher
        </Button>
      </Col>
    </Form.Group>
  </Form>
);

export default BarSearch;
