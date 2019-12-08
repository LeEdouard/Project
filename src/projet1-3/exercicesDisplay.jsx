import React, { Component } from "react";
import Exercice from "./exercice";

class ExercicesDisplay extends Component {
  state = {};
  render() {
    const {
      data,
      submiting,
      selecting,
      deleting,
      reseting,
      movingToTop
    } = this.props;

    return (
      <div className="exercicesDisplay col-xl-11 col-md-10 col-9 row p-0 m-0">
        {data.map((exerciceData, key) => {
          return (
            <Exercice
              key={key}
              exerciceData={exerciceData}
              submiting={submiting}
              selecting={selecting}
              deleting={deleting}
              reseting={reseting}
              movingToTop={movingToTop}
            />
          );
        })}
      </div>
    );
  }
}

export default ExercicesDisplay;
