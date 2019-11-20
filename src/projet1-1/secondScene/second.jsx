import React, { Component } from "react";
import Menu from "./menu";
import Content from "./content";
import svg from "./svg";
import chapters from "./chapters";
// import { BrowserRouter, Redirect } from "react-router-dom";
import Footer from "./footer";

class Second extends Component {
  state = {
    opacity: 0,
    chapters: chapters
  };

  fadeout = () => {
    this.setState({ opacity: 0 });
  };

  componentDidMount() {
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <div
        className="second container-fluid p-0"
        style={{ opacity: this.state.opacity }}
      >
        <Menu chapters={this.state.chapters} fadeOut={this.fadeout} />
        <Content chapters={this.state.chapters} />
        <Footer buildings={svg.buildings} />
      </div>
    );
  }
}

export default Second;
