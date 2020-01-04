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
          <DelayLink delay={1000} to="" clickAction={this.props.fadeout}>
            <div className="back border-bottom p-2">
              <FontAwesomeIcon icon={faStepBackward} />
            </div>
          </DelayLink>
          <h1 className="text-center">Fitness Log</h1>
          <h1 className="text-center border-top border-bottom">
            {this.props.userName
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/"/g, "&quot;")}
          </h1>
          {this.props.data.length > 0 && (
            <>
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
              </form>
              <div className="form-group">
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
              </div>
            </>
          )}

          <form onSubmit={this.props.newExo}>
            <input
              id="newExoInput"
              className="form-control "
              type="text"
              placeholder="New exo name"
              onChange={this.props.onchange}
              value={this.props.exoValue}
            />
            {/* <select
              className="w-100 text-center custom-select"
              id="typeSelect"
              onChange={this.props.onchange}
            >
              <option value="Reps">Reps</option>
              <option value="Minutes">Minutes</option>
              <option value="Km">Kilometers</option>
            </select> */}
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
