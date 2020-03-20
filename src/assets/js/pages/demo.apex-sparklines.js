/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Apex Sparklines Charts
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

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']


var colors = ['#DCE6EC'];
var dataColors = $("#spark1").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark1 = {
    chart: {
        type: 'area',
        height: 160,
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
        name: 'Hyper Sales ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: colors,
    title: {
        text: '$424,652',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Sales',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}
new ApexCharts(document.querySelector("#spark1"), spark1).render();

var colors = ['#DCE6EC'];
var dataColors = $("#spark2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark2 = {
    chart: {
        type: 'area',
        height: 160,
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
        name: 'Hyper Expenses ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: colors,
    title: {
        text: '$235,312',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Expenses',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark2"), spark2).render();


var colors = ['#0acf97'];
var dataColors = $("#spark3").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark3 = {
    chart: {
        type: 'area',
        height: 160,
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
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Profits',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark3"), spark3).render();


var colors = ['#727cf5'];
var dataColors = $("#chart1").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options1 = {
    chart: {
        type: 'line',
        width: 140,
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


var colors = ['#0acf97'];
var dataColors = $("#chart2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
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


var colors = ['#ffbc00'];
var dataColors = $("#chart3").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options3 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
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


var colors = ['#fa5c7c'];
var dataColors = $("#chart4").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options4 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
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


var colors = ['#727cf5'];
var dataColors = $("#chart5").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options5 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
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


var colors = ['#0acf97'];
var dataColors = $("#chart6").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options6 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
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


var colors = ['#ffbc00'];
var dataColors = $("#chart7").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options7 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
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


var colors = ['#fa5c7c'];
var dataColors = $("#chart8").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options8 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
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

new ApexCharts(document.querySelector("#chart1"), options1).render();
new ApexCharts(document.querySelector("#chart2"), options2).render();
new ApexCharts(document.querySelector("#chart3"), options3).render();
new ApexCharts(document.querySelector("#chart4"), options4).render();
new ApexCharts(document.querySelector("#chart5"), options5).render();
new ApexCharts(document.querySelector("#chart6"), options6).render();
new ApexCharts(document.querySelector("#chart7"), options7).render();
new ApexCharts(document.querySelector("#chart8"), options8).render();