import React, { Component } from "react";
import LoginScene from "./loginScene";
import DisplayScene from "./displayScene";

class Projet13 extends Component {
  state = {
    id: "",
    // id: "5de70aa933699a0a50712e69",
    error: "",
    error2: ""
  };
  checking = e => {
    e.preventDefault();
    document.getElementsByClassName("loading")[0].style["opacity"] = 1;
    if (e.target.children[0].value && e.target.children[1].value) {
      fetch(
        "https://mysterious-bayou-69637.herokuapp.com/u1ert6er7tvc1sdf6546df",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userName: e.target.children[0].value,
            pwd: e.target.children[1].value
          })
        }
      )
        .then(fetchedData => fetchedData.json())
        .then(jsoned => {
          if (jsoned.answer === "RIGHT") {
            this.setState({ id: jsoned.id });
          } else {
            this.setState({ error: "Wrong, try again !" });
          }
          document.getElementsByClassName("loading")[0].style["opacity"] = 0;
        })
        .catch(() => {
          console.log("error to get response");
        });
    } else {
      this.setState({ error: "Please fill everything" });
      document.getElementsByClassName("loading")[0].style["opacity"] = 0;
    }
  };
  registering = e => {
    e.preventDefault();
    document.getElementsByClassName("loading")[0].style["opacity"] = 1;
    if (e.target.children[0].value && e.target.children[1].value) {
      fetch(
        "https://mysterious-bayou-69637.herokuapp.com/u1ef87f5j98ue2b6iy8f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userName: e.target.children[0].value,
            pwd: e.target.children[1].value
          })
        }
      )
        .then(fetchedData => fetchedData.json())
        .then(jsoned => {
          if (jsoned.answer === "RIGHT") {
            this.setState({ id: jsoned.id });
          } else {
            this.setState({ error2: jsoned.answer });
          }
          document.getElementsByClassName("loading")[0].style["opacity"] = 0;
        })
        .catch(() => {
          console.log("error to get response");
          document.getElementsByClassName("loading")[0].style["opacity"] = 0;
        });
    } else {
      this.setState({ error2: "Please fill everything" });
      document.getElementsByClassName("loading")[0].style["opacity"] = 0;
    }
  };
  render() {
    return (
      <>
        {this.state.id ? (
          <DisplayScene userId={this.state.id} />
        ) : (
          <LoginScene
            checking={this.checking}
            registering={this.registering}
            error={this.state.error}
            error2={this.state.error2}
          />
        )}
      </>
    );
  }
}

export default Projet13;
