import React, { Component } from "react";
import SideForm from "./sideForm";
import ExercicesDisplay from "./exercicesDisplay";

class Projet13 extends Component {
  state = {
    submiting: false,
    repsInput: "",
    select: 0,
    exercices: [
      {
        id: 0,
        name: "Sit-Ups",
        entries: [
          {
            id: 1,
            value: 10
          },
          {
            id: 2,
            value: 20
          },
          {
            id: 3,
            value: 75
          },
          {
            id: 4,
            value: 50
          },
          {
            id: 5,
            value: 100
          }
        ]
      },
      {
        id: 1,
        name: "Chin-Ups",
        entries: [
          {
            id: 1,
            value: 10
          },
          {
            id: 2,
            value: 20
          },
          {
            id: 3,
            value: 75
          },
          {
            id: 4,
            value: 50
          },
          {
            id: 5,
            value: 100
          }
        ]
      },
      {
        id: 2,
        name: "Rows",
        entries: [
          {
            id: 1,
            value: 10
          },
          {
            id: 2,
            value: 20
          },
          {
            id: 3,
            value: 75
          },
          {
            id: 4,
            value: 50
          },
          {
            id: 5,
            value: 100
          }
        ]
      }
    ]
  };
  onsubmit = e => {
    e.preventDefault();
    if (this.state.repsInput && this.state.repsInput - 0 > 1) {
      let newExcercices = [...this.state.exercices];
      const previousEntryId =
        newExcercices[this.state.select].entries[
          newExcercices[this.state.select].entries.length - 1
        ].id;
      newExcercices[this.state.select].entries[
        newExcercices[this.state.select].entries.length
      ] = {
        id: previousEntryId + 1,
        value: parseInt(this.state.repsInput)
      };
      this.setState({ submiting: true });
      this.setState({ exercices: newExcercices });
    }
    this.setState({ repsInput: "" });
  };
  onchange = e => {
    this.setState({ submiting: false });
    if (e.target.localName === "input") {
      this.setState({ repsInput: e.target.value });
    } else if (e.target.localName === "select") {
      this.setState({ select: e.target.value });
    }
  };
  render() {
    return (
      <div className="fitness row m-0 p-0">
        <SideForm
          data={this.state.exercices}
          onsubmit={this.onsubmit}
          onchange={this.onchange}
          select={this.state.select}
          value={this.state.repsInput}
        />
        <ExercicesDisplay
          data={this.state.exercices}
          submiting={this.state.submiting}
          selecting={this.state.select}
        />
      </div>
    );
  }
}

export default Projet13;
