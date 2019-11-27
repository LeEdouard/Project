import React, { Component } from "react";

class TypeQuote extends Component {
  state = {};
  render() {
    const { content } = this.props;

    return (
      <p style={{ fontStyle: "italic", fontSize: "1.5em", padding: "20px" }}>
        " {content} "
      </p>
    );
  }
}

export default TypeQuote;
