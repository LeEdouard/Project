import React, { Component } from "react";
import db from "./db.js";
// import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

class Listing extends Component {
  state = {
    input: "",
    compare: "alphaSortAsc",
    sortType: "drug",
    empty: false,
    curtainStyle: { top: "-100%", bottom: "100%" }
  };

  componentDidMount() {}

  onchange = e => {
    this.setState({ input: e.target.value });
    setTimeout(() => {
      const unitList = document.getElementsByClassName("unit");
      let counting = 0;
      for (const elem of unitList) {
        if (
          elem.attributes["data-drug"].value
            .toLowerCase()
            .includes(this.state.input.toLowerCase()) ||
          elem.attributes["data-company"].value
            .toLowerCase()
            .includes(this.state.input.toLowerCase())
        ) {
          elem.style["opacity"] = "1";
          elem.style["height"] = "3.15rem";
          elem.style["border"] = "1px solid black";
          counting = counting + 1;
        } else {
          elem.style["opacity"] = "0";
          elem.style["height"] = "0em";
          elem.style["border"] = "none";
        }
      }
      this.setState({ empty: false });
      if (counting === 0) {
        this.setState({ empty: true });
      }
    }, 0);
  };

  alphaSortAsc = (a, b) => {
    if (this.state.sortType === "price" || this.state.sortType === "rating") {
      const elementComparaisonA = a[this.state.sortType];
      const elementComparaisonB = b[this.state.sortType];
      let comparison = 0;
      if (elementComparaisonA > elementComparaisonB) {
        comparison = 1;
      } else if (elementComparaisonA < elementComparaisonB) {
        comparison = -1;
      }
      return comparison;
    } else {
      const elementComparaisonA = a[this.state.sortType].toUpperCase();
      const elementComparaisonB = b[this.state.sortType].toUpperCase();
      let comparison = 0;
      if (elementComparaisonA > elementComparaisonB) {
        comparison = 1;
      } else if (elementComparaisonA < elementComparaisonB) {
        comparison = -1;
      }
      return comparison;
    }
  };

  compare = this.state.compare === "alphaSortAsc" ? this.alphaSortAsc : null;

  sortChange = e => {
    const type = e.target.dataset.type;
    this.setState({ curtainStyle: { top: "0", bottom: "0" } });
    setTimeout(() => {
      const unitList = document.getElementsByClassName("unit");
      for (const elem of unitList) {
        elem.style["opacity"] = "1";
        elem.style["height"] = "3.15rem";
        elem.style["border"] = "1px solid black";
      }
      if (this.state.compare === "alphaSortAsc") {
        this.setState({ compare: "alphaSortDesc" });
      } else {
        this.setState({ compare: "alphaSortAsc" });
      }
      this.setState({ sortType: type });
      this.setState({ curtainStyle: { top: "-100%", bottom: "100%" } });
    }, 1125);
  };

  render() {
    const listeFilm =
      this.state.compare === "alphaSortAsc"
        ? db.sort(this.compare)
        : db.sort(this.compare).reverse();

    return (
      <div className="listing">
        <div className="filter_zone">
          <form>
            <input
              type="text"
              onChange={this.onchange}
              placeholder="Search by drug or company"
            />
            <input
              type="submit"
              style={{
                visibility: "hidden",
                position: "absolute",
                width: 0,
                height: 0
              }}
            />
          </form>
          <input
            onClick={this.sortChange}
            data-type="drug"
            type="submit"
            value="Sorting by Drug"
          />
          <input
            onClick={this.sortChange}
            data-type="company"
            type="submit"
            value="Sorting by Company"
          />
          <input
            onClick={this.sortChange}
            data-type="price"
            type="submit"
            value="Sorting by Price"
          />
          <input
            onClick={this.sortChange}
            data-type="rating"
            type="submit"
            value="Sorting by Rating"
          />
        </div>
        <div className="tableau bg-dark">
          <div className="curtain" style={this.state.curtainStyle}>
            <div className="papier"></div>
          </div>
          {listeFilm.map((elem, key) => {
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
                className="unit bg-light row m-0"
                data-drug={elem.drug}
                data-company={elem.company}
                data-price={elem.price}
                data-rating={elem.rating}
                data-review={elem.review}
                data-picture={elem.picture}
              >
                <div className="border-right drug col-lg-4 col-4">
                  {elem.drug}
                </div>
                <div className="border-right company col-lg-4">
                  {elem.company}
                </div>
                <div className="border-right price text-center col-lg-2 col-3">
                  {elem.price}
                </div>
                <div className="border-right text-center rating col-lg-2 col-5">
                  {starArr.map((nbr, key) => {
                    if (nbr === 1) {
                      return (
                        <svg
                          key={key}
                          style={{ width: "1rem" }}
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <g>
                              <path
                                d="M472.196,39.468c-52.654-52.625-138.301-52.625-190.955,0L169.915,150.794l126.394,126.394
			c26.014-21.663,58.995-35.227,95.412-35.227c20.888,0,40.765,4.339,58.851,12.087l21.624-23.624
			C524.835,177.784,524.835,92.123,472.196,39.468z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M275.27,298.577L148.7,172.008L39.742,281.073c-52.639,52.639-52.639,138.301,0,190.955
			c52.653,52.622,139.3,53.626,191.955,0.999l22.088-22.194c-7.748-18.086-12.087-37.963-12.087-58.851
			C241.699,356.5,254.599,324.291,275.27,298.577z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M271.703,391.983c0,61.144,45.893,111.045,105.015,118.504V273.478C317.596,280.937,271.703,330.836,271.703,391.983z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M406.722,273.478v237.009c59.122-7.459,105.015-57.36,105.015-118.505S465.845,280.937,406.722,273.478z" />
                            </g>
                          </g>
                        </svg>
                      );
                    } else {
                      return (
                        <svg
                          key={key}
                          style={{ width: "1rem" }}
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <g>
                              <path
                                d="M443.393,259.503l29.041-29.041c52.753-52.753,52.759-138.138,0-190.896c-52.751-52.752-138.137-52.759-190.895,0
			C270.279,50.824,49.78,271.325,39.567,281.538c-52.753,52.753-52.759,138.138,0,190.896c52.751,52.752,138.137,52.759,190.895,0
			l29.042-29.041c23.216,40.911,67.177,68.577,117.482,68.577c74.43,0,134.984-60.554,134.984-134.984
			C511.97,326.68,484.305,282.719,443.393,259.503z M242.002,376.985c0,12.635,1.75,24.869,5.011,36.477l-37.761,37.761
			c-41.029,41.028-107.44,41.034-148.474,0c-41.029-41.028-41.035-107.44,0-148.474l109.465-109.465l100.512,100.511
			C252.75,316.736,242.002,345.629,242.002,376.985z M361.987,480.897c-50.811-7.3-89.989-51.113-89.989-103.912
			c0-52.799,39.178-96.612,89.989-103.912V480.897z M291.766,272.386L191.453,172.073L302.749,60.777
			c41.029-41.028,107.44-41.034,148.474,0c41.029,41.028,41.035,107.44,0,148.474l-37.761,37.761
			c-11.608-3.262-23.841-5.011-36.476-5.011C344.696,242.001,315.022,253.404,291.766,272.386z M391.984,480.897V273.074
			c50.811,7.3,89.989,51.113,89.989,103.912C481.973,429.784,442.795,473.597,391.984,480.897z"
                              />
                            </g>
                          </g>
                        </svg>
                      );
                    }
                  })}
                </div>
                <div className="full col-12 border-top">{elem.review}</div>
              </div>
            );
          })}
          {this.state.empty ? (
            <div className="empty">
              <span>Recherche infructueuse</span>
              <div>
                <FontAwesomeIcon
                  icon={faFrown}
                  style={{ transform: "scale(5)" }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Listing;
