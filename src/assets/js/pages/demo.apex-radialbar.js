/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Apex RadialBar Charts
 */

//
// BASIC RADIALBAR CHART
//
var colors = ["#39afd1"];
var dataColors = $("#basic-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
  chart: {
    height: 320,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  colors: colors,
  series: [70],
  labels: ['CRICKET'],

}

var chart = new ApexCharts(
  document.querySelector("#basic-radialbar"),
  options
);

chart.render();


//
// MULTIPLE RADIALBARS
//
var colors = ["#6c757d", "#ffbc00", "#727cf5", "#0acf97"];
var dataColors = $("#multiple-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
  chart: {
    height: 320,
    type: 'radialBar',
  },
  plotOptions: {
    circle: {
      dataLabels: {
        showOn: 'hover'
      }
    }
  },
  colors: colors,
  series: [44, 55, 67, 83],
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  responsive: [{
    breakpoint: 380,
    options: {
      chart: {
        height: 260,
      }
    }
  }]

}

var chart = new ApexCharts(
  document.querySelector("#multiple-radialbar"),
  options
);

chart.render();


//
// CIRCLE CHART - CUSTOM ANGLE
//
var colors = ['#0acf97', '#727cf5'];
var dataColors = $("#circle-angle-radial").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: -30,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,

        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: colors,
  series: [76, 67, 61, 90],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '13px',
    position: 'left',
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0
    },
    formatter: function (seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      horizontal: 1,
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        show: false
      }
    }
  }]
}

var chart = new ApexCharts(
  document.querySelector("#circle-angle-radial"),
  options
);

chart.render();


//
// CIRCLE CHART WITH IMAGE
//

var options = {
  chart: {
    height: 360,
    type: 'radialBar',
  },
  fill: {
    type: 'image',
    image: {
      src: ['assets/images/small/small-2.jpg'],
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  series: [70],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Volatility'],
  responsive: [{
    breakpoint: 380,
    options: {
      chart: {
        height: 280
      }
    }
  }]
}

var chart = new ApexCharts(
  document.querySelector("#image-radial"),
  options
);

chart.render();


//
// STROKED CIRCULAR GUAGE
//
var colors = ["#727cf5"];
var dataColors = $("#stroked-guage-radial").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
  chart: {
    height: 380,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    gradient: {
      enabled: true,
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    },
  },
  stroke: {
    dashArray: 4
  },
  colors: colors,
  series: [67],
  labels: ['Median Ratio'],
  responsive: [{
    breakpoint: 380,
    options: {
      chart: {
        height: 280
      }
    }
  }]
}

var chart = new ApexCharts(
  document.querySelector("#stroked-guage-radial"),
  options
);

chart.render();

// window.setInterval(function () {
//     chart.updateSeries([Math.floor(Math.random() * (100 - 1 + 1)) + 1])
// }, 2000)


//
// GRADIENT CIRCULAR CHART
//
var colors = ["#8f75da", "#727cf5"];
var dataColors = $("#gradient-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
  chart: {
    height: 330,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: colors,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [75],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent'],

}

var chart = new ApexCharts(
  document.querySelector("#gradient-chart"),
  options
);

chart.render();