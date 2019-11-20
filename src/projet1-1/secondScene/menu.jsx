import React, { Component } from "react";
import MenuItems from "./menuItems";
import { Link as ScrollLink } from "react-scroll";
import svg from "./svg";
// import { Link } from "react-router-dom";
// import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class Menu extends Component {
  state = {};
  render() {
    return (
      <header className="row">
        <div className="col-1 back">
          <FontAwesomeIcon icon={faStepBackward} />
        </div>
        <div className="menu row col bg-white shadow border-bottom border-dark justify-content-center">
          {/* <DelayLink delay={500} to="" clickAction={this.props.fadeOut}>
          <div className="back">
            <FontAwesomeIcon icon={faStepBackward} />
          </div>
        </DelayLink> */}
          {this.props.chapters.map((chapter, key) => {
            return <MenuItems key={key} chapter={chapter} />;
          })}
          <ScrollLink
            to="form"
            // activeClass="menuItemActive" //doesn't work somehow
            smooth={true}
            offset={-150}
            duration={500}
            // onClick={this.changeURL.bind(this)}
            // className={this.activeClass()}
            className="menuItem col-3 col-sm-2 col-md-2 col-lg-1 m-2 p-0"
          >
            <div className="menuItemFix">
              <div
                className="menuItemFront"
                dangerouslySetInnerHTML={{ __html: svg.menuIcons.contact }}
                style={{
                  background: "white"
                  //   color: chapter.color
                }}
              ></div>
              <div
                className="menuItemBack"
                style={{
                  background: "white"
                  //   color: chapter.color
                }}
              >
                {/* {chapter.name} */}
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
