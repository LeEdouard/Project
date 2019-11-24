import React, { Component } from "react";
import Article from "./article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

class Content extends Component {
  state = {
    cloudLeft: 0,
    cloudFilter: "drop-shadow(-5px -5px 5px rgba(0, 0, 0, 0.5))"
  };

  scrolling = () => {
    const pos =
      (window.scrollY /
        document.getElementsByClassName("second")[0].clientHeight) *
      100;
    this.setState({
      cloudLeft: pos
    });

    const filterTxt = (taille, opacity) => {
      return `drop-shadow(${taille}px ${taille}px ${Math.abs(
        taille
      )}px rgba(0, 0, 0, ${opacity}))`;
    };

    if (pos > 84) {
      //never activated because cause at bottom page the cloud are higher
      this.setState({
        cloudFilter: filterTxt(5, 0.5)
      });
    } else if (pos > 67) {
      this.setState({
        cloudFilter: filterTxt(3, 0.75)
      });
    } else if (pos > 50) {
      this.setState({
        cloudFilter: filterTxt(1, 1)
      });
    } else if (pos > 34) {
      this.setState({
        cloudFilter: filterTxt(-1, 1)
      });
    } else if (pos > 17) {
      this.setState({
        cloudFilter: filterTxt(-3, 0.75)
      });
    } else {
      this.setState({
        cloudFilter: filterTxt(-5, 0.5)
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.scrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrolling);
  }

  render() {
    return (
      <div className="content">
        <FontAwesomeIcon
          icon={faCloud}
          className="cloud cloud2"
          style={{
            left: (this.state.cloudLeft - 20) * 2 + "%",
            filter: this.state.cloudFilter
          }}
        />
        <FontAwesomeIcon
          icon={faCloud}
          className="cloud"
          style={{
            left: this.state.cloudLeft * 0.5 + "%",
            filter: this.state.cloudFilter
          }}
        />

        <FontAwesomeIcon
          icon={faCloud}
          className="cloud cloud3"
          style={{
            left: this.state.cloudLeft + 15 + "%",
            filter: this.state.cloudFilter
          }}
        />
        {this.props.chapters.map((chapter, key) => {
          return <Article key={key} chapter={chapter} />;
        })}
      </div>
    );
  }
}

export default Content;
