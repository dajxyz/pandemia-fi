/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Widgets
 */


Apex.grid = {
    padding: {
        right: 0,
        left: 0
    }
}

Apex.dataLabels = {
    enabled: false
}

var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


$(document).ready(function () {
    "use strict";
    // data for the sparklines that appear below header area
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    // the default colorPalette for this dashboard
    var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

    var labelsSales = [];
    for (var i=1; i<=24;i++) {
        labelsSales.push('2018-09-' + i);
    }
    var colors = ["#3688fc"];
    var dataColors = $("#sales-spark").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var salesspark = {
        chart: {
            type: 'area',
            height: 172,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        fill: {
            opacity: 0.2,
        },
        series: [{
            name: 'Hyper Sales',
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0
        },
        colors: colors,
        labels: labelsSales,
        title: {
            text: '$424,652',
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: '24px'
            }
        },
        subtitle: {
            text: 'Sales',
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: '14px'
            }
        }
    }
    new ApexCharts(document.querySelector("#sales-spark"), salesspark).render();

    var colors = ["#0acf97"];
    var dataColors = $("#profit-spark").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var profitspark = {
        chart: {
            type: 'bar',
            height: 172,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 0,
            curve: 'straight'
        },
        fill: {
            opacity: 0.5,
        },
        series: [{
            name: 'Net Profits ',
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0
        },
        colors: colors,
        title: {
            text: '$135,965',
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: '24px'
            }
        },
        subtitle: {
            text: 'Profits',
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: '14px'
            }
        }
    }

    new ApexCharts(document.querySelector("#profit-spark"), profitspark).render();

    // Other Sparkline

    var colors = ["#734CEA"];
    var dataColors = $("#spark1").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark1 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#34bfa3"];
    var dataColors = $("#spark2").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark2 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#f4516c"];
    var dataColors = $("#spark3").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark3 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#00c5dc"];
    var dataColors = $("#spark4").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark4 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }

    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();
    new ApexCharts(document.querySelector("#spark4"), spark4).render();
});


//
// Campaign Sent Chart
//
var colors = ["#727cf5"];
var dataColors = $("#campaign-sent-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options1 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#campaign-sent-chart"), options1).render();


// 
// New Leads Chart
//
var colors = ["#727cf5"];
var dataColors = $("#new-leads-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        type: 'line',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    colors: colors,
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#new-leads-chart"), options2).render();


//
// Deals Charts
//
var colors = ["#727cf5"];
var dataColors = $("#deals-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options3 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#deals-chart"), options3).render();

//
// Booked Revenue Chart
//
var colors = ["#727cf5"];
var dataColors = $("#booked-revenue-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options4 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#booked-revenue-chart"), options4).render();