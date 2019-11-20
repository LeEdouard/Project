import React, { Component } from "react";
import SliderMove from "./sliderMove";

class Slider extends Component {
  state = {
    exist: true,
    btnWidth: 50,
    opacity: 1
  };
  fadingOut = () => {
    setTimeout(() => {
      this.props.upDownLeave();
      this.setState({ opacity: 0 });
    }, 1000);
  };
  render() {
    return (
      <div
        className="slider row"
        style={{
          opacity: this.state.opacity
        }}
      >
        <SliderMove
          btnWidth={this.state.btnWidth}
          btnOpacity={this.state.btnOpacity}
          exist={this.state.exist}
          fadingOut={this.fadingOut}
        />
      </div>
    );
  }
}

export default Slider;
