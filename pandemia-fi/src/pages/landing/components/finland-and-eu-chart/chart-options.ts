import nordicsChartOptions from "../nordics-chart/chart-options";

const chartOptions = Object.freeze({
  ...nordicsChartOptions,
  stroke: {
    width: [3, 3, 3, 3, 5],
    curve: "straight",
    dashArray: [5, 5, 5, 5, 0]
  },
  colors: ["#70B18F", "#6B7DA8", "#CA6975", "#E7D485", "#02357F"]
});

export default chartOptions;
