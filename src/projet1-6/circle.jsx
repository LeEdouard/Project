import React, { Component } from "react";

class Circle extends Component {
  state = {};
  render() {
    const el = this.props.el;

    return (
      <circle style={{ fill: el.fill, stroke: el.stroke }}>
        <title>Circle number {this.props.tag + 1}</title>
        <animate
          attributeName="cx"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.cx}
        />
        <animate
          attributeName="cy"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.cy}
        />
        <animate
          attributeName="r"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.r}
        />
      </circle>
    );
  }
}

export default Circle;
