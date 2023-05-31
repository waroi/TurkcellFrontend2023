import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.baslik}</h3>
        <h3>{this.props.info.name}</h3>
        <h3>{this.props.info.surname}</h3>
      </div>
    );
  }
}
