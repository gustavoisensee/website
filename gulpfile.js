var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminOptipng = require('imagemin-optipng');

gulp.task('compress-css', function() {
	return gulp.src('assets/css/*.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('compress-js', function() {
	return gulp.src('assets/js/*.js')
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('compress-jpg', function () {
    return gulp.src('assets/img/*.jpg')
	    .pipe(imageminJpegtran({progressive: true})())
	    .pipe(gulp.dest('public/img'));
});

gulp.task('compress-png', function () {
    return gulp.src('assets/img/*.png')
        .pipe(imageminOptipng({optimizationLevel: 3})())
        .pipe(gulp.dest('public/img'));
});

gulp.task('default', [
	'compress-css', 
	'compress-js',
	// 'compress-jpg',
	// 'compress-png'
]);