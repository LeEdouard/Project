import React, { Component } from "react";
import LoginScene from "./loginScene";
import DisplayScene from "./displayScene";

class Projet13 extends Component {
  state = {
    id: "",
    error: ""
  };
  checking = e => {
    e.preventDefault();
    fetch("http://localhost:8000/u1ert6er7tvc1sdf6546df", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: e.target.children[0].value,
        pwd: e.target.children[1].value
      })
    })
      .then(fetchedData => fetchedData.json())
      .then(jsoned => {
        if (jsoned.answer === "RIGHT") {
          this.setState({ id: jsoned.id });
        } else {
          this.setState({ error: "Wrong, try again !" });
        }
      })
      .catch(() => console.log("error to get response"));
  };
  render() {
    return (
      <>
        {this.state.id ? (
          <DisplayScene userId={this.state.id} />
        ) : (
          <LoginScene checking={this.checking} error={this.state.error} />
        )}
      </>
    );
  }
}

export default Projet13;
