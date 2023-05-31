import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let baslikProduct = "Deneme Product List";
  let object = { name: "behcet", surname: "yıldırım" };
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Deneme Category List" />
          </Col>
          <Col xs="9">
            <ProductList baslik={baslikProduct} info={object} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
