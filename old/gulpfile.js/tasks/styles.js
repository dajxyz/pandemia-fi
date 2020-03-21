var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    vars = require('../variables');


// compile & minify sass
const compileSaas = function () {

    const out = vars.getDistAssetsPath() + "css/";
    const baseAssets = vars.getBaseAssetsPath();

    // gulp
    //     .src([baseAssets + "/scss/icons.scss"])
    //     .pipe(sourcemaps.init())
    //     .pipe(sass()) // scss to css
    //     .pipe(
    //         autoprefixer({
    //             browsers: ["last 2 versions"]
    //         })
    //     )
    //     .pipe(gulp.dest(out))
    //     .pipe(cleanCSS())
    //     .pipe(
    //         rename({
    //             // rename app.css to icons.min.css
    //             suffix: ".min"
    //         })
    //     )
    //     .pipe(sourcemaps.write("./")) // source maps for icons.min.css
    //     .pipe(gulp.dest(out));

    return gulp
        .src([baseAssets + "/scss/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps
        .pipe(gulp.dest(out));
}

gulp.task(compileSaas);