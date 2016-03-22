var args = require('yargs').argv;
var browserSync = require('browser-sync');
var del = require('del');
var glob = require('glob');
var gulp = require('gulp');
var path = require('path');
var _ = require('lodash');
var $ = require('gulp-load-plugins')({lazy:true});
var config = require('./gulp.config')();

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

//gulp.task('watch-javascript'. function() {
//	gulp.watch(config.jsFiles, )
//});

gulp.task('serve', function() {
	var options = {
			proxy: 'localhost:8080',
			port: 4000,
			files:['src/main/resources/public/index.jsp', 'target/classes/**/*.class', 'src/main/resources/public/**/*.js', 'src/main/resources/public/**/*.css'],
			reloadDelay:1000,
			logLevel: 'debug',
			injectChange: true,
			logFileChange: true,
			logPrefix: 'gulp-patterns',
			notify:true
	};
	browserSync(options);
});

