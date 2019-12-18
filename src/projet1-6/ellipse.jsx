import React, { Component } from "react";

class Ellipse extends Component {
  state = {};
  render() {
    const el = this.props.el;

    return (
      <ellipse style={{ fill: el.fill, stroke: el.stroke }}>
        <title>Ellipse number {this.props.tag + 1}</title>
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
          attributeName="rx"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.rx}
        />
        <animate
          attributeName="ry"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.ry}
        />
      </ellipse>
    );
  }
}

export default Ellipse;
