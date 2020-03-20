"use strict";

var gulp = require("gulp"),
    HubRegistry = require('gulp-hub'),
    browsersync = require("browser-sync"),
    vars = require('./variables');


/**
 * Register all the tasks
 */
// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);


/**
 * Browsersync
 */
// live browser loading
function initBrowserSync(done) {
    const distPath = vars.getBaseDistPath();
    const startPath = "/" + vars.getSelectedDemo() + "/index.html";
    browsersync.init({
        startPath: startPath,
        server: {
            baseDir: distPath,
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    done();
}

function reloadBrowserSync(done) {
    browsersync.reload();
    done();
}

/**
 * Watches the changes
 */
function watchFiles() {
    const srcPath = vars.getSrcPath();
    const baseAssets = vars.getBaseAssetsPath();

    gulp.watch(srcPath + "**", gulp.series('copyHtml', reloadBrowserSync));
    gulp.watch(baseAssets + "images/**/*", gulp.series('copyImages', reloadBrowserSync));
    gulp.watch(baseAssets + "fonts/**/*", gulp.series('copyFonts', reloadBrowserSync));
    gulp.watch(baseAssets + "scss/**/*", gulp.series('compileSaas', reloadBrowserSync));
    gulp.watch(baseAssets + "js/**/*", gulp.series("compileJs", reloadBrowserSync));
}

/**
 * Default tasks
 */

// watch all changes
gulp.task("watch", gulp.parallel(watchFiles, initBrowserSync));

// default
gulp.task('default', gulp.series('copyAssets', 'copyHtml', 'copyImages', 'copyFonts', 'compileSaas', 'compileJs', 'watch'), function (done) { done(); });


// build
gulp.task("build", gulp.series('copyAssets', 'copyHtml', 'copyImages', 'copyFonts', 'compileSaas', 'compileJs'));

// doc
gulp.task("docs", function () {
    browsersync.init({
        server: {
            baseDir: "docs"
        }
    });
});