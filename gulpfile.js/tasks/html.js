var gulp = require("gulp"),
    fileinclude = require('gulp-file-include'),
    vars = require('../variables');

// copy html files from src folder to dist folder, also copy favicons
const copyHtml = function () {
    const baseSrc = vars.getSrcPath();
    const out = vars.getDistPath();

    // copy partials
    // gulp.src([baseSrc + '/partials/**/*']).pipe(gulp.dest(out + "/partials/"));

    return gulp
        .src([
            baseSrc + "*.html",
            baseSrc + "*.ico", // favicons
            baseSrc + "*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
}

gulp.task(copyHtml);