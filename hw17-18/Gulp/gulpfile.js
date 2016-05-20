/****************************************************************
Загрузка установленных модулей
*****************************************************************/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');
    autoprefixer = require('gulp-autoprefixer');
    del = require('del');

/****************************************************************
Настройка задач
*****************************************************************/


	//CSS
	gulp.task('sass', function() {
	    return gulp.src('app-src/sass/**/*.sass')
	        .pipe(sass())
	        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
	        .pipe(gulp.dest('app-src/css'))
	        .pipe(browserSync.reload({ stream: true }));
	});
	gulp.task('css', ['sass'], function() {
	    return gulp.src('app-src/css/main.css')
	        .pipe(cssnano())
	        .pipe(rename({ suffix: '.min' }))
	        .pipe(gulp.dest('app-src/css'));
	});


	//JS
	gulp.task('js', function() {
	    return gulp.src([
	            'app-src/js/libs/**/*.js',
	            '!app-src/js/vendors/**/*.js', //исключить файлы для ie8
	            'app-src/js/**/*.js',
	        ])
	        .pipe(concat('script.js'), { newLine: ';' })
	        .pipe(uglify())
	        .pipe(gulp.dest('dist/js/'));
	});

	//Копирование файлов в dest
	gulp.task('build', ['css', 'js'], function() {

	    var buildCss = gulp.src([
	            'app-src/css/main.min.css',
	        ])
	        .pipe(gulp.dest('dist/css'));

	    var buildFonts = gulp.src('app-src/fonts/**/*')
	        .pipe(gulp.dest('dist/fonts'));

	    var buildFavicon = gulp.src('app-src/*.ico')
	        .pipe(gulp.dest('dist/'));

	    var buildJsVendors = gulp.src('app-src/js/vendors/*')
	        .pipe(gulp.dest('dist/js/vendors'));

	    var buildHtml = gulp.src('app-src/*.html')
	        .pipe(gulp.dest('dist'));

	});

	gulp.task('clean', function() { //очистка dest
	    return del.sync('dist');
	});

	/****************************************************************
	LiveEdit
	по обновлении файлов - перезапускаем нужную задачу, обновляем сервер
	*****************************************************************/


	gulp.task('browser-sync', function() {
	    browserSync({
	        server: {
	            baseDir: 'app-src'
	        },
	        notify: false
	    });
	});


	gulp.task('watch', ['browser-sync', 'css', 'js'], function() {
	    gulp.watch('app-src/sass/**/*.sass', ['sass']);
	    gulp.watch('app-src/sass/**/*.js', ['js']);
	    gulp.watch('app-src/*.html', browserSync.reload);
	    gulp.watch('app-src/js/**/*.js', ['sass'], browserSync.reload);
	});


/****************************************************************
Команды запуска задач
*****************************************************************/
gulp.task('default', ['watch']);
