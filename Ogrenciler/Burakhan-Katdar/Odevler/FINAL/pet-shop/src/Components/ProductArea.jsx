import { React, useState, useEffect } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import APIRequest from "../Request";
import { Routes, Route, Link, NavLink } from "react-router-dom";

const ProductArea = () => {
  const endpoint = "https://fakestoreapi.com/products";
  const api = new APIRequest(endpoint);
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    api
      .fetchData()
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Container className="PetsArea">
        <Row className="PetsInfo justify-content-between align-items-center">
          <Col lg={4}>
            <p>Hard to choose right products for your pets?</p>
            <h4>Our Products</h4>
          </Col>
          <Col lg={2}>
            <NavLink className="navItem" to="/product">
              <Button className="PetsInfoButton">
                View More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Button>
            </NavLink>
          </Col>
        </Row>
        <Row className="PetsCards">
          {productData &&
            productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductArea;
