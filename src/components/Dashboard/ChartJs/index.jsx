import React from "react";
import "./index.scss";

import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  // const data = {
  //   labels: ["ETH"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       data: [65, 2, 80, 6, 56, 4, 80],
  //     },
  //   ],
  // };

  const data = {
    datasets: [
      {
        data: [0, 5],
      },
      {
        data: [1, 2],
      },
      {
        data: [5, 2],
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Line data={data} options={options} type="line" />
    </div>
  );
};

export default LineChart;
