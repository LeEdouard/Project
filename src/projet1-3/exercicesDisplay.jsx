import React, { Component } from "react";
import Exercice from "./exercice";

class ExercicesDisplay extends Component {
  state = {};
  render() {
    const { data, submiting, selecting } = this.props;

    return (
      <div className="exercicesDisplay col-10 row p-0 m-0">
        {data.map((exerciceData, key) => {
          return (
            <Exercice
              key={key}
              exerciceData={exerciceData}
              submiting={submiting}
              selecting={selecting}
            />
          );
        })}
      </div>
    );
  }
}

export default ExercicesDisplay;
