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
        className: "projet m-1 projet_important",
        description: "long scroll blog",
        longDescription:
          "Mon aventure à la formation Concepteur Développeur FrontEnd par le GRETA 92. Quelques animations par-ci par-là."
      },
      {
        id: 1,
        name: "Projet2",
        label: "db",
        link: "db_process",
        className: "projet m-1 projet_bof",
        description: "table filtering/sorting",
        longDescription:
          "Pas grand chose à voir dans ce projet là. json, fonctions de tri et filtre"
      },
      {
        id: 2,
        name: "Projet3",
        label: "fitness",
        link: "fitness_log",
        className: "projet m-1 projet_important",
        description: "account + chart.js + mongoDB",
        longDescription:
          "J'ai voulu voir comment marche chart.js, puis j'ai continuer à développer le système de compte avec base de donnée mongoDB et serveur node"
      },
      {
        id: 3,
        name: "Projet4",
        label: "inspire",
        link: "inspiration",
        className: "projet m-1",
        description: "one scroll page + tracking",
        longDescription: "J'ai voulu copier le style de certains sites"
      },
      {
        id: 4,
        name: "Projet5",
        label: "contact",
        link: "contact",
        className: "projet m-1",
        description: "simple form",
        longDescription:
          "Apprentrissage création d'un serveur node et de ses requêtes"
      },
      {
        id: 5,
        name: "Projet6",
        label: "svg random",
        link: "svg_random",
        className: "projet m-1",
        description: "randomizer de cercle svg",
        longDescription:
          "Animation randomizer qui peut servir de loading ou bien animation de fond dans vos vidéos"
      }
    ],
    terminalinput: "",
    h1: "Edouard Chang"
  };
  componentDidMount() {
    window.history.pushState("test", "TITLE", `/`);
    document.getElementsByClassName("main")[0].style["opacity"] = 1;
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
      this.setState({
        h1:
          "2019 db_process fitness_log inspire contact svg_random secretfolder"
      });
    } else if (folder === "svg_random") {
      window.location = "/svg_random";
    } else if (folder === "contact") {
      window.location = "/contact";
    } else if (folder === "inspire") {
      window.location = "/inspire";
    } else if (folder === "fitness_log") {
      window.location = "/fitness_log";
    } else if (folder === "db_process") {
      window.location = "/db_process";
    } else if (folder === "2019") {
      window.location = "/2019";
    } else if (folder === "secretfolder") {
      this.setState({ h1: "Baited!" });
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
    document.getElementsByClassName("main")[0].style["opacity"] = 0;
  };
  render() {
    return (
      <div className="main">
        <label className="terminalWrap w-100" htmlFor="terminalInput">
          <h1 className=" terminalTxt">{this.state.h1}</h1>
          <TerminalInput
            value={this.state.terminalinput}
            onChange={this.onchange}
            onSubmit={this.onsubmit}
          />
        </label>
        <div className="projets">
          <div className="project_wrap">
            {this.state.projects.map((project, key) => {
              return (
                <Project key={key} project={project} fadeout={this.fadeout} />
              );
            })}
            <div className="projet m-1 projet_vide">...</div>
            <div className="projet m-1 projet_vide">...</div>
            <div className="projet m-1 projet_vide">...</div>
            <div className="projet m-1 projet_vide">...</div>
          </div>
        </div>
        <footer className="w-100 bg-dark text-light text-center">
          <span>Tout le code </span>
          <a href="https://github.com/LeEdouard/Project">ici</a>
        </footer>
      </div>
    );
  }
}

export default Main;
