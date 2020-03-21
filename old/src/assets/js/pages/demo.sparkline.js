/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Sparkline Charts
 */

$( document ).ready(function() {

    var defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
    
    var DrawSparkline = function() {
        var dataColors = $("#sparkline1").data('colors');
        var colors = dataColors? dataColors.split(",") : defaultColors.concat();

        $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.3),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false,
            lineWidth: 1
        });

        $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: hexToRGB(colors[1], 0.3),
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false,
            lineWidth: 1
        });
        
        var dataColors = $("#sparkline2").data('colors');
        colors = dataColors? dataColors.split(",") : defaultColors.concat();
        $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '3',
            barColor: colors
        });
        
        var dataColors = $("#sparkline3").data('colors');
        colors = dataColors? dataColors.split(",") : defaultColors.concat();
        $('#sparkline3').sparkline([20, 40, 30, 10], {
            type: 'pie',
            width: '165',
            height: '165',
            sliceColors: colors
        });
    
        var dataColors = $("#sparkline4").data('colors');
        colors = dataColors? dataColors.split(",") : defaultColors.concat();
        $('#sparkline4').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: 'transparent',
            lineWidth: 2,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false
        });
    
        $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: 'transparent',
            composite: true,
            lineWidth: 2,
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false,
            highlightLineColor: 'rgba(0,0,0,1)',
            highlightSpotColor: 'rgba(0,0,0,1)'
        });

        var dataColors = $("#sparkline6").data('colors');
        colors = dataColors? dataColors.split(",") : defaultColors.concat();
        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'line',
            width: "100%",
            height: '165',
            lineColor: '#e3eaef',
            lineWidth: 2,
            fillColor: 'rgba(227,234,239,0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)'
        });

        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '5',
            composite: true,
            barColor: '#6c757d'
        });

        var colors = ['#6c757d'];
        var dataColors = $("#sparkline7").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $("#sparkline7").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
            type: 'discrete',
            width: '280',
            height: '165',
            lineColor: colors
        });



        },
        DrawMouseSpeed = function () {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex=-1; 
            var lastmousey=-1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            $('html').mousemove(function(e) {
                var mousex = e.pageX;
                var mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            var mdraw = function() {
                var md = new Date();
                var timenow = md.getTime();
                if (lastmousetime && lastmousetime!=timenow) {
                    var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max)
                        mpoints.splice(0,1);
                    mousetravel = 0;
                    $('#sparkline5').sparkline(mpoints, {
                        tooltipSuffix: ' pixels per second',
                        type: 'line',
                        width: "100%",
                        height: '165',
                        chartRangeMax: 77,
                        maxSpotColor:false,
                        minSpotColor: false,
                        spotColor:false,
                        lineWidth: 1,
                        lineColor: '#fa5c7c',
                        fillColor: 'rgba(250, 92, 124, 0.3)',
                        highlightLineColor: 'rgba(24,147,126,.1)',
                        highlightSpotColor: 'rgba(24,147,126,.2)'
                    });
                }
                lastmousetime = timenow;
                setTimeout(mdraw, mrefreshinterval);
            }
            // We could use setInterval instead, but I prefer to do it this way
            setTimeout(mdraw, mrefreshinterval); 
        };
    
    DrawSparkline();
    DrawMouseSpeed();
    
    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
            DrawMouseSpeed();
        }, 300);
    });
});

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}