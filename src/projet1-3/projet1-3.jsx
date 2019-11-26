import React, { Component } from "react";
import SideForm from "./sideForm";
import ExercicesDisplay from "./exercicesDisplay";
import db from "../../src/data/fitness.json";
// const http = require("http");
// const fs = require("fs-extra");

class Projet13 extends Component {
  state = {
    reseting: false,
    deleting: false,
    submiting: false,
    repsInput: "",
    select: 0,
    newExoInput: "",
    exercices: db
  };
  componentDidUpdate() {
    // écrire dans le fichier
    // console.log(fs.writeFile);
    // ERROR
    // fs.writeFile("src/data/test.json", "hello", err => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });
  }
  onsubmit = e => {
    e.preventDefault();
    if (parseInt(this.state.repsInput)) {
      let newExcercices = [...this.state.exercices];
      if (newExcercices[this.state.select].entries.length === 0) {
        newExcercices[this.state.select].entries[0] = {
          id: 1,
          value: parseInt(this.state.repsInput)
        };
      } else {
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
      }

      this.setState({ submiting: true });
      this.setState({ exercices: newExcercices });
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
    newExercices[this.state.select].entries = newExercices[
      this.state.select
    ].entries.slice(0, newExercices[this.state.select].entries.length - 1);
    this.setState({ exercices: newExercices });
    setTimeout(() => {
      this.setState({ deleting: false });
    }, 0);
  };
  resetLog = () => {
    this.setState({ reseting: true });

    let newExercices = [...this.state.exercices];
    newExercices[this.state.select].entries = [];
    this.setState({ exercices: newExercices });
    setTimeout(() => {
      this.setState({ reseting: false });
    }, 0);
  };

  deleteLog = () => {
    let newExercices = [...this.state.exercices];
    const findingExoToDelete = newExercices.find(
      exo => exo.id === this.state.select
    );
    const indexOfFoundExo = newExercices.indexOf(findingExoToDelete);
    newExercices.splice(indexOfFoundExo, 1);
    this.setState({ exercices: newExercices });
  };
  newExo = e => {
    e.preventDefault();
    if (this.state.newExoInput) {
      let newExercices = [...this.state.exercices];
      if (newExercices.length === 0) {
        newExercices[0] = {
          id: 0,
          name: this.state.newExoInput,
          entries: []
        };
      } else {
        newExercices[newExercices.length] = {
          id: newExercices[newExercices.length - 1].id + 1,
          name: this.state.newExoInput,
          entries: []
        };
      }
      this.setState({ exercices: newExercices });
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
          entryValue={this.state.repsInput}
          deleteEntry={this.deleteEntry}
          resetLog={this.resetLog}
          deleteLog={this.deleteLog}
          exoValue={this.state.newExoInput}
          newExo={this.newExo}
        />
        <ExercicesDisplay
          data={this.state.exercices}
          submiting={this.state.submiting}
          selecting={this.state.select}
          deleting={this.state.deleting}
          reseting={this.state.reseting}
        />
      </div>
    );
  }
}

export default Projet13;
// [
//   {
//     "id": 0,
//     "name": "Sit-Ups",
//     "entries": [
//       {
//         "id": 1,
//         "value": 10
//       },
//       {
//         "id": 2,
//         "value": 20
//       },
//       {
//         "id": 3,
//         "value": 75
//       },
//       {
//         "id": 4,
//         "value": 50
//       },
//       {
//         "id": 5,
//         "value": 100
//       }
//     ]
//   },
//   {
//     "id": 1,
//     "name": "Chin-Ups",
//     "entries": [
//       {
//         "id": 1,
//         "value": 10
//       },
//       {
//         "id": 2,
//         "value": 20
//       },
//       {
//         "id": 3,
//         "value": 75
//       },
//       {
//         "id": 4,
//         "value": 50
//       },
//       {
//         "id": 5,
//         "value": 100
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Rows",
//     "entries": [
//       {
//         "id": 1,
//         "value": 10
//       },
//       {
//         "id": 2,
//         "value": 20
//       },
//       {
//         "id": 3,
//         "value": 75
//       },
//       {
//         "id": 4,
//         "value": 50
//       },
//       {
//         "id": 5,
//         "value": 100
//       }
//     ]
//   }
// ]
