import React, { Component } from "react";
import Project from "./project";
import TerminalInput from "./terminalInput";

class Main extends Component {
  state = {
    projects: [
      {
        id: 0,
        name: "Projet1",
        label: "2019",
        link: "2019",
        className: "projet projet1 m-1"
      },
      {
        id: 1,
        name: "Projet2",
        label: "db",
        link: "db_process",
        className: "projet projet1 m-1"
      }
    ],
    terminalinput: "",
    h1: "Edouard Chang",
    opacity: 1
  };
  componentDidMount() {
    window.history.pushState("test", "TITLE", `/`);
  }

  onchange = e => {
    this.setState({ terminalinput: e.target.value });
  };

  onsubmit = e => {
    e.preventDefault();
    const firstTwo = this.state.terminalinput.substring(0, 2);
    let folder = "";
    if (firstTwo === "cd") {
      folder = this.state.terminalinput.substring(3);
    }

    if (this.state.terminalinput === "ls") {
      this.setState({ h1: "2019 db_process secretfolder" });
    } else if (folder === "2019") {
      window.location = "/2019";
    } else if (folder === "secretfolder") {
      this.setState({ h1: "Baited! No secret folder for you!" });
    } else if (firstTwo === "cd") {
      this.setState({ h1: "No such file or directory" });
    } else if (this.state.terminalinput === "clear") {
      this.setState({ h1: "Edouard Chang" });
    } else if (this.state.terminalinput === "help") {
      this.setState({ h1: "clear, ls, cd [dir]" });
    } else {
      this.setState({ h1: `Command not found` });
    }
    this.setState({ terminalinput: "" });
  };

  fadeout = () => {
    this.setState({ opacity: 0 });
  };
  render() {
    return (
      <div
        className="main container-fluid p-0"
        style={{ opacity: this.state.opacity }}
      >
        <div className="row terminal terminalWrap">
          <label htmlFor="terminalInput">
            <h1 className=" terminal">{this.state.h1}</h1>
            <TerminalInput
              value={this.state.terminalinput}
              onChange={this.onchange}
              onSubmit={this.onsubmit}
            />
          </label>
        </div>
        <div className="projets row p-5 justify-content-center">
          {this.state.projects.map((project, key) => {
            return (
              <Project key={key} project={project} fadeOut={this.fadeout} />
            );
          })}
          <div className="projet projet1 m-1">...</div>
        </div>
      </div>
    );
  }
}

export default Main;
