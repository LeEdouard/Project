import React, { Component } from "react";

class Projet14 extends Component {
  state = {
    scrolling: 0,
    scrollTimer: 0,
    currentSection: 0
  };
  componentDidMount() {
    let allSections = document.getElementsByTagName("section");
    for (let index = 0; index < allSections.length; index++) {
      allSections[index].style["height"] = window.innerHeight + "px";
    }
    // document.addEventListener("wheel", e => {
    //   if (this.state.scrolling == 0) {
    //     this.setState({ scrolling: 1 });
    //     if (e.deltaY > 0) {
    //       window.scrollBy(0, window.innerHeight);
    //     } else if (e.deltaY < 0) {
    //       window.scrollBy(0, -window.innerHeight);
    //     }
    //     setTimeout(() => {
    //       this.setState({ scrolling: 0 });
    //     }, 25);
    //   } else {
    //     e.preventDefault();
    //   }
    // .getBoundingClientRect()
    //   console.log(e);
    // });
    document.addEventListener("wheel", e => {
      console.log("start" + this.state.currentSection);

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
        if (this.state.currentSection < 9) {
          this.setState({ currentSection: this.state.currentSection + 1 });
        }
      } else if (e.deltaY < 0) {
        window.scrollTo(0, previousPosition);
        if (this.state.currentSection > 0) {
          this.setState({ currentSection: this.state.currentSection - 1 });
        }
      }

      console.log("end" + this.state.currentSection);
    });
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
            <div className="quote m-auto h1">Ne jamais abandonner</div>
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
            <div className="quote m-auto h1">
              La fin peut faire peur, mais la récompe sera là
            </div>
          </div>
        </section>
        <section id="9">10</section>
      </div>
    );
  }
}

export default Projet14;
