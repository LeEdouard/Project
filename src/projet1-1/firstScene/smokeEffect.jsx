import React, { Component } from "react";

class SmokeEffect extends Component {
  state = {};
  render() {
    return (
      <div
        className="smokeEffect"
        style={{
          top: `${this.props.top}vh`,
          opacity: this.props.opacity,
          transform: this.props.transform
        }}
      ></div>
    );
  }
}

export default SmokeEffect;
