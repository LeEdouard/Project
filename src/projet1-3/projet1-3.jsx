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
    console.log(
      "log: ",
      e.target.children[0].value,
      "pwd:",
      e.target.children[1].value
    );
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
        console.log("ANSWER:", jsoned.answer);

        if (jsoned.answer === "RIGHT") {
          this.setState({ id: jsoned.id });
        } else {
          this.setState({ error: "Wrong, check again !" });
        }
        setTimeout(() => {
          console.log(this.state.id);
        }, 0);
      })

      .catch(() => console.log("error to get response"));
  };
  render() {
    return (
      <>
        {this.state.id ? (
          <DisplayScene />
        ) : (
          <LoginScene checking={this.checking} />
        )}
      </>
    );
  }
}

export default Projet13;
