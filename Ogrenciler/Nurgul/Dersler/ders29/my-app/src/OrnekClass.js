import { Component } from "react";

export default class DenemeClass extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }
  render() {
    return (
      <div>
        <div>DenemeClass</div>
        <div>{this.props.isim}</div>
      </div>
    );
  }
}
