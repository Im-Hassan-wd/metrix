import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "../../../utils/ChartData";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  return (
    <div className="doughnut card">
      <div className="card-head">
        <div>Marketing</div>
        <p>
          <small>This week</small>
          <img src="./assets/icon/chevron.svg" alt="drop down" />
        </p>
      </div>
      <Doughnut data={data} />
    </div>
  );
}
