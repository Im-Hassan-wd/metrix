import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sep 10",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep 13",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep 14",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Sep 15",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sep 16",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sep 17",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={50}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#EEF0FA" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
