import React from "react";
import { Bar } from "react-chartjs-2";

export default ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};
