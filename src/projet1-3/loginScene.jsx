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
  }
  onchange = e => {
    const newCredentials = { ...this.state.credentials };
    newCredentials[e.target.id] = e.target.value;
    this.setState({ credentials: newCredentials });
  };
  render() {
    return (
      <div className="loginScene">
        <form onSubmit={this.props.checking} className="loginForm">
          <input id="login" type="text" placeholder="account's name" />
          <input id="pwd" type="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>
        {this.props.error && (
          <div className="alert alert-danger m-1 p-1" role="alert">
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default LoginScene;
