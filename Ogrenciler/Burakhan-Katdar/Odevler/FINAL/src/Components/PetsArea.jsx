import { React, useState, useEffect } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import PetCard from "./PetCard";

import APIRequest from "../Request";

const PetsArea = () => {
  const endpoint = "https://fakestoreapi.com/products";
  const api = new APIRequest(endpoint);
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    api
      .fetchData()
      .then((data) => {
        setPetData(data);
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
            <p>What's New</p>
            <h4>Take a look at some of our pets</h4>
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
        <Row className="PetsCards ">
          {petData &&
            petData.map((pet) => <PetCard key={pet.id} petData={pet} />)}
        </Row>
      </Container>
    </div>
  );
};

export default PetsArea;
