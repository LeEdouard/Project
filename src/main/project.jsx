import React, { Component } from "react";
// import { Link } from "react-router-dom";
import DelayLink from "react-delay-link";

class Project extends Component {
  state = {};
  componentDidMount() {}
  clickEffect = e => {
    e.target.style["transition"] = "1s";
    e.target.style["transform"] = "scale(10)";
  };
  render() {
    const project = this.props.project;
    return (
      <div className="projetAll">
        <DelayLink
          delay={1000}
          to={`/${project.link}`}
          clickAction={this.props.fadeout}
        >
          <div
            id={project.id}
            onClick={this.clickEffect}
            className={project.className}
          >
            {project.label}
          </div>
        </DelayLink>
        <div className="description" title="test">
          {project.description}
        </div>
      </div>
    );
  }
}

export default Project;
