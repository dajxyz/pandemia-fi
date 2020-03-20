var gulp = require("gulp"),
    vars = require('../variables');

// copy fonts from src folder to dist folder
const copyFonts = function () {
    const baseAssets = vars.getBaseAssetsPath();
    const out = vars.getDistAssetsPath() + "fonts/";

    return gulp.src([baseAssets + "fonts/**/*"]).pipe(gulp.dest(out));
}

gulp.task(copyFonts);