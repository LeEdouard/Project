import React, { Component } from "react";
import { blue } from "ansi-colors";

class TypeChart extends Component {
  state = {
    data: [
      {
        id: 0,
        label: "label_1",
        value: 50,
        bgColor: "blue",
        color: "white"
      },
      {
        id: 1,
        label: "label_2",
        value: 75,
        bgColor: "red",
        color: "white"
      }
    ],
    maxValue: 100
  };
  render() {
    const { content, type } = this.props;

    return (
      <div className="border">
        {this.state.data.map(elem => {
          return (
            <p
              className="border"
              style={{
                width: `${elem.value}%`,
                height: 100,
                background: elem.bgColor,
                color: elem.color
              }}
            >
              <p style={{ overflow: "break-word" }}>{JSON.stringify(elem)}</p>
            </p>
          );
        })}
      </div>
    );
  }
}

export default TypeChart;
