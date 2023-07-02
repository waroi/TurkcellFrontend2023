import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import DogHumanImage from "../img/dog-with-a-human2.png";

import Header from "../Components/Header";
import PetsArea from "../Components/PetsArea";
import ProductArea from "../Components/ProductArea";
const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <PetsArea />
      <Container>
        <Row className="InfoCard">
          <Col lg={7} className="InfoCardLeft">
            <img src={DogHumanImage} alt="" />
          </Col>
          <Col lg={5} className="InfoCardRight">
            <h1>One More Friend</h1>
            <h2>Thousands more fun</h2>
            <p>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="buttonsDiv d-flex flex-row gap-3 justify-content-end">
              <Button id="viewIntro" className="buttons">
                View Intro{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </Button>
              <Button id="exploreNow" className="buttons">
                Explore Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ProductArea />
    </div>
  );
};

export default HomePage;
