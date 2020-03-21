/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Apex Pie Charts
 */

//
// SIMPLE PIE CHART
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c","#e3eaef"];
var dataColors = $("#simple-pie").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'pie',
    }, 
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#simple-pie"),
    options
);

chart.render();


//
// SIMPLE DONUT CHART
//
var colors = ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"];
var dataColors = $("#simple-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    }, 
    series: [44, 55, 41, 17, 15],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#simple-donut"),
    options
);

chart.render();


//
// MONOCHROME PIE CHART
//
var options = {
    chart: {
        height: 320,
        type: 'pie',
    }, 
    series: [25, 15, 44, 55, 41, 17],
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    theme: {
        monochrome: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#monochrome-pie"),
    options
);

chart.render();

//
// GRADIENT DONUT CHART
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c","#e3eaef"];
var dataColors = $("#gradient-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    }, 
    series: [44, 55, 41, 17, 15],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }],
    fill: {
        type: 'gradient'
    }
}

var chart = new ApexCharts(
    document.querySelector("#gradient-donut"),
    options
);

chart.render();


//
// PATTERNED DONUT CHART
//
var colors = ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"];
var dataColors = $("#patterned-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
        dropShadow: {
          enabled: true,
          color: '#111',
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
    },
    stroke: {
        show: true,
        width: 2,
    },
    series: [44, 55, 41, 17, 15],
    colors: colors,
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
    type: 'pattern',
      opacity: 1,
      pattern: {
        enabled: true,
        style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'], 
      },
    },
    states: {
      hover: {
        enabled: false
      }
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#patterned-donut"),
    options
);

chart.render();


//
// PIE CHART WITH IMAGE FILL
//
var colors = ["#39afd1", "#ffbc00", "#727cf5", "#0acf97"];
var dataColors = $("#image-pie").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'pie',
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    colors: colors,
    series: [44, 33, 54, 45],
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
             src: ['assets/images/small/small-1.jpg', 'assets/images/small/small-2.jpg', 'assets/images/small/small-3.jpg', 'assets/images/small/small-4.jpg'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#image-pie"),
    options
);

chart.render();


//
// DONUT UPDATE
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c"];
var dataColors = $("#update-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [44, 55, 13, 33],
    colors: colors,
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#update-donut"),
    options
);

chart.render();

function appendData() {
    var arr = chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    return arr;
}

function removeData() {
    var arr = chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.pop();
    return arr;
}

function randomize() {
    return chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
}

function reset() {
    return options.series;
}

document.querySelector("#randomize").addEventListener("click", function () {
    chart.updateSeries(randomize());
});

document.querySelector("#add").addEventListener("click", function () {
    chart.updateSeries(appendData());
});

document.querySelector("#remove").addEventListener("click", function () {
    chart.updateSeries(removeData());
});

document.querySelector("#reset").addEventListener("click", function () {
    chart.updateSeries(reset());
});