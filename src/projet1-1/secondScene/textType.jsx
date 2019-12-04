import React, { Component } from "react";
import TypePlain from "./typePlain";
import TypeCode from "./typeCode";
import TypeQuote from "./typeQuote";
import TypeChart from "./typeChart";

class TextType extends Component {
  state = {};
  render() {
    const { type, content } = this.props;

    const types = {
      text: TypePlain,
      html: TypeCode,
      css: TypeCode,
      javascript: TypeCode,
      quote: TypeQuote,
      bar: TypeChart
    };
    const CompVar = types[type];
    return (
      <section>
        <CompVar content={content} type={type} />
      </section>
    );
  }
}

export default TextType;
