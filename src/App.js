import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projet11 from "./projet1-1/projet1-1";
import Projet12 from "./projet1-2/projet1-2";
import Projet13 from "./projet1-3/projet1-3";
import Projet14 from "./projet1-4/projet1-4";
import Main from "./main/main";

// const fs = require("fs");
// const fse = require("fs-extra");

class App extends Component {
  state = {};
  // componentDidMount() {
  //   fetch("https://mysterious-bayou-69637.herokuapp.com/szBcbzadb7HBc78E6WszBcbzadb7HBc78E6W");
  // }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/inspiration" component={Projet14} />
            <Route path="/fitness_log" component={Projet13} />
            <Route path="/db_process" component={Projet12} />
            <Route path="/2019" component={Projet11} />
            <Route path="*" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
