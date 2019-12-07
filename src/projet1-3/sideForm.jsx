import React, { Component } from "react";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class SideForm extends Component {
  state = {};
  render() {
    return (
      <div className="sideForm col-xl-1 col-md-2 col-3 p-0 text-white pl-1 pr-1">
        <div className="sideForm_sticky position-sticky">
          <div className="back">
            <DelayLink delay={0} to="" clickAction={this.fadeout}>
              <FontAwesomeIcon icon={faStepBackward} />
            </DelayLink>
          </div>
          <h1 className="text-center">Fitness Log</h1>
          <form onSubmit={this.props.onsubmit} className="form-group">
            <select
              className="w-100 text-center custom-select"
              id="exoSelect"
              value={this.props.select}
              onChange={this.props.onchange}
            >
              {this.props.data.map((exercice, key) => {
                return (
                  <option key={key} value={exercice.id}>
                    {exercice.exoName}
                  </option>
                );
              })}
            </select>
            <input
              id="newEntryInput"
              className="form-control"
              type="text"
              placeholder="Reps/Min/Km"
              onChange={this.props.onchange}
              value={this.props.entryValue}
            />
            <input
              className="form-control btn btn-outline-primary text-white"
              type="submit"
              value="New entry"
            />
            {/* A AJOUTER: styliser line/filler/point/animation type de chart, reset,
          delete exo, add new exo, en dernier enregistrement et fetch dans une
          vraie db */}
          </form>
          <input
            className="form-control btn btn-outline-danger text-white"
            type="submit"
            value="Delete entry"
            onClick={this.props.deleteEntry}
          />
          <input
            className="form-control btn btn-outline-danger text-white"
            type="submit"
            value="Reset log"
            onClick={this.props.resetLog}
          />
          <input
            className="form-control btn btn-outline-danger text-white"
            type="submit"
            value="Delete Exo"
            onClick={this.props.deleteLog}
          />
          <input
            className="form-control btn btn-outline-primary text-white"
            type="submit"
            value="Move to first"
            onClick={this.props.moveToFirst}
          />
          <form onSubmit={this.props.newExo}>
            <input
              id="newExoInput"
              className="form-control "
              type="text"
              placeholder="New exo name"
              onChange={this.props.onchange}
              value={this.props.exoValue}
            />
            <input
              className="form-control btn btn-outline-primary text-white"
              type="submit"
              value="New Exo"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SideForm;
