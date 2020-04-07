import React from "react";
import Chart from "react-apexcharts";
import chartOptions from "./chart-options";
import finlandAndEUTimeSeries from "./finland-and-eu-time-series.json";

interface FinlandAndEUChartProps {
  /** Define whether chart scale is `linear` or `logarithmic` */
  scale: ChartScaleType;
}

const chartOptionsByScale = {
  linear: {
    ...chartOptions,
    yaxis: {
      ...chartOptions.yaxis,
      logarithmic: false,
      min: 9,
    },
  },
  logarithmic: {
    ...chartOptions,
  },
};

/**
 * Finland and EU chart
 * "Vahvistetut tapaukset suhteutettuna väkilukuun"
 */
const FinlandAndEUChart = ({ scale }: FinlandAndEUChartProps) => {
  return (
    <Chart
      options={chartOptionsByScale[scale]}
      series={finlandAndEUTimeSeries}
      type="line"
    />
  );
};

export default FinlandAndEUChart;
