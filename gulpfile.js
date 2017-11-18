var gulp         = require('gulp');
var sass         = require('gulp-sass');
var php          = require('gulp-connect-php');
var browserSync  = require('browser-sync').create();
var useref       = require('gulp-useref');
var gulpIf       = require('gulp-if');
var uglify       = require('gulp-uglify');
var cssnano      = require('gulp-cssnano');
var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');
var del          = require('del');
var runSequence = require('run-sequence');

// generic example
//gulp.task('task-name', function () {
//  return gulp.src('source-files') // Get source files with gulp.src
//    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//})

// compile sass to css
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('php', function() {
  php.server({
    base: 'app',
    port: 8010,
    keepalive: true
  });
});

// watch app and run different tasks
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.php', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// live reload
gulp.task('browserSync', ['php'], function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:8010/'
  })
});

// concat files and ugilfy them
gulp.task('useref', function() {
  return gulp.src('app/**/*.php')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// optimze images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

// move fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})


// clean dist directory
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// build project
gulp.task('build', function(callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});

// default task for easy start
gulp.task('default', function(callback) {
  runSequence(
    ['build', 'browserSync', 'watch'],
    callback
  )
});
