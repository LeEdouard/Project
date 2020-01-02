import React, { Component } from "react";
import Chart from "chart.js";
import "chart.js/dist/Chart.min.css";

class Exercice extends Component {
  state = {};

  componentDidMount() {
    this.chartDisplay();
  }
  componentDidUpdate() {
    if (
      this.props.movingToTop ||
      (this.props.reseting &&
        parseInt(this.props.exerciceData.id) ===
          parseInt(this.props.selecting)) ||
      (this.props.deleting &&
        parseInt(this.props.exerciceData.id) ===
          parseInt(this.props.selecting)) ||
      (this.props.submiting &&
        parseInt(this.props.exerciceData.id) === parseInt(this.props.selecting))
    ) {
      this.chartDisplay();
    }
  }

  chartDisplay = () => {
    const exerciceData = this.props.exerciceData;
    const newLabels = exerciceData.entries.map((entry, key) => {
      return "Jour " + entry.id;
    });
    const newValues = exerciceData.entries.map((entry, key) => {
      return entry.value;
    });
    //histoire de pouvoir le premier entry si seule
    const newPointRadius = exerciceData.entries.map((entry, key) => {
      return key === 0 ? 5 : 0;
    });
    let diff = [];
    for (let i = 1; i < exerciceData.entries.length; i++) {
      diff.push(
        parseInt(exerciceData.entries[i].value) -
          parseInt(exerciceData.entries[i - 1].value)
      );
    }
    diff.unshift(0);

    let ctx = document.getElementById(exerciceData.id);
    new Chart(ctx, {
      type: "line",
      display: false,
      data: {
        labels: newLabels,
        display: false,
        datasets: [
          {
            label: "Reps/Min/Km",
            data: newValues,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2, // 0 1 2 5
            pointRadius: newPointRadius,
            lineTension: 0.3, // 0 0.3
            borderDash: [1, 0] // 1-0 1-1 15-5
          },
          {
            label: "Difference",
            data: diff,
            type: "line",
            pointRadius: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderWidth: 0 // 0 1 2 5
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        layout: {
          padding: {
            top: 15,
            right: 10,
            left: 5
          }
        },
        scales: {
          yAxes: [
            {
              position: "left"
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        animation: {
          duration: 1500
        }
      }
    });
  };
  render() {
    return (
      <div className="exercice col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 p-2">
        <h3 className="text-white text-center">
          {this.props.exerciceData.exoName}
        </h3>
        <canvas
          id={this.props.exerciceData.id}
          // width="400"
          height="300vh"
          className="bg-light"
        ></canvas>
      </div>
    );
  }
}

export default Exercice;
