import React, { Component } from "react";

class LoginScene extends Component {
  state = {
    credentials: { login: "", pwd: "" }
  };
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
  }
  onchange = e => {
    const newCredentials = { ...this.state.credentials };
    newCredentials[e.target.id] = e.target.value;
    this.setState({ credentials: newCredentials });
  };
  clicking = () => {
    let form = document.getElementById("loginForm");
    form.style["height"] === "0rem"
      ? (form.style["height"] = "10rem")
      : (form.style["height"] = "0rem");

    // document.getElementById("loginForm").style["opacity"] = "0";
  };
  render() {
    return (
      <div className="loginScene">
        <h1>Fitness Log</h1>
        <div onClick={this.clicking} className="btn">
          <h3>Log in</h3>
          <div className="arrowDown"></div>
        </div>

        <form
          id="loginForm"
          onSubmit={this.props.checking}
          className="loginForm form-group overflow-hidden"
        >
          <input
            id="login"
            className="form-control"
            type="text"
            placeholder="account's name"
          />
          <input
            id="pwd"
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
              className="alert form-control alert-secondary p-1 text-center"
              role="alert"
            >
              {this.props.error}
            </div>
          ) : (
            <div className="alert form-control p-1 invisible" role="alert">
              good
            </div>
          )}
        </form>

        <div>test account | login : Edouard, password : HAHA</div>
        <div>next step account creation</div>
      </div>
    );
  }
}

export default LoginScene;
