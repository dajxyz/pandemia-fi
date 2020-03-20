var gulp = require("gulp"),
    newer = require("gulp-newer"),
    imagemin = require("gulp-imagemin"),
    vars = require('../variables');

// image processing
const copyImages = function () {
    const distDemoFolder = vars.getDistAssetsPath();
    const baseAssets = vars.getBaseAssetsPath();

    var out = distDemoFolder + "images";

    return gulp
        .src(baseAssets + "images/**/*")
        .pipe(newer(out))
        .pipe(imagemin())
        .pipe(gulp.dest(out));
}

gulp.task(copyImages);