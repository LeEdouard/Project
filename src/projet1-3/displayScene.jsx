import React, { Component } from "react";
import SideForm from "./sideForm";
import ExercicesDisplay from "./exercicesDisplay";
// import db from "../../src/data/fitness.json";
// const http = require("http");
// const fs = require("fs-extra");

class Projet13 extends Component {
  state = {
    reseting: false,
    deleting: false,
    submiting: false,
    movingToTop: false,
    repsInput: "",
    select: 0,
    newExoInput: "",
    exercices: [],
    userName: ""
  };
  componentDidMount() {
    document.getElementsByClassName("fitness")[0].classList.add("opacityZero");
    setTimeout(() => {
      document
        .getElementsByClassName("fitness")[0]
        .classList.remove("opacityZero");
    }, 0);

    // https://mysterious-bayou-69637.herokuapp.com/df6g54sd65f4g6sd5fg9
    // http://localhost:8000/df6g54sd65f4g6sd5fg9
    fetch("https://mysterious-bayou-69637.herokuapp.com/df6g54sd65f4g6sd5fg9", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.userId })
    })
      .then(fetchedData => fetchedData.json())
      .then(jsoned =>
        this.setState({
          exercices: jsoned.body.exos,
          userName: jsoned.body.userName
        })
      )
      .then(() => this.setState({ select: this.state.exercices[0].id }))
      .catch(() => console.log("error could not fetch"));
  }

  fadeout = () => {
    document.getElementsByClassName("fitness")[0].classList.add("opacityZero");
  };

  updateToJson = data => {
    fetch(
      "https://mysterious-bayou-69637.herokuapp.com/dfbn65i4dfv4z6er654ze9",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: this.props.userId, exos: data })
      }
    ).then(resp => console.log(resp));
  };
  moveToFirst = () => {
    this.setState({ movingToTop: true });
    let newExercices = [...this.state.exercices];
    const findingExoToDelete = newExercices.find(
      exo => exo.id === parseInt(this.state.select)
    );
    const indexOfFoundExo = newExercices.indexOf(findingExoToDelete);
    newExercices.unshift(findingExoToDelete);
    newExercices.splice(indexOfFoundExo + 1, 1);
    this.setState({ exercices: newExercices });

    this.updateToJson(newExercices);

    setTimeout(() => {
      this.setState({ movingToTop: false });
    }, 0);
  };
  onsubmit = e => {
    e.preventDefault();
    if (parseInt(this.state.repsInput)) {
      let newExercices = [...this.state.exercices];
      const findingExo = newExercices.find(
        exo => exo.id === parseInt(this.state.select)
      );
      const indexOfFoundExo = newExercices.indexOf(findingExo);
      if (newExercices[indexOfFoundExo].entries.length === 0) {
        newExercices[indexOfFoundExo].entries[0] = {
          id: 1,
          value: parseInt(this.state.repsInput)
        };
      } else {
        const previousEntryId =
          newExercices[indexOfFoundExo].entries[
            newExercices[indexOfFoundExo].entries.length - 1
          ].id;
        newExercices[indexOfFoundExo].entries[
          newExercices[indexOfFoundExo].entries.length
        ] = {
          id: previousEntryId + 1,
          value: parseInt(this.state.repsInput)
        };
      }

      this.setState({ submiting: true });
      this.setState({ exercices: newExercices });
      this.updateToJson(newExercices);
    }
    this.setState({ repsInput: "" });
  };
  onchange = e => {
    this.setState({ submiting: false });
    if (e.target.id === "newEntryInput") {
      this.setState({ repsInput: e.target.value });
    } else if (e.target.id === "exoSelect") {
      this.setState({ select: e.target.value });
    } else if (e.target.id === "newExoInput") {
      this.setState({ newExoInput: e.target.value });
    }
  };

  deleteEntry = () => {
    this.setState({ deleting: true });

    let newExercices = [...this.state.exercices];
    const findingExo = newExercices.find(
      exo => exo.id === parseInt(this.state.select)
    );
    const indexOfFoundExo = newExercices.indexOf(findingExo);
    newExercices[indexOfFoundExo].entries = newExercices[
      indexOfFoundExo
    ].entries.slice(0, newExercices[indexOfFoundExo].entries.length - 1);
    this.setState({ exercices: newExercices });
    this.updateToJson(newExercices);
    setTimeout(() => {
      this.setState({ deleting: false });
    }, 0);
  };
  resetLog = () => {
    this.setState({ reseting: true });

    let newExercices = [...this.state.exercices];

    const findingExo = newExercices.find(
      exo => exo.id === parseInt(this.state.select)
    );
    const indexOfFoundExo = newExercices.indexOf(findingExo);

    newExercices[indexOfFoundExo].entries = [];
    this.setState({ exercices: newExercices });
    this.updateToJson(newExercices);
    setTimeout(() => {
      this.setState({ reseting: false });
    }, 0);
  };

  deleteLog = () => {
    this.setState({ movingToTop: true });
    console.log(this.state.exercices);
    console.log("select", this.state.select);
    let newExercices = [...this.state.exercices];
    const findingExo = newExercices.find(
      exo => parseInt(exo.id) === parseInt(this.state.select)
    );

    console.log(findingExo);

    const indexOfFoundExo = newExercices.indexOf(findingExo);
    console.log(indexOfFoundExo);

    newExercices.splice(indexOfFoundExo, 1);

    this.setState({ exercices: newExercices });
    this.updateToJson(newExercices);
    setTimeout(() => {
      this.setState({
        select:
          this.state.exercices.length !== 0 ? this.state.exercices[0].id : 0
      });
    }, 0);
    setTimeout(() => {
      this.setState({ movingToTop: false });
    }, 0);
  };
  newExo = e => {
    e.preventDefault();
    if (this.state.newExoInput) {
      let newExercices = [...this.state.exercices];
      if (newExercices.length === 0) {
        newExercices[0] = {
          id: 0,
          exoName: this.state.newExoInput,
          entries: []
        };
      } else {
        newExercices[newExercices.length] = {
          id: newExercices[newExercices.length - 1].id + 1,
          exoName: this.state.newExoInput,
          entries: []
        };
      }
      this.setState({ exercices: newExercices });
      this.updateToJson(newExercices);
    }
    this.setState({ newExoInput: "" });
  };

  render() {
    return (
      <div className="fitness row m-0 p-0 bg-dark">
        <SideForm
          userName={this.state.userName}
          data={this.state.exercices}
          onsubmit={this.onsubmit}
          onchange={this.onchange}
          select={this.state.select}
          entryValue={this.state.repsInput}
          deleteEntry={this.deleteEntry}
          resetLog={this.resetLog}
          deleteLog={this.deleteLog}
          moveToFirst={this.moveToFirst}
          exoValue={this.state.newExoInput}
          newExo={this.newExo}
          fadeout={this.fadeout}
        />
        <ExercicesDisplay
          data={this.state.exercices}
          submiting={this.state.submiting}
          selecting={this.state.select}
          deleting={this.state.deleting}
          reseting={this.state.reseting}
          movingToTop={this.state.movingToTop}
        />
      </div>
    );
  }
}

export default Projet13;
