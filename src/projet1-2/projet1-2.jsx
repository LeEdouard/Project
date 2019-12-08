import React, { Component } from "react";
import Listing from "./listing";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class Projet12 extends Component {
  state = {};
  componentDidMount() {
    document.getElementsByClassName("projet12")[0].classList.add("opacityZero");
    setTimeout(() => {
      document
        .getElementsByClassName("projet12")[0]
        .classList.remove("opacityZero");
    }, 0);
  }
  fadeout = () => {
    document.getElementsByClassName("projet12")[0].classList.add("opacityZero");
  };
  render() {
    return (
      <div className="projet12">
        <header>
          <div className="back">
            <DelayLink delay={1000} to="" clickAction={this.fadeout}>
              <FontAwesomeIcon icon={faStepBackward} />
            </DelayLink>
          </div>
          <h1 className="text-right pr-1 mb-0">Les médicaments</h1>
        </header>
        <Listing />
        <footer>-----------</footer>
      </div>
    );
  }
}

export default Projet12;
