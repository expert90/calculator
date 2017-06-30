var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    cleanCss = require('gulp-clean-css'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    sourcemaps = require('gulp-sourcemaps');
    ts = require("gulp-typescript");
    tsProject = ts.createProject("tsconfig.json", { typescript: require("typescript")});

var paths = {
  scripts: 'client/src/js/**/*.*',
  vendors: [
    'node_modules/@angular/**/*.js',
    'node_modules/bootstrap/**/*.*',
    'node_modules/rxjs/**/*.js',
    'node_modules/core-js/**/*.*',
    'node_modules/zone.js/**/*.js',
    'node_modules/chart.js/**/*.js',
    'node_modules/tslib/**/*.*',
    'node_modules/systemjs/**/*.js',
    //'node_modules/primeng/**/*.js',
    'node_modules/primeng/**/*.*',
    'node_modules/font-awesome/**/*.*'
  ],
  ts: 'client/src/app/**/*.ts',
  styles: [
    'client/src/**/*.css'
  ],
  images: 'client/src/img/**/*.*',
  views: 'client/src/**/*.html'
};

/**
 * Handle vendor files
 */
gulp.task('vendors', function () {
  return gulp.src(paths.vendors, {base: "./node_modules"})
      .pipe(gulp.dest('public/build/vendors/'));
});

/**
 * Handle components from index
 */
gulp.task('usemin', function () {
  return gulp.src(paths.views)
      .pipe(usemin({
        js: [minifyJs(), 'concat'],
        css: [cleanCss({keepSpecialComments: 0}), 'concat']
      }))
      .pipe(gulp.dest('public/build/'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less', 'custom-ts']);

gulp.task('custom-images', function () {
  return gulp.src(paths.images)
      .pipe(gulp.dest('public/build/img'));
});

gulp.task('custom-ts', function () {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('public/build/app'));
});

gulp.task('custom-js', function () {
  return gulp.src(paths.scripts)
      .pipe(minifyJs())
      .pipe(concat('qeti.min.js'))
      .pipe(gulp.dest('public/build/js'));
});

gulp.task('custom-less', function () {
  return gulp.src(paths.styles)
      .pipe(less())
      .pipe(gulp.dest('public/build/'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom-dev', ['custom-images', 'custom-js-dev', 'custom-less-dev', 'custom-ts']);

gulp.task('custom-js-dev', function () {
  return gulp.src(paths.scripts)
      .pipe(sourcemaps.init())
        .pipe(minifyJs())
        .pipe(concat('scripts.min.js'))
      .pipe(sourcemaps.write('js'))
      .pipe(gulp.dest('public/build/js'));
});

gulp.task('custom-less-dev', function () {
  return gulp.src(paths.styles)
      .pipe(sourcemaps.init())
        .pipe(less())
      .pipe(sourcemaps.write('css'))
      .pipe(gulp.dest('public/build'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function () {
  gulp.watch([paths.images], ['custom-images']);
  gulp.watch([paths.styles], ['custom-less-dev']);
  gulp.watch([paths.scripts], ['custom-js-dev']);
  gulp.watch([paths.views], ['usemin']);
});

/**
 * Live reload server
 */
gulp.task('webserver', function () {
  connect.server({
    root: 'public/build',
    livereload: true,
    port: 8888
  });
});

gulp.task('common', ['usemin', 'vendors']);

/**
 * Gulp tasks
 */
gulp.task('build-dev', ['common', 'build-custom-dev']);
gulp.task('build', ['common', 'build-custom']);
gulp.task('default', ['build-dev', 'webserver', 'watch']);
