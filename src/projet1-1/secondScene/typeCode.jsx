import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

class TypeCode extends Component {
  state = {};
  render() {
    const { content, type } = this.props;

    return (
      <div>
        <SyntaxHighlighter
          language={type}
          style={solarizedLight}
          className="code"
        >
          {content}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default TypeCode;
