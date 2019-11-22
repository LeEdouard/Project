import React, { Component } from "react";
import Listing from "./listing";

class Projet12 extends Component {
  state = {
    opacity: 0
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 200);
  }
  render() {
    return (
      <div
        className="projet12"
        style={{
          opacity: this.state.opacity,
          transition: "1s"
        }}
      >
        <header>Les médicaments</header>
        <Listing />
        <footer>-----------</footer>
      </div>
    );
  }
}

export default Projet12;
