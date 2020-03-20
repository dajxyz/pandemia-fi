/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Dashboard Analytics
 */

!function ($) {
    "use strict";

    var AnalyticsDashboard = function () {
        this.$body = $("body"),
        this.charts = []
    };

    AnalyticsDashboard.prototype.initCharts = function() {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
        };

        function getRandomData(number) {
            var graphData = [];
            for (var idx=0; idx < number; idx++) {
                graphData.push(Math.floor(Math.random() * Math.floor(90)) + 30);
            }
            return graphData;
        }

        function getDaysInMonth(month, year) {
            var date = new Date(year, month, 1);
            var days = [];
            var idx = 0;
            while (date.getMonth() === month && idx < 15) {
                var d = new Date(date);
               days.push(d.getDate() + " " +  d.toLocaleString('en-us', { month: 'short' }));
               date.setDate(date.getDate() + 1);
               idx += 1;
            }
            return days;
       }

       var now = new Date();
       var labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());
       
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-overview").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
       var options = {
            chart: {
                height: 309,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4
            },
            series: [{
                name: 'Sessions',
                data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
            }],
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            colors: colors,
            xaxis: {
                type: 'string',
                categories: labels,
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    
                }
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [45, 100]
                  },
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#sessions-overview"),
            options
        );

        chart.render();

        // --------------------------------------------------
        var categories = [];
        for (var i=10; i>=1; i--) {
            categories.push(i + ' min ago');
        }
        function getRandomData(length) {
            var d = [];
            for (var idx=0; idx<length; idx ++) {
                d.push(Math.floor(Math.random() * 90) + 10);
            }
            return d;
        }
        
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#views-min").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 150,
                type: 'bar',
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape:"rounded",
                    columnWidth: "22%",
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                offsetY: -24,
                style: {
                    fontSize: '12px',
                    colors: ["#98a6ad"]
                }
            },
            series: [{
                name: 'Views',
                data: getRandomData(10)
            }],
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            colors: colors,
            xaxis: {
                categories: categories,
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    inverseColors:!0,
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: .25,
                    gradientToColors: void 0,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0,100,100,100]
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                },
            },
        }

        var chart2 = new ApexCharts(
            document.querySelector("#views-min"),
            options
        );

        chart2.render();

        
        // ------------ sessions by browser
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-browser").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 343,
                type: 'radar',
            },
            series: [{
                name: 'Usage',
                data: [80, 50, 30, 40, 60, 20],
            }],
            labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
            plotOptions: {
                radar: {
                    size: 130,
                    polygons: {
                        strokeColor: '#e9e9e9',
                        fill: {
                            colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            colors: colors,
            yaxis: {
                labels: {
                    formatter: function(val) {
                        return val + "%";
                    }
                },
            },
            dataLabels: {
                enabled: true
            },
            markers: {
                size: 4,
                colors: ['#fff'],
                strokeColor: colors[0],
                strokeWidth: 2,
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#sessions-browser"),
            options
        );

        chart.render();

        /* ------------- visitors by country */
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#country-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 320,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            series: [{
                name: 'Sessions',
                data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12]
            }],
            xaxis: {
                categories: ["India", "China", "United States", "Japan", "France", "Italy", "Netherlands", "United Kingdom", "Canada", "South Korea"],
                axisBorder: {
                    show: false,
                },
                labels: {
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            grid: {
                strokeDashArray: [5]
            }
        }

       var chart = new ApexCharts(
            document.querySelector("#country-chart"),
            options
        );
        
        chart.render();

        /* ------------- visitors by os */
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-os").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 268,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'OS',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 8541
                            }
                        }
                    }
                }
            },
            colors: colors,
            series: [44, 55, 67, 83],
            labels: ['Windows', 'Macintosh', 'Linux', 'Android']
        }
        
        var chart = new ApexCharts(
            document.querySelector("#sessions-os"),
            options
        );
        
        chart.render();
        
    },
    // inits the map
    AnalyticsDashboard.prototype.initMaps = function() {
        //various examples
        if ($('#world-map-markers').length > 0) {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                regionStyle: {
                    initial: {
                        fill: 'rgba(93,106,120,0.2)'
                    }
                },
                series: {
                    regions: [{ values: {
                                 "KR": "#e6ebff",
                                 "CA": "#b3c3ff",
                                 "GB": "#809bfe",
                                 "NL": "#4d73fe",
                                 "IT": "#1b4cfe",
                                 "FR": "#727cf5",
                                 "JP": "#e7fef7",
                                 "US": "#e7e9fd",
                                 "CN": "#8890f7",
                                 "IN": "#727cf5",
                    }, attribute: 'fill' }]
                },
                backgroundColor: 'transparent',
                zoomOnScroll: false
            });
        }
    },
    //initializing various components and plugins
    AnalyticsDashboard.prototype.init = function () {
        var $this = this;
        // font
        // Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';        
        
        //default date range picker
        $('#dash-daterange').daterangepicker({
            singleDatePicker: true
        });

        // init charts
        this.initCharts();

        //init maps
        this.initMaps();

        // active counts
        window.setInterval(function() {
            var ac = Math.floor(Math.random() * 600 + 150);
            $("#active-users-count").text(ac);
            $("#active-views-count").text(Math.floor(Math.random() * ac + 200));
        }, 2000);
    },

    //init flotchart
    $.AnalyticsDashboard = new AnalyticsDashboard, $.AnalyticsDashboard.Constructor = AnalyticsDashboard
}(window.jQuery),

    //initializing Dashboard
    function ($) {
        "use strict";
        $.AnalyticsDashboard.init()
    }(window.jQuery);