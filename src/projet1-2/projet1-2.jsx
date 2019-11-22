import React, { Component } from "react";
import Listing from "./listing";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class Projet12 extends Component {
  state = {
    opacity: 0
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 0);
  }
  fadeout = () => {
    setTimeout(() => {
      this.setState({ opacity: 0 });
    }, 0);
  };
  render() {
    return (
      <div
        className="projet12"
        style={{
          opacity: this.state.opacity
        }}
      >
        <header>
          <div className="back">
            <DelayLink delay={500} to="" clickAction={this.fadeout}>
              <FontAwesomeIcon icon={faStepBackward} />
            </DelayLink>
          </div>
          <h1>Les médicaments</h1>
        </header>
        <Listing />
        <footer>-----------</footer>
      </div>
    );
  }
}

export default Projet12;
