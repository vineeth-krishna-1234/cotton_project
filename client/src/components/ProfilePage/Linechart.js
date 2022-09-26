import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
function StatChart() {
  return (
    <div>
      <div id="line_chart">
        <Line
          data={{
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
              {
                label: "your assessment",
                data: [6, 5, 7, 4, 8, 3, 9, 2, 10, 1],
                borderColor: "rgba(83, 214, 17)",
              },
              {
                label: "Hod assessment",
                data: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6],
                borderColor: "rgba(115, 199, 185)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
export default StatChart;
