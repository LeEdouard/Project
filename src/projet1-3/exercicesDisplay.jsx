import React, { Component } from "react";
import Exercice from "./exercice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

class ExercicesDisplay extends Component {
  state = {};
  componentDidMount() {
    document.getElementsByClassName("exercicesDisplay")[0].style["min-height"] =
      window.innerHeight + "px";
  }
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
        {data.length === 0 && (
          <div className="empty text-light">
            <FontAwesomeIcon icon={faFrown} size="6x" />
            <h2>Empty</h2>
          </div>
        )}
      </div>
    );
  }
}

export default ExercicesDisplay;
