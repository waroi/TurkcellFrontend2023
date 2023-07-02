import React from "react";
import { Row, Container, Col, Button, Card } from "react-bootstrap";

const PetCard = (petData) => {
  return (
    <Col lg={3}>
      <Card className="projectcard">
        <Card.Img
          variant="top"
          src={petData.petData.image}
          alt="Animal Image"
        />
        <Card.Body>
          <Card.Title className="overhidden">
            {petData.petData.title}
          </Card.Title>
          <Card.Text>
            <p>Category: {petData.petData.category} </p>
            Stock: {petData.petData.rating.count}
          </Card.Text>
          <Card.Text>
            <h6>{petData.petData.price}$</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PetCard;
