

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify');
 


gulp.task('babel', function(){
	return gulp.src('js/src/script.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.on('error', notify.onError())
		.pipe(gulp.dest('js/dest/'));
});


gulp.task('watch', function() {  
    gulp.watch('js/src/**/*.js', ['babel']);        
});


gulp.task('default', ['babel', 'watch']);
