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

// env variables
var env = 'dev';
var production = false;

// set production flags
if ( process.env.NODE_ENV == 'production') {
  env = 'production';
  production = true;
}

// compile sass to css
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe( sass() )
    .pipe( gulpIf( production, cssnano() ) )
    .pipe( gulp.dest( production ? 'dist/css' : 'app/css' ) )
    .pipe( gulpIf( !production,  browserSync.reload({
          stream: true
        })
       )
     );
});

gulp.task('php', function() {
  php.server({
    base: 'app',
    port: 8010,
    keepalive: true
  });
});

// watch app and run different tasks
gulp.task( 'watch', ['browserSync', 'sass'], function() {
  gulp.watch( 'app/scss/**/*.scss', ['sass'] );
  gulp.watch( 'app/**/*.php', browserSync.reload );
  gulp.watch( 'app/js/**/*.js', browserSync.reload );
});

// live reload
gulp.task( 'browserSync', ['php'], function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:8010/'
  })
});

// concat files and ugilfy them
gulp.task( 'useref', function() {
  return gulp.src( 'app/**/*.php' )
    .pipe( useref() )
    // TODO why is this choking gulp all of a sudden
    //.pipe( gulpIf( '*.js', uglify() ) )
    .pipe( gulpIf( '*.css', cssnano() ) )
    .pipe( gulp.dest( 'dist' ) )
});

// optimze images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe( cache( imagemin({
          interlaced: true
        })
       )
     )
    .pipe( gulp.dest( 'dist/images' ) )
});

// move fonts
gulp.task( 'fonts', function() {
  return gulp.src( 'app/fonts/**/*' )
    .pipe( gulp.dest( 'dist/fonts' ) )
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
