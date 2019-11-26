import React, { Component } from "react";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class SideForm extends Component {
  state = {};
  render() {
    return (
      <div className="sideForm col-2 p-0 bg-info text-white">
        <div className="back">
          <DelayLink delay={0} to="" clickAction={this.fadeout}>
            <FontAwesomeIcon icon={faStepBackward} />
          </DelayLink>
        </div>
        <h1>test de la librairie chart.js</h1>
        <form onSubmit={this.props.onsubmit} className="form-group">
          <select
            className="form-control"
            id="exoSelect"
            value={this.props.select}
            onChange={this.props.onchange}
          >
            {this.props.data.map((exercice, key) => {
              return (
                <option key={key} value={exercice.id}>
                  {exercice.name}
                </option>
              );
            })}
          </select>
          <input
            id="newEntryInput"
            className="form-control"
            type="text"
            placeholder="Reps"
            onChange={this.props.onchange}
            value={this.props.entryValue}
          />
          <input
            className="form-control btn btn-primary"
            type="submit"
            value="New entry"
          />
          {/* A AJOUTER: styliser line/filler/point/animation type de chart, reset,
          delete exo, add new exo, en dernier enregistrement et fetch dans une
          vraie db */}
        </form>
        <input
          className="form-control btn btn-danger"
          type="submit"
          value="Delete entry"
          onClick={this.props.deleteEntry}
        />
        <input
          className="form-control btn btn-danger"
          type="submit"
          value="Reset log"
          onClick={this.props.resetLog}
        />
        <input
          className="form-control btn btn-danger"
          type="submit"
          value="Delete Exercice"
          onClick={this.props.deleteLog}
        />
        <form onSubmit={this.props.newExo}>
          <input
            id="newExoInput"
            className="form-control"
            type="text"
            placeholder="exo name"
            onChange={this.props.onchange}
            value={this.props.exoValue}
          />
          <input
            className="form-control btn btn-primary"
            type="submit"
            value="New Exo"
          />
        </form>
      </div>
    );
  }
}

export default SideForm;
