import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projet11 from "./projet1-1/projet1-1";
import Projet12 from "./projet1-2/projet1-2";
import Projet13 from "./projet1-3/projet1-3";
import Main from "./main/main";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
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
