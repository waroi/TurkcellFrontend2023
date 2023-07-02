import React from "react";
import GiftIcon from "../img/gift-icon.png";
import { Card, Button, Col } from "react-bootstrap";

const FilterCard = ({ product }) => {
  console.log("FILTEREDCARD TITLE", product.title);
  return (
    <Col lg={4}>
      <Card className="projectcard">
        <Card.Img variant="top" src={product.image} alt="Product Image" />
        <Card.Body>
          <Card.Title>{product.title} </Card.Title>

          <Card.Text>
            <p>Category: {product.category} </p>
            Stock: {product.rating.count}
          </Card.Text>
          <Card.Text>
            <h6>{product.price}$</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FilterCard;
