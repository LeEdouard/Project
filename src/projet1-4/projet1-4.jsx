import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";
import DelayLink from "react-delay-link";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class Projet14 extends Component {
  state = {
    currentSection: 0,
    timer: [0, 0, 0, 0, 0, 0],
    dateOpen: "",
    touchstartPos: 0
  };
  componentDidMount() {
    document
      .getElementsByClassName("inspiration")[0]
      .classList.add("opacityZero");
    setTimeout(() => {
      document
        .getElementsByClassName("inspiration")[0]
        .classList.remove("opacityZero");
    }, 0);

    document.documentElement.style["scrollbar-width"] = "none";
    document.documentElement.classList.add("noscroll");

    const d = new Date();
    this.setState({
      dateOpen: "Page ouverte à " + d.getHours() + "H"
    });

    let allSections = document.getElementsByTagName("section");
    for (let index = 0; index < allSections.length; index++) {
      allSections[index].style["height"] = window.innerHeight + "px";
    }

    document.addEventListener("wheel", this.wheely);

    this.timerInterval();

    document.addEventListener("touchstart", this.touchStart);
    document.addEventListener("touchend", this.touchEnd);
  }

  touchStart = e => {
    this.setState({ touchstartPos: e.touches[0].clientY });
  };

  touchEnd = e => {
    let touchendPos = e.changedTouches[0].clientY;
    if (this.state.touchstartPos > touchendPos) {
      this.goDownOne();
    } else if (this.state.touchstartPos < touchendPos) {
      this.goUpOne();
    }
  };

  timerInterval = () => {
    setInterval(() => {
      if (this.state.timer) {
        let newTimer = [...this.state.timer];
        newTimer[this.state.currentSection] =
          Math.round((newTimer[this.state.currentSection] + 0.1) * 10) / 10;
        this.setState({ timer: newTimer });
      }
    }, 100);
  };

  wheely = e => {
    if (e.deltaY > 0) {
      this.goDownOne();
    } else if (e.deltaY < 0) {
      this.goUpOne();
    }
  };

  componentWillUnmount() {
    document.documentElement.style["scrollbar-width"] = "auto";
    document.documentElement.classList.remove("noscroll");
    document.removeEventListener("wheel", this.wheely);
    document.removeEventListener("touchstart", this.touchStart);
    document.removeEventListener("touchend", this.touchEnd);
    this.timerInterval = null;
  }

  fadeout = () => {
    document
      .getElementsByClassName("inspiration")[0]
      .classList.add("opacityZero");
  };

  goDownOne = () => {
    let allSections = document.getElementsByTagName("section");
    let nextPosition =
      this.state.currentSection < 5
        ? allSections[this.state.currentSection + 1].getBoundingClientRect().y +
          window.scrollY
        : allSections[this.state.currentSection].getBoundingClientRect().y +
          window.scrollY;
    window.scrollTo(0, nextPosition);
    if (this.state.currentSection < 5) {
      this.setState({ currentSection: this.state.currentSection + 1 });
    }
  };

  goUpOne = () => {
    let allSections = document.getElementsByTagName("section");
    let previousPosition =
      this.state.currentSection > 0
        ? allSections[this.state.currentSection - 1].getBoundingClientRect().y +
          window.scrollY
        : allSections[this.state.currentSection].getBoundingClientRect().y +
          window.scrollY;
    window.scrollTo(0, previousPosition);
    if (this.state.currentSection > 0) {
      this.setState({ currentSection: this.state.currentSection - 1 });
    }
  };
  render() {
    return (
      <div className="inspiration">
        <section id="0">
          <div className="filter d-flex">
            <div className="quote m-auto h1">
              Image 1
              {this.state.currentSection !== 0 ? (
                <div className="goUpOne" onClick={this.goUpOne}>
                  <FontAwesomeIcon icon={faAngleDoubleUp} />
                </div>
              ) : null}
              {this.state.currentSection !== 10 ? (
                <div className="goDownOne" onClick={this.goDownOne}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <section id="1">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Image 2</div>
          </div>
        </section>
        <section id="2">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Image 3</div>
          </div>
        </section>
        <section id="3">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Image 4</div>
          </div>
        </section>
        <section id="4">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Image 5</div>
          </div>
        </section>
        <section id="5">
          <div className="filter d-flex">
            <div className="quote m-auto h1">
              <h1>Temps passé sur chaque image</h1>
              {this.state.timer.map((sectionTimer, key) => {
                return (
                  <li key={key}>
                    {key + 1} :{" "}
                    {sectionTimer % 1 !== 0
                      ? sectionTimer
                      : sectionTimer + ".0"}
                  </li>
                );
              })}
              <h6>Browser : {window.navigator.appCodeName}</h6>
              <h6>OS : {window.navigator.oscpu}</h6>
              <h6>{this.state.dateOpen}</h6>
            </div>
          </div>
        </section>
        <DelayLink delay={1000} to="" clickAction={this.fadeout}>
          <div className="back bg-dark text-white">
            <FontAwesomeIcon icon={faStepBackward} />
          </div>{" "}
        </DelayLink>
      </div>
    );
  }
}

export default Projet14;
