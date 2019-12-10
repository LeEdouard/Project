import React, { Component } from "react";
import DelayLink from "react-delay-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

class LoginScene extends Component {
  state = {};
  componentDidMount() {
    document
      .getElementsByClassName("loginScene")[0]
      .classList.add("opacityZero");
    setTimeout(() => {
      document
        .getElementsByClassName("loginScene")[0]
        .classList.remove("opacityZero");
    }, 0);
    document.getElementById("loginForm").style["height"] = "0rem";
    document.getElementById("signinForm").style["height"] = "0rem";
  }

  fadeout = () => {
    document
      .getElementsByClassName("loginScene")[0]
      .classList.add("opacityZero");
  };
  clicking = () => {
    if (document.getElementById("signinForm").style["height"] === "10rem") {
      document.getElementById("signinForm").style["height"] = "0rem";
    }
    let form = document.getElementById("loginForm");
    form.style["height"] === "0rem"
      ? (form.style["height"] = "10rem")
      : (form.style["height"] = "0rem");
  };
  clicking2 = () => {
    if (document.getElementById("loginForm").style["height"] === "10rem") {
      document.getElementById("loginForm").style["height"] = "0rem";
    }
    let form = document.getElementById("signinForm");
    form.style["height"] === "0rem"
      ? (form.style["height"] = "10rem")
      : (form.style["height"] = "0rem");
  };
  render() {
    return (
      <div className="loginScene text-dark">
        <h1>Fitness Log</h1>
        <div onClick={this.clicking} className="w-100 bg-dark text-white">
          <h3 className="text-center">Sign in</h3>
          <div className="arrowDown"></div>
        </div>

        <form
          id="loginForm"
          onSubmit={this.props.checking}
          className="loginForm form-group overflow-hidden m-0"
        >
          <input
            className="form-control"
            type="text"
            placeholder="account's name"
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
          />
          <input
            type="submit"
            className="form-control btn btn-dark"
            value="Login"
          />
          {this.props.error ? (
            <div
              className="alert form-control alert-secondary p-1 text-center transition05 h2rem m-0"
              role="alert"
            >
              {this.props.error}
            </div>
          ) : (
            <div
              className="alert form-control p-1 h0rem transition05 m-0"
              role="alert"
            ></div>
          )}
        </form>

        <h2 className="text-center">Keep your a record of your progress</h2>
        <h6 className="text-center">
          Test account if you don't want to bother
        </h6>
        <h6>account: TOTO, password:TOTO</h6>

        <div
          onClick={this.clicking2}
          className="signup_link w-100 bg-dark text-white"
        >
          <h3 className="text-center m-0 mt-1">Create an account</h3>
          <div className="arrowDown"></div>
        </div>
        <form
          id="signinForm"
          onSubmit={this.props.registering}
          className="loginForm form-group overflow-hidden m-0"
        >
          <input
            className="form-control"
            type="text"
            placeholder="account's name"
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
          />
          <input
            type="submit"
            className="form-control btn btn-dark"
            value="Register"
          />
          {this.props.error2 ? (
            <div
              className="alert form-control alert-secondary p-1 text-center transition05 h2rem m-0"
              role="alert"
            >
              {this.props.error2}
            </div>
          ) : (
            <div
              className="alert form-control p-1 h0rem transition05 m-0"
              role="alert"
            ></div>
          )}
        </form>
        <div className="loading m-2"></div>
        <DelayLink delay={1000} to="" clickAction={this.fadeout}>
          <div className="back bg-dark text-white">
            <FontAwesomeIcon icon={faStepBackward} />
          </div>{" "}
        </DelayLink>
      </div>
    );
  }
}

export default LoginScene;
