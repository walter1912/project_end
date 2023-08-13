const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
function compilePug() {
  return gulp.src('src/pug/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
}

function compileSass() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
}

function watchFiles() {
  gulp.watch('src/pug/**/*.pug', compilePug);
  gulp.watch('src/sass/**/*.scss', compileSass);
}
function serve() {
  browserSync.init({ server: { baseDir: "./" } });
  gulp.watch('src/pug/**/*.pug', compilePug);
  gulp.watch('src/sass/**/*.scss', compileSass);
}

exports.default = gulp.series(gulp.parallel(compilePug, compileSass), watchFiles);
exports.serve = gulp.series(serve, gulp.parallel(compilePug, compileSass));