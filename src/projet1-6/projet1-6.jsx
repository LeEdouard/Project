import React, { Component } from "react";
import Circle from "./circle";
import Ellipse from "./ellipse";
import Rectangle from "./rectangle";

class Projet16 extends Component {
  state = {
    elements: [],
    fillInputColor: "",
    strokeInputColor: "",
    typeSelect: ""
  };
  componentDidMount() {
    this.setState({
      fillInputColor: document.getElementsByTagName("select")[1].value
    });
    this.setState({
      strokeInputColor: document.getElementsByTagName("select")[2].value
    });
    this.setState({
      typeSelect: document.getElementsByTagName("select")[0].value
    });
    setTimeout(() => {
      this.setCodeText();
    }, 0);
    setTimeout(() => {
      this.setDownloadCode();
    }, 0);
  }

  setNewShape = (shape, it, fill, stroke, dur) => {
    if (shape === "circle") {
      let para = {
        r: [],
        cx: [],
        cy: []
      };
      for (let i = 0; i < it; i++) {
        let r = Math.floor(Math.random() * 100) + 30;
        let cx = Math.floor(Math.random() * 150) + r;
        let cy = Math.floor(Math.random() * 150) + r;
        para.r[i] = r;
        para.cx[i] = cx;
        para.cy[i] = cy;
      }
      const defaultStarter = [...this.state.elements];
      defaultStarter[defaultStarter.length] = {
        type: "circle",
        cx: para.cx.join(";"),
        cy: para.cy.join(";"),
        r: para.r.join(";"),
        fill: fill,
        stroke: stroke,
        dur: dur + "s"
      };
      this.setState({ elements: defaultStarter });
    } else if (shape === "ellipse") {
      let para = {
        rx: [],
        ry: [],
        cx: [],
        cy: []
      };
      for (let i = 0; i < it; i++) {
        let rx = Math.floor(Math.random() * 100) + 30;
        let ry = Math.floor(Math.random() * 100) + 30;
        let cx = Math.floor(Math.random() * 150) + rx;
        let cy = Math.floor(Math.random() * 150) + ry;
        para.rx[i] = rx;
        para.ry[i] = ry;
        para.cx[i] = cx;
        para.cy[i] = cy;
      }
      const defaultStarter = [...this.state.elements];
      defaultStarter[defaultStarter.length] = {
        type: "ellipse",
        cx: para.cx.join(";"),
        cy: para.cy.join(";"),
        rx: para.rx.join(";"),
        ry: para.ry.join(";"),
        fill: fill,
        stroke: stroke,
        dur: dur + "s"
      };
      this.setState({ elements: defaultStarter });
    } else if (shape === "rectangle") {
      let para = {
        width: [],
        height: [],
        x: [],
        y: [],
        rx: []
      };
      for (let i = 0; i < it; i++) {
        let width = Math.floor(Math.random() * 200) + 30;
        let height = Math.floor(Math.random() * 200) + 30;
        let x = Math.floor(Math.random() * 150) + 0;
        let y = Math.floor(Math.random() * 150) + 0;
        let rx = Math.floor(Math.random() * 100) + 0;
        para.width[i] = width;
        para.height[i] = height;
        para.x[i] = x;
        para.y[i] = y;
        para.rx[i] = rx;
      }
      const defaultStarter = [...this.state.elements];
      defaultStarter[defaultStarter.length] = {
        type: "rectangle",
        width: para.width.join(";"),
        height: para.height.join(";"),
        x: para.x.join(";"),
        y: para.y.join(";"),
        rx: para.rx.join(";"),
        fill: fill,
        stroke: stroke,
        dur: dur + "s"
      };
      this.setState({ elements: defaultStarter });
    }

    setTimeout(() => {
      this.setCodeText();
    }, 0);
    setTimeout(() => {
      this.setDownloadCode();
    }, 0);
  };

  setCodeText = () => {
    document.getElementById("code").innerText = document.getElementById(
      "svg"
    ).innerHTML;
  };

  setDownloadCode = () => {
    const filename = "svg.svg";
    const text = document.getElementById("svg").innerHTML;
    document
      .getElementsByTagName("a")[0]
      .setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
    document.getElementsByTagName("a")[0].setAttribute("download", filename);
  };

  submiting = e => {
    e.preventDefault();
    this.setNewShape(
      e.target[0].value,
      parseInt(e.target[1].value) ? e.target[1].value : 1,
      e.target[2].value,
      e.target[3].value,
      parseInt(e.target[4].value) ? e.target[4].value : 1
    );
  };

  typeChanging = e => {
    this.setState({ typeSelect: e.target.value });
  };

  fillChanging = e => {
    this.setState({ fillInputColor: e.target.value });
  };

  strokeChanging = e => {
    this.setState({ strokeInputColor: e.target.value });
  };

  render() {
    const types = {
      circle: Circle,
      ellipse: Ellipse,
      rectangle: Rectangle
    };
    const colorsName = [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DimGrey",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Grey",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen"
    ];
    return (
      <div className="svg_random">
        <p>
          L'idée m'est venue après avoir vu{" "}
          <a href="https://www.youtube.com/watch?v=bRIL9kMJJSc">
            cette vidéo sur youtube
          </a>
          , qui parle des différentes combinaisons de positionnement de cercles.
        </p>
        <div id="svg">
          <svg height="400" width="400">
            <desc>This SVG was created on https://edouard-dev.com</desc>
            <g
              style={{
                fillOpacity: 0.3
              }}
            >
              {this.state.elements.map((el, key) => {
                const Shape = types[el.type];
                return <Shape key={key} tag={key} el={el} />;
              })}
            </g>
          </svg>
        </div>

        <form
          className="form-group"
          style={{ width: "70%", margin: "auto" }}
          onSubmit={this.submiting}
        >
          <select id="type" className="col" onChange={this.typeChanging}>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
            <option value="rectangle">Rectangle</option>
          </select>
          <input
            className="form-control"
            type="text"
            placeholder="variety"
            required
            value="100"
          />
          <div className="row m-0 p-0">
            <label htmlFor="fill" className="col text-right my-auto">
              Background:
            </label>
            <select id="fill" className="col" onChange={this.fillChanging}>
              {colorsName.map((color, key) => {
                return (
                  <option
                    key={key}
                    value={color}
                    selected={color == "Purple" ? true : false}
                  >
                    {color}
                  </option>
                );
              })}
            </select>
            <div
              className="btn col"
              style={{ background: this.state.fillInputColor }}
            ></div>
          </div>
          <div className="row m-0 p-0">
            <label htmlFor="stroke" className="col text-right my-auto">
              Line:
            </label>
            <select id="stroke" className="col" onChange={this.strokeChanging}>
              {colorsName.map((color, key) => {
                return (
                  <option
                    key={key}
                    value={color}
                    selected={color == "Purple" ? true : false}
                  >
                    {color}
                  </option>
                );
              })}
            </select>
            <div
              className="btn col"
              style={{ background: this.state.strokeInputColor }}
            ></div>
          </div>

          <input
            className="form-control"
            type="text"
            placeholder="duration"
            value="100"
            required
          />
          <input
            className="form-control btn btn-dark"
            type="submit"
            value="Add"
          />
        </form>
        <a href="data:text/plain;charset=utf-8,nothing">
          <button className="w-100 mt-5 btn btn-dark">Download</button>
        </a>
        <h4 className="text-center">or copypaste this:</h4>
        <div id="code" style={{ width: "70%", margin: "auto" }}></div>
      </div>
    );
  }
}

export default Projet16;
