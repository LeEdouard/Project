import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./main/main";
import Projet11 from "./projet1-1/projet1-1";
import Projet12 from "./projet1-2/projet1-2";
import Projet13 from "./projet1-3/projet1-3";
import Projet14 from "./projet1-4/projet1-4";
import Projet15 from "./projet1-5/projet1-5";
import Projet16 from "./projet1-6/projet1-6";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/svg_random" component={Projet16} />
            <Route path="/contact" component={Projet15} />
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
