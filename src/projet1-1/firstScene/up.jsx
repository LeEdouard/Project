import React, { Component } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// const override = {
//   margin: "0 auto",
//   borderColor: "red"
// };
class Up extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <header
        className={this.props.classList}
        style={{ top: `${this.props.top}%` }}
      >
        {/* <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={300}
          color={"#FFFFFF"}
          loading={this.state.loading}
        /> */}
        <div className="upFilter">L'aventure de la formation Front-End</div>
      </header>
    );
  }
}

export default Up;
