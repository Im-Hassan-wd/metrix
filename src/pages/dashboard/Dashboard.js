import React from "react";

// styles
import "./Dashboard.css";

// dashboard component
import Card from "./components/Card";
import DoughnutChart from "./components/DoughnutChart";
import Order from "./components/Order";
// import Barchart from "./components/Barchart";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Card />
      <DoughnutChart />
      <Order />
      {/* <Barchart /> */}
    </div>
  );
}
