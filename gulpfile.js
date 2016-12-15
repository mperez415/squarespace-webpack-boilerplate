/* ==========================================================
** EXPOSE REQUIRED PACKAGES
========================================================== */
const gulp = require('gulp');
const inline = require('gulp-inline');

/**
 * Critical Block
 * A critical styles task that inlines critical styles
 * into a critical.block file.
 */
gulp.task('critical-block', function () {
  return gulp.src('./src/styles/critical/critical.block')
    .pipe(inline({
      base: './src/'
    }))
    .pipe(gulp.dest('./src/template/blocks/'));
});
