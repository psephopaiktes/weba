var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require("browser-sync");
var cmq = require("gulp-combine-mq");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");



// html
gulp.task('html', function() {
    gulp.src(['./src/**/*.html'])
        .pipe(plumber())
        .pipe(gulp.dest('./docs'));
});

// SASS
gulp.task('sass', function() {
    gulp.src(['./src/styles/**/*.scss', '!./src/styles/**/_*.scss','!./src/styles/lib'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8'],
            cascade: false
        }))
        .pipe(cmq({ beautify: false }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./docs/styles'));
    gulp.src('./src/styles/lib/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./docs/styles/lib'));
});

//Js
gulp.task('js', function() {
    gulp.src(['./src/scripts/**/*.js','!./src/scripts/lib'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./docs/scripts'));
    gulp.src('./src/scripts/lib/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./docs/scripts/lib'));
});

//img
gulp.task('img', function() {
    gulp.src('./src/images/**/*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('./docs/images'));
});


gulp.task('default',['html','sass','js','img'],function(){
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/scripts/**/*.js',['js']);
    gulp.watch('./src/images/**/*',['img']);
});
