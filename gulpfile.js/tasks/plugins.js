var gulp = require("gulp"),
    lodash = require("lodash"),
    rename = require("gulp-rename"),
    vars = require('../variables');


/*
    Copy assets/vendors from their node_module package to scss & js folder
    Read More: https://florian.ec/articles/frontend-dependencies-npm/
*/


const copyAssets = function (done) {

    const distDemoFolder = vars.getDistAssetsPath();
    const baseAssets = vars.getBaseAssetsPath();

    var mandatoryAssets = {
        js: [
            "./node_modules/jquery/dist/jquery.js",
            "./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
            "./node_modules/moment/moment.js",
            "./node_modules/metismenu/dist/metisMenu.js",
            "./node_modules/simplebar/dist/simplebar.min.js",
            "./node_modules/daterangepicker/daterangepicker.js",
            "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.js",
            "./node_modules/select2/dist/js/select2.min.js",
            "./node_modules/jquery-mask-plugin/dist/jquery.mask.min.js",
            "./node_modules/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js",
            "./node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js",
            "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js",
            "./node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js",
            "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
            "./node_modules/highlightjs/highlight.pack.min.js"
        ],
        scss: [
            "./node_modules/daterangepicker/daterangepicker.css",
            "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.css",
            "./node_modules/select2/dist/css/select2.min.css",
            "./node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css",
            "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css",
            "./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
        ],
    };

    // optional assets - mainly used for demo purpose
    var optionalAssets = {
        js: [
            "./node_modules/chart.js/dist/Chart.bundle.min.js",
            "./node_modules/d3/dist/d3.min.js",
            "./node_modules/britecharts/dist/bundled/britecharts.min.js",
            "./node_modules/datatables.net/js/jquery.dataTables.min.js",
            "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js",
            "./node_modules/datatables.net-responsive/js/dataTables.responsive.min.js",
            "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
            "./node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
            "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.html5.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.flash.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.print.min.js",
            "./node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js",
            "./node_modules/datatables.net-select/js/dataTables.select.min.js",
            "./node_modules/jquery-datatables-checkboxes/js/dataTables.checkboxes.min.js",
            "./node_modules/jquery-ui/jquery-ui.min.js",
            "./node_modules/fullcalendar/dist/fullcalendar.min.js",
            "./node_modules/gmaps/gmaps.min.js",
            "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-au-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-il-chicago-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-in-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-uk-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-ca-lcc-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-europe-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-fr-merc-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-es-merc.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-es-mill.js",
            "./node_modules/dragula/dist/dragula.min.js",
            "./node_modules/dropzone/dist/min/dropzone.min.js",
            "./node_modules/apexcharts/dist/apexcharts.min.js",
            "./node_modules/summernote/dist/summernote-bs4.min.js",
            "./node_modules/simplemde/dist/simplemde.min.js",
            "./node_modules/typeahead.js/dist/typeahead.bundle.min.js",
            "./node_modules/handlebars/dist/handlebars.min.js",
            "./node_modules/jquery-sparkline/jquery.sparkline.min.js",
            "./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
            "./node_modules/frappe-gantt/dist/frappe-gantt.min.js",
            "./node_modules/jquery.rateit/scripts/jquery.rateit.min.js"
        ],
        css: [
            "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css",
            "./node_modules/britecharts/dist/css/britecharts.min.css",
            "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css",
            "./node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css",
            "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.css",
            "./node_modules/datatables.net-select-bs4/css/select.bootstrap4.css",
            "./node_modules/fullcalendar/dist/fullcalendar.min.css",
            "./node_modules/summernote/dist/summernote-bs4.css",
            "./node_modules/simplemde/dist/simplemde.min.css",
            "./node_modules/frappe-gantt/dist/frappe-gantt.css"
        ]
    };

    //copying third party assets
    lodash(optionalAssets).forEach(function (assets, type) {
        if (type == "css") {
            gulp.src(assets).pipe(gulp.dest(distDemoFolder + "css/vendor"));
        }
        else {
            gulp.src(assets).pipe(gulp.dest(distDemoFolder + "js/vendor"));
        }
    });

    //copying required assets
    lodash(mandatoryAssets).forEach(function (assets, type) {
        if (type == "scss") {
            gulp
                .src(assets)
                .pipe(
                    rename({
                        // rename aaa.css to _aaa.scss
                        prefix: "_",
                        extname: ".scss"
                    })
                )
                .pipe(gulp.dest(baseAssets + "scss/vendor"));
        } else {
            gulp.src(assets).pipe(gulp.dest(baseAssets + "js/vendor"));
        }
    });

    done();
}

gulp.task(copyAssets);