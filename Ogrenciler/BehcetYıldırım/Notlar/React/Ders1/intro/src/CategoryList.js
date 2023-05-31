import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { id: "1", name: "behcet" },
      { id: "2", name: "sait" },
      { id: "3", name: "yıldırım" },
    ],
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.id}>{category.name}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
