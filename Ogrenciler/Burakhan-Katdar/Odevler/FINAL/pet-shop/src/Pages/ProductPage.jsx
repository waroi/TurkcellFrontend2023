import { React, useEffect, useState } from "react";
import { Row, Container, Col, Button, Form, Dropdown } from "react-bootstrap";
import FilterCard from "../Components/FilterCard";
import ProductCard from "../Components/ProductCard";
import DogHumanImage from "../img/dog-with-a-human2.png";

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleMinCostChange = (event) => {
    const { value } = event.target;
    if (value === "" || /^\d+$/.test(value)) {
      setMinCost(value);
    }
  };

  const handleMaxCostChange = (event) => {
    const { value } = event.target;
    if (value === "" || /^\d+$/.test(value)) {
      setMaxCost(value);
    }
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const filterItems = (items) => {
    if (searchText !== "") {
      return items.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return items;
  };

  const sortItems = (items) => {
    if (sortOrder === "az") {
      return items.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "za") {
      return items.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      return items;
    }
  };

  const filteredItems = sortItems(
    filterItems(
      items.filter((item) => {
        const itemCost = Number(item.price);
        const min = minCost === "" ? Number.MIN_SAFE_INTEGER : Number(minCost);
        const max = maxCost === "" ? Number.MAX_SAFE_INTEGER : Number(maxCost);
        if (
          selectedCategories.length === 0 &&
          itemCost >= min &&
          itemCost <= max
        ) {
          return true;
        }
        return (
          selectedCategories.includes(item.category) &&
          itemCost >= min &&
          itemCost <= max
        );
      })
    )
  );

  return (
    <div>
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
        <Row>
          <Col lg={3}>
            <h4>Filter</h4>
            <Form>
              <Form.Group as={Row} className="my-3">
                <h5>Categories</h5>
                {categories.map((category) => (
                  <Row lg={12} key={category}>
                    <Form.Check
                      type="checkbox"
                      id={`category-${category}`}
                      label={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  </Row>
                ))}
              </Form.Group>
              <Form.Group as={Row} className="my-3">
                <h5>Price</h5>

                <Col>
                  <Form.Label>Min Değer:</Form.Label>
                  <Form.Control
                    type="text"
                    value={minCost}
                    onChange={handleMinCostChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Max Değer:</Form.Label>
                  <Form.Control
                    type="text"
                    value={maxCost}
                    onChange={handleMaxCostChange}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col lg={9}>
            <h4>Products</h4>
            <Row className="my-3">
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Search by Title"
                  value={searchText}
                  onChange={handleSearchTextChange}
                />
              </Col>
              <Col sm={3}>
                <Dropdown className="w-100">
                  <Dropdown.Toggle variant="primary">
                    Sort By Title
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSortOrderChange("az")}>
                      A to Z
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortOrderChange("za")}>
                      Z to A
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row className="my-3">
              {filteredItems.map((item) => (
                <FilterCard key={item.id} product={item} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
