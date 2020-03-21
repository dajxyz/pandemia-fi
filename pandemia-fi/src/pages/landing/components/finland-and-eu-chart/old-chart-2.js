var options = {
  stroke: {
    width: [3, 3, 3, 3, 5],
    curve: "straight",
    dashArray: [5, 5, 5, 5, 0]
  },
  colors: ["#70B18F", "#6B7DA8", "#CA6975", "#E7D485", "#02357F"],

  xaxis: {
    type: "datetime",
    min: new Date("21 Feb 2020").getTime(),
    labels: {
      format: "d.M"
    }
  },

  yaxis: {
    logarithmic: true,
    opposite: true,
    min: 9,
    labels: {
      formatter: function(y) {
        return (y / 50000).toFixed(4) + "%";
      }
    }
  },
  legend: {
    horizontalAlign: "center",
    position: "bottom",
    offsetY: 3,
    itemMargin: {
      horizontal: 10
    }
  },
  grid: {
    borderColor: "#f1f3fa"
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          toolbar: {
            show: !1
          }
        },
        legend: {
          show: !1
        }
      }
    }
  ]
};

(chart = new ApexCharts(
  document.querySelector("#daniel-chart3"),
  options
)).render();
