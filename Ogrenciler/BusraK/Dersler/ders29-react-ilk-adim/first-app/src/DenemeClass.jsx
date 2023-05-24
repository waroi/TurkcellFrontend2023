import React, { Component } from "react";

export default class DenemeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Busra",
    };
  }
  render() {
    return (
      <div>
        <div>DenemeClass</div>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

//rcc tab
