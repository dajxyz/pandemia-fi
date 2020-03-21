import React from "react";
import Chart from "react-apexcharts";
import chartOptions from "./chart-options";
import nordicsTimeSeries from "./nordics-time-series.json";

const NordicsChart = () => {
  return (
    <Chart options={chartOptions} series={nordicsTimeSeries} type="line" />
  );
};

export default NordicsChart;
