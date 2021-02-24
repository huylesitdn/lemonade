import React from "react";
import "./index.scss";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    eth: 4000,
    date: "Jan 28, 2021",
  },
  {
    eth: 3000,
    date: "Jan 28, 2021",
  },
  {
    eth: 2000,
    date: "Jan 28, 2021",
  },
  {
    eth: 2780,
    date: "Jan 28, 2021",
  },
  {
    eth: 1890,
    date: "Jan 28, 2021",
  },
  {
    eth: 2390,
    date: "Jan 28, 2021",
  },
  {
    eth: 3490,
    date: "Jan 28, 2021",
  },
];

const Charts = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="eth" stroke="#5856D6" />
        <Line
          type="monotone"
          dataKey="date"
          stroke="green"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Charts;
