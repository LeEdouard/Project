import React, { Component } from "react";

class TypeChart extends Component {
  state = {};
  render() {
    const { content } = this.props;
    const parsed = JSON.parse(content);
    return (
      <div className="border-right">
        {parsed.data.map((elem, key) => {
          return (
            <div key={key} className="row">
              <div className="bar-label col-2 border-bottom border-top">
                {elem.label}
              </div>
              <div className="col-10">
                <div
                  className="bar border-bottom border-top"
                  style={{
                    width: `${(elem.value / parsed.maxValue) * 100}%`,
                    height: 100,
                    background: elem.bgColor,
                    color: elem.color
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TypeChart;
