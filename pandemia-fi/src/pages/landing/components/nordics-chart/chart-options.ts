const chartLabelFormatter = (y: number): string =>
  `${(y / 50000).toFixed(4)}% väestöstä`;

const chartOptions = Object.freeze({
  chart: {
    locales: [
      {
        name: "fi",
        options: {
          months: [
            "Tammikuu",
            "Helmikuu",
            "Maaliskuu",
            "Huhtikuu",
            "Toukokuu",
            "Kesäkuu",
            "Heinäkuu",
            "Elokuu",
            "Syyskuu",
            "Lokakuu",
            "Marraskuu",
            "Joulukuu"
          ],
          shortMonths: [
            "Tammikuuta",
            "Helmikuuta",
            "Maaliskuuta",
            "Huhtikuuta",
            "Toukokuuta",
            "Kesäkuuta",
            "Heinäkuuta",
            "Elokuuta",
            "Syyskuuta",
            "Lokakuuta",
            "Marraskuuta",
            "Joulukuuta"
          ],
          days: [
            "Sunnuntai",
            "Maanantai",
            "Tiistai",
            "Keskiviikko",
            "Torstai",
            "Perjantai",
            "Lauantai"
          ],
          shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
          toolbar: {
            exportToSVG: "Lataa SVG",
            exportToPNG: "Lataa PNG",
            exportToCSV: "Lataa CSV",
            menu: "Valikko",
            selection: "Valinta",
            selectionZoom: "Valinnan zoomaus",
            zoomIn: "Lähennä",
            zoomOut: "Loitonna",
            pan: "Panoroi",
            reset: "Nollaa zoomaus"
          }
        }
      }
    ],
    defaultLocale: "fi",
    height: 380,
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 3, 5, 3, 3],
    curve: "straight",
    dashArray: [5, 5, 0, 5, 5]
  },
  colors: ["#CD0002", "#007CBD", "#02357F", "#F9CB0D", "#F02A2E"],
  tooltip: {
    enabled: true,
    x: {
      show: true,
      format: "d.M.yyyy"
    },
    y: [
      {
        formatter: chartLabelFormatter
      },
      {
        formatter: chartLabelFormatter
      },
      {
        formatter: chartLabelFormatter
      },
      {
        formatter: chartLabelFormatter
      },
      {
        formatter: chartLabelFormatter
      }
    ]
  },
  title: {
    text: "Vahvistetut tapaukset suhteutettuna väkilukuun",
    align: "left",
    offsetX: -10
  },
  xaxis: {
    type: "datetime",
    min: new Date("25 Feb 2020").getTime(),
    labels: {
      format: "d.M"
    }
  },
  yaxis: {
    logarithmic: true,
    opposite: true,
    min: 2,
    labels: {
      formatter: (y: number) => `${(y / 50000).toFixed(4)}%`
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
    borderColor: "#f1f3fa",
    padding: {
      left: 0,
      right: 0
    }
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
});

export default chartOptions;
