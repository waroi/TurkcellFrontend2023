import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
