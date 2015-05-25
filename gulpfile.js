var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminOptipng = require('imagemin-optipng');

gulp.task('compress-css', function() {
	return gulp.src('css/*.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('compress-js', function() {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('./dist/javascripts'));
});

gulp.task('compress-jpg', function () {
    return gulp.src('img/*.jpg')
	    .pipe(imageminJpegtran({progressive: true})())
	    .pipe(gulp.dest('dist/images'));
});

gulp.task('compress-png', function () {
    return gulp.src('img/*.png')
        .pipe(imageminOptipng({optimizationLevel: 3})())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', [
	'compress-css', 
	'compress-js',
	'compress-jpg',
	'compress-png'
]);