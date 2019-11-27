import React, { Component } from "react";

class Down extends Component {
  state = {};
  render() {
    return (
      <div
        className={this.props.classList}
        style={{ bottom: `${this.props.bottom}%` }}
      >
        <div className="downFilter">avec le GRETA92</div>
      </div>
    );
  }
}

export default Down;
