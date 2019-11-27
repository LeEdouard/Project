import React, { Component } from "react";
import Down from "./down";
import Up from "./up";
import Slider from "./slider";
import SmokeEffect from "../firstScene/smokeEffect";

class First extends Component {
  state = {
    opacity: 0,
    up: {
      top: -2,
      classList: "up row"
    },
    down: {
      bottom: -2,
      classList: "down row"
    },
    smokeEffect: {
      opacity: 0,
      top: 45,
      transform: "rotate(0deg) scale(1)"
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 100);
  }
  upDownLeave = () => {
    this.setState({
      up: { top: -52, classList: "up row shakingUp border-0" },
      down: { bottom: -52, classList: "down row shakingDown border-0" },
      smokeEffect: {
        opacity: 1,
        top: -60,
        transform: "rotate(90deg) scale(3)"
      }
    });
    setTimeout(() => {
      this.props.nextStep();
    }, 3000);
  };
  render() {
    return (
      <div
        className="first container-fluid"
        style={{ opacity: this.state.opacity }}
      >
        <Up top={this.state.up.top} classList={this.state.up.classList} />
        <Slider upDownLeave={this.upDownLeave} left={this.state.sliderLeft} />
        <SmokeEffect
          opacity={this.state.smokeEffect.opacity}
          top={this.state.smokeEffect.top}
          transform={this.state.smokeEffect.transform}
        />
        <Down
          bottom={this.state.down.bottom}
          classList={this.state.down.classList}
        />
      </div>
    );
  }
}

export default First;
