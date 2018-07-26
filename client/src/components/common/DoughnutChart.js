import React from "react";
import { Doughnut } from "react-chartjs-2";

export default ({ chartData, options }) => {
  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
