import React from "react";

// styles
import "./Dashboard.css";

// dashboard component
import Card from "./components/Card";
import DoughnutChart from "./components/DoughnutChart";
import Order from "./components/Order";
import BarChart from "./components/BarChart";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Card />
      <DoughnutChart />
      <Order />
      <div className="summary">
        <BarChart />
      </div>
    </div>
  );
}
