import React, { Component } from "react";
import $ from "jquery";

class Projet14 extends Component {
  state = {
    currentSection: 0,
    timer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dateOpen: ""
  };
  componentDidMount() {
    const d = new Date();
    this.setState({
      dateOpen: "Page ouverte à " + d.getHours() + " heures"
    });

    let allSections = document.getElementsByTagName("section");
    for (let index = 0; index < allSections.length; index++) {
      allSections[index].style["height"] = window.innerHeight + "px";
    }

    document.addEventListener("wheel", e => {
      let nextPosition =
        this.state.currentSection < 9
          ? allSections[this.state.currentSection + 1].getBoundingClientRect()
              .y + window.scrollY
          : allSections[this.state.currentSection].getBoundingClientRect().y +
            window.scrollY;
      let previousPosition =
        this.state.currentSection > 0
          ? allSections[this.state.currentSection - 1].getBoundingClientRect()
              .y + window.scrollY
          : allSections[this.state.currentSection].getBoundingClientRect().y +
            window.scrollY;
      if (e.deltaY > 0) {
        window.scrollTo(0, nextPosition);
        if (this.state.currentSection < 10) {
          this.setState({ currentSection: this.state.currentSection + 1 });
        }
      } else if (e.deltaY < 0) {
        window.scrollTo(0, previousPosition);
        if (this.state.currentSection > 0) {
          this.setState({ currentSection: this.state.currentSection - 1 });
        }
      }
    });

    setInterval(() => {
      let newTimer = [...this.state.timer];
      newTimer[this.state.currentSection] =
        Math.round((newTimer[this.state.currentSection] + 0.1) * 10) / 10;
      this.setState({ timer: newTimer });
    }, 100);
  }
  render() {
    return (
      <div className="inspiration">
        <section id="0">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Photo de chat juste parce que</div>
          </div>
        </section>
        <section id="1">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Un enfant qui rit</div>
          </div>
        </section>
        <section id="2">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Victoire</div>
          </div>
        </section>
        <section id="3">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Un gars content</div>
          </div>
        </section>
        <section id="4">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Au sommet du monde</div>
          </div>
        </section>
        <section id="5">
          <div className="filter d-flex">
            <div className="quote m-auto h1">trouver image horizontale</div>
          </div>
        </section>
        <section id="6">
          <div className="filter d-flex">
            <div className="quote m-auto h1">
              La lumière est au bout du couloir
            </div>
          </div>
        </section>
        <section id="7">
          <div className="filter d-flex">
            <div className="quote m-auto h1">blble</div>
          </div>
        </section>
        <section id="8">
          <div className="filter d-flex">
            <div className="quote m-auto h1">trouver image horizontale</div>
          </div>
        </section>
        <section id="9">
          <div className="filter d-flex">
            <div className="quote m-auto h1">Fin ?</div>
          </div>
        </section>
        <section id="10">
          <div className="filter d-flex">
            <div className="quote m-auto h1">
              <h1>Temps passé sur chaque image</h1>
              <h5>
                utilisation d'un simple setIntervale de 100ms en fonction du
                currentSection
              </h5>
              {this.state.timer.map((sectionTimer, key) => {
                return (
                  <li key={key}>
                    {key} :{" "}
                    {sectionTimer % 1 != 0 ? sectionTimer : sectionTimer + ".0"}
                  </li>
                );
              })}
              <h6 id="ip"></h6>
              {/* <h6>Browser : {window.navigator.appCodeName}</h6>
              <h6>OS : {window.navigator.oscpu}</h6>
              <h6>{this.state.dateOpen}</h6> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
$.getJSON("https://api.ipify.org?format=json", function(data) {
  $("#ip").html("IP : " + data.ip);
});
export default Projet14;
