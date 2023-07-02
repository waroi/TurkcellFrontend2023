import React from "react";
import GiftIcon from "../img/gift-icon.png";
import { Card, Button, Col } from "react-bootstrap";

const ProductCard = (product) => {
  return (
    <Col lg={3}>
      <Card className="projectcard">
        <Card.Img
          variant="top"
          src={product.product.image}
          alt="Product Image"
        />
        <Card.Body>
          <Card.Title>{product.product.title} </Card.Title>

          <Card.Text>
            <p>Category: {product.product.category} </p>
            Stock: {product.product.rating.count}
          </Card.Text>
          <Card.Text>
            <h6>{product.product.price}$</h6>
          </Card.Text>
          <Button className="d-flex gap-2 bg-secondary w-100 justify-content-center">
            <img src={GiftIcon} alt="" /> Free Toy & Free Shaker
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
