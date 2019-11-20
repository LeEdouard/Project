import React, { Component } from "react";
import First from "./firstScene/first";
import Second from "./secondScene/second";

class Projet11 extends Component {
  state = {
    activeScene: 2
  };

  componentDidMount() {}

  nextStep = () => {
    this.setState({ activeScene: 2 });
  };
  render() {
    if (this.state.activeScene === 1) {
      return <First nextStep={this.nextStep} />;
    } else {
      return <Second />;
    }
  }
}

export default Projet11;
