import React from "react";

// styles
import "./Dashboard.css";

// dashboard component
import Card from "./components/Card";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <Card />
      </div>
    </div>
  );
}
