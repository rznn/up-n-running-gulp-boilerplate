// -------------------------------------------------------------------------
// GET THINGS SET UP
// -------------------------------------------------------------------------

// Include Gulp
var gulp = require('gulp'); 

// Require webserver
var webserver = require('gulp-webserver');

// Error handling
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

// General plugins
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Setting up Browser Sync
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// CSS plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// JS plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// Image plugins
var imagemin = require('gulp-imagemin');
var size = require('gulp-size');

// -------------------------------------------------------------------------
// TASKS
// -------------------------------------------------------------------------

// Start webserver
gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: false, // We use Browser Sync, the super-charged brother of Live Reload
      directoryListing: true,
      open: true
    }));
});

// Create a welcome task and just log a message
gulp.task('welcome', function() {
  return gutil.log('Gulp is running!')
        .beep();
});


// HTML tasks
gulp.task('html', function() {
    return gulp.src('source/*.html')
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('public'));
});

// CSS tasks

// Copy any CSS files in the source directory to public directory
gulp.task('css', function () {
    return gulp.src('source/css/**/*.*')
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('sass', function() {
    return gulp.src('source/sass/**/*.*')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())  // Process the original sources
            .pipe(sass({ includePaths: 'source/sass/**/*.*' }))
            .pipe(autoprefixer({ 'browserlist' : [
                     '> 1%',
                     'last 2 versions',
                     'Firefox ESR',
                     'ie >= 10'
                 ]
            }))
            //only uglify if gulp is ran with '--production'
            .pipe(gulpif(argv.production, cleanCSS()))
            .pipe(gulpif(argv.production, rename({suffix: '.min'})))

        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('public/assets/css'));
});

// JS tasks
gulp.task('lint', function() {
    return gulp.src('source/js/**/*.js')
        .pipe(plumber(plumberErrorHandler))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src('source/js/**/*.js')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())
            .pipe(concat('all.js'))

            //only uglify if gulp is ran with '--production'
            .pipe(gulpif(argv.production, uglify()))
            .pipe(gulpif(argv.production, rename({suffix: '.min'})))

        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/js'));
});

// Image tasks
gulp.task('images', function() {
    return gulp.src('source/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(plumber(plumberErrorHandler))
        .pipe(gulpif(argv.production, imagemin
            ({
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            })
        ))

        .pipe(gulp.dest('public/assets/images'))
        .pipe(size());
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('source/*.html', ['html']);
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch('source/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('source/images/**/*.{jpg,jpeg,png,gif}', ['images']);
});

// Sync browser with the changes
gulp.task('browser-sync', function() {  
    browserSync.init(['./public/**/*.*'], {
        server: {
            baseDir: "./public"
        }
    });
});

// Default Task
gulp.task('default', ['webserver', 'welcome', 'html', 'css', 'sass', 'lint', 'scripts', 'images', 'watch', 'browser-sync'], reload);