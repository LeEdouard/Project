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
      this.props.submiting &&
      parseInt(this.props.exerciceData.id) === parseInt(this.props.selecting)
    ) {
      this.chartDisplay();
      console.log("sucess in updating local exercice");
    }
    console.log(this.props.exerciceData.name);
    console.log(this.props.exerciceData.id);
    console.log(this.props.selecting);
  }

  chartDisplay = () => {
    const exerciceData = this.props.exerciceData;
    const newLabels = exerciceData.entries.map((entry, key) => {
      return "Jour " + entry.id;
    });
    const newValues = exerciceData.entries.map((entry, key) => {
      return entry.value;
    });
    var ctx = document.getElementById(exerciceData.id);
    var myChart = new Chart(ctx, {
      type: "line",
      display: false,
      data: {
        labels: newLabels,
        display: false,
        datasets: [
          {
            // label: false,
            // backgroundColor: "rgba(255, 99, 132, 1)",
            data: newValues,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
            pointRadius: 0
            // display: false
          }
        ]
      },
      options: {
        legend: {
          display: false
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
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    });
  };
  render() {
    return (
      <div className="exercice col-md-6  col-sm-12 p-5">
        <h3 className="text-white text-center">
          {this.props.exerciceData.name}
        </h3>
        <canvas
          id={this.props.exerciceData.id}
          // width="400"
          height="300vh"
        ></canvas>
      </div>
    );
  }
}

export default Exercice;
