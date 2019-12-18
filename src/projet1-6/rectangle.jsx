import React, { Component } from "react";

class Rectangle extends Component {
  state = {};
  render() {
    const el = this.props.el;

    return (
      <rect
        style={{
          fill: el.fill,
          stroke: el.stroke
        }}
      >
        <title>Rectangle number {this.props.tag + 1}</title>
        <animate
          attributeName="x"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.x}
        />
        <animate
          attributeName="y"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.y}
        />
        <animate
          attributeName="width"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.width}
        />
        <animate
          attributeName="height"
          dur={el.dur}
          repeatCount="indefinite"
          values={el.height}
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
          values={el.rx}
        />
      </rect>
    );
  }
}

export default Rectangle;
