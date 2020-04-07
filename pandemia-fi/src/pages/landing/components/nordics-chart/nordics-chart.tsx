import React from "react";
import Chart from "react-apexcharts";
import chartOptions from "./chart-options";
import nordicsTimeSeries from "./nordics-time-series.json";

interface NordicsChartProps {
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
 * Nordics chart
 * "Vahvistetut tapaukset suhteutettuna väkilukuun"
 */
const NordicsChart = ({ scale }: NordicsChartProps) => {
  return (
    <Chart
      options={chartOptionsByScale[scale]}
      series={nordicsTimeSeries}
      type="line"
    />
  );
};

export default NordicsChart;
