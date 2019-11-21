import React, { Component } from "react";
import db from "./db.js";
// import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

class Listing extends Component {
  state = {
    input: "",
    compare: "alphaSortAsc"
  };

  componentDidMount() {}

  onsubmit = e => {
    e.preventDefault();
    console.log(true);

    const unitList = document.getElementsByClassName("unit");
    for (const elem of unitList) {
      if (
        elem.attributes["data-name"].value
          .toLowerCase()
          .includes(this.state.input.toLowerCase()) ||
        elem.attributes["data-genre"].value
          .toLowerCase()
          .includes(this.state.input.toLowerCase())
      ) {
        elem.style["opacity"] = "1";
        elem.style["height"] = "1.5em";
        elem.style["border"] = "1px solid black";
      } else {
        elem.style["opacity"] = "0";
        elem.style["height"] = "0em";
        elem.style["border"] = "none";
      }
    }
    this.setState({ input: "" });
    console.log(this.state.input);

    // $.ajax({
    //   url: "https://sg.media-imdb.com/suggests/a/aa.json",
    //   dataType: "jsonp",
    //   cache: true,
    //   jsonp: false,
    //   jsonpCallback: "imdb$aa"
    // }).then(function(results) {
    //   console.log(results);
    // });
  };

  // onclick = e => {
  //   console.log(e.target.parentElement);

  //   document.getElementById("popup").style["display"] = "flex";

  //   document.getElementById("popup_title").innerText =
  //     e.target.parentElement.attributes["data-name"].value;

  //   document.getElementById("popup_img").src =
  //     e.target.parentElement.attributes["data-picture"].value;

  //   document.getElementById("popup_review").innerText =
  //     e.target.parentElement.attributes["data-review"].value;
  // };

  // onclickfade = e => {
  //   if (e.target.id === "popup") {
  //     document.getElementById("popup").style["display"] = "none";

  //     document.getElementById("popup_img").src = "";
  //   }
  // };

  onchange = e => {
    this.setState({ input: e.target.value });
  };

  alphaSortAsc = (a, b) => {
    const genreA = a.title.toUpperCase();
    const genreB = b.title.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  };

  alphaSortDesc = (a, b) => {
    const genreA = a.title.toUpperCase();
    const genreB = b.title.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
      comparison = -1;
    } else if (genreA < genreB) {
      comparison = 1;
    }
    return comparison;
  };

  compare =
    this.state.compare === "alphaSortAsc"
      ? this.alphaSortAsc
      : this.alphaSortDesc;

  sortChange = () => {
    if (this.state.compare === "alphaSortAsc") {
      this.setState({ compare: "alphaSortDesc" });
    } else {
      this.setState({ compare: "alphaSortAsc" });
    }
    console.log(this.state.compare);
  };

  render() {
    return (
      <div className="listing">
        <div>
          <form onSubmit={this.onsubmit}>
            <input
              type="text"
              onChange={this.onchange}
              placeholder="Search by name or genre"
            />
          </form>
          {/* <button onClick={this.sortChange} className="btn btn-primary">
            Changer l'order
          </button> */}
        </div>
        {db.sort(this.compare).map((elem, key) => {
          let starArr = [];
          for (let index = 0; index < elem.rating; index++) {
            starArr.push(1);
          }
          for (let index = 0; index < 5 - elem.rating; index++) {
            starArr.push(0);
          }
          return (
            <div
              key={key}
              className="unit"
              data-name={elem.title}
              data-genre={elem.genre}
              data-rating={elem.rating}
              data-review={elem.review}
              data-picture={elem.picture}
              onClick={this.onclick}
            >
              <div className="border-right">{elem.title}</div>
              <div className="border-right">{elem.genre}</div>
              <div className="border-right text-center">
                {starArr.map((nbr, key) => {
                  if (nbr === 1) {
                    return <FontAwesomeIcon key={key} icon={fasStar} />;
                  } else {
                    return <FontAwesomeIcon key={key} icon={faStar} />;
                  }
                })}
              </div>
            </div>
          );
        })}
        {/* <div id="popup" onClick={this.onclickfade}>
          <div id="popup_window">
            <div id="popup_title"></div>
            <img id="popup_img" src="" alt="" />
            <div id="popup_review"></div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Listing;
