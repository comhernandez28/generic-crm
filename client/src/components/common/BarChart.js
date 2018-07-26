import React from "react";
import { Bar } from "react-chartjs-2";

export default ({ chartData, options }) => {
  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};
