import React, { Component } from "react";
import SliderButton from "./sliderButton";

class SliderMove extends Component {
  state = {
    width: 0,
    btnOpacity: 1
  };

  unzip = () => {
    this.setState({
      width: 100
    });
    setTimeout(() => {
      this.props.fadingOut();
      this.setState({ btnOpacity: 0 });
    }, 750);
  };

  render() {
    return (
      <div
        className="sliderMove"
        style={{
          width: `calc(${this.state.width}% + ${this.props.btnWidth}px)`
        }}
      >
        <SliderButton
          btnWidth={this.props.btnWidth}
          btnOpacity={this.state.btnOpacity}
          unzip={this.unzip}
        />
      </div>
    );
  }
}

export default SliderMove;
