import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class menuItems extends Component {
  state = {};
  // changeURL() {
  //   window.history.pushState("test", "TITLE", `/${this.props.chapter.link}`);
  // }
  // activeClass = () => {
  //   if (window.location.pathname === `/${this.props.chapter.link}`) {
  //     return "menuItemActive menuItem col-3 col-sm-2 col-md-2 col-lg-1 m-2 p-0";
  //   } else {
  //     return "menuItem col-3 col-sm-2 col-md-2 col-lg-1 m-2 p-0";
  //   }
  // };
  render() {
    const chapter = this.props.chapter;
    // window.location.pathname == `/${chapter.link ? 'menuItemActive' : ''
    return (
      <ScrollLink
        to={chapter.link}
        // activeClass="menuItemActive" //doesn't work somehow
        smooth={true}
        offset={-150}
        duration={500}
        // onClick={this.changeURL.bind(this)}
        // className={this.activeClass()}
        className="menuItem"
      >
        <div className="menuItemFix">
          <div
            className="menuItemFront"
            dangerouslySetInnerHTML={{ __html: chapter.svg }}
            style={{
              background: chapter.bg,
              color: chapter.color
            }}
          ></div>
          <div
            className="menuItemBack"
            style={{
              background: chapter.bg,
              color: chapter.color
            }}
          >
            {chapter.name}
          </div>
        </div>
      </ScrollLink>
    );
  }
}

export default menuItems;
