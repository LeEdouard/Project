import React, { Component } from "react";

class TypePlain extends Component {
  state = {};
  render() {
    const { content } = this.props;

    return <p>{content}</p>;
  }
}

export default TypePlain;
