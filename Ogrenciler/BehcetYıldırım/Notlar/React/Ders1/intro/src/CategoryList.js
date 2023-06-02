import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { id: "1", name: "behcet" },
      { id: "2", name: "sait" },
      { id: "3", name: "yıldırım" },
    ],
    currentCategory: "",
  };

  changecategory = (category) => {
    this.setState({ currentCategory: category.name });
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => {
                this.changecategory(category);
              }}
              key={category.id}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
