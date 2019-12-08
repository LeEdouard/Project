import React, { Component } from "react";
import MenuItems from "./menuItems";
import { Link as ScrollLink } from "react-scroll";
import svg from "./svg";
// import { Link } from "react-router-dom";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class Menu extends Component {
  state = {};
  render() {
    return (
      <header className="bg-white shadow border-bottom border-dark p-1">
        <div className="back border-right">
          <DelayLink delay={1000} to="" clickAction={this.props.fadeOut}>
            <FontAwesomeIcon icon={faStepBackward} />
          </DelayLink>
        </div>

        <div className="menu p-1">
          {this.props.chapters.map((chapter, key) => {
            return <MenuItems key={key} chapter={chapter} />;
          })}
          <ScrollLink
            to="form"
            smooth={true}
            offset={-150}
            duration={500}
            className="menuItem"
          >
            <div className="menuItemFix">
              <div
                className="menuItemFront"
                dangerouslySetInnerHTML={{ __html: svg.menuIcons.contact }}
                style={{
                  background: "white"
                }}
              ></div>
              <div
                className="menuItemBack"
                style={{
                  background: "white"
                }}
              >
                Contact
              </div>
            </div>
          </ScrollLink>
        </div>
      </header>
    );
  }
}

export default Menu;
