import React, { Component } from "react";
import db from "./db.js";

class Listing extends Component {
  state = {};
  onsubmit = e => {
    e.preventDefault();
    const aaa = document.getElementsByClassName("unit");
    console.log(aaa[0]);
    console.log(aaa[0].attributes["data-name"]);
    console.log(aaa[0].style["height"]);
  };
  render() {
    return (
      <div className="listing">
        <div>
          <form onSubmit={this.onsubmit}>
            <input type="text" placeholder="Search by name or genre" />
          </form>
        </div>
        {db.map((elem, key) => {
          return (
            <div
              key={key}
              className="unit"
              data-name={elem.title}
              data-genre={elem.genre}
            >
              {elem.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Listing;
