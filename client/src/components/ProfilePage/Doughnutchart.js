import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Doughnutchart() {
  return (
    <div id="completion_chart">
      <div id="doughnut_chart">
        <div>PREVIOUS YEAR</div>
        <Doughnut
          data={{
            maintainAspectRatio: false,
            responsive: false,
            labels: ["completed"],
            datasets: [
              {
                data: [70, 30],
                backgroundColor: ["#FF8FB1", "#7A4495"],
                hoverBackgroundColor: "#6FEDD6",
              },
            ],
          }}
          options={{
            legend: {
              display: false,
              position: "right",
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }}
        />
      </div>
      <div id="doughnut_chart">
        <div>ONGOING YEAR</div>
        <Doughnut
          data={{
            maintainAspectRatio: false,
            responsive: false,
            labels: ["completed"],
            datasets: [
              {
                data: [70, 30],
                backgroundColor: ["#FF8FB1", "#7A4495"],
                hoverBackgroundColor: "#6FEDD6",
              },
            ],
          }}
          options={{
            legend: {
              display: false,
              position: "right",
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Doughnutchart;
