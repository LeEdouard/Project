import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

class SliderButton extends Component {
  state = {
    hovered: false
  };

  mouseOvering = () => {
    this.setState({ hovered: true });
  };

  mouseOuting = () => {
    this.setState({ hovered: false });
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          width: `${this.props.btnWidth}px`,
          opacity: this.props.btnOpacity
        }}
        onClick={this.props.unzip}
        onMouseOver={this.mouseOvering}
        onMouseOut={this.mouseOuting}
      >
        <FontAwesomeIcon
          style={{ transform: "scale(2.3)" }}
          icon={this.state.hovered ? faAngleDoubleRight : faAngleRight}
        />
      </div>
    );
  }
}

export default SliderButton;
