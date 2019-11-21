import React, { Component } from "react";

class TerminalInput extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="terminal">
        <span className="ml-1 mr-1 text-white">></span>
        <input
          type="text"
          id="terminalInput"
          onChange={this.props.onChange}
          autoFocus
          value={this.props.value}
          maxLength="25"
          autoComplete="off"
          placeholder="help"
          spellCheck="false"
        />
      </form>
    );
  }
}

export default TerminalInput;
