// Загрузка установленных модулей
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglifyjs'),
        cssnano = require('gulp-cssnano'), //минификация css
        rename = require('gulp-rename'),
        autoprefixer = require('gulp-autoprefixer'),
        notify = require('gulp-notify'), //уведомление об ошибке
        sourcemaps = require('gulp-sourcemaps'), //карта сайта
        del = require('del'); //удаление файлов
        



//CSS
    // sass, конктенация, автопрефиксер
    gulp.task('sass', function() {
        return gulp.src(['app-src/sass/**/*.sass','app-src/sass/**/*.scss'])
            .pipe(sourcemaps.init()) //Инициализируем sourcemap
            .pipe(sass())
            .on('error', notify.onError("SASS-ERROR: \n <%= error.message %>"))
            .pipe(concat('style.css')) // конкатенируем файлы
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
            .pipe(sourcemaps.write()) //Пропишем sourcemap
            .pipe(gulp.dest('app-src/css'))
            .pipe(browserSync.reload({ stream: true }));
    });

    // css - взять, сжать, положить в build
    gulp.task('css', ['sass'], function() {
        return gulp.src('app-src/css/**/*.css')
            .pipe(cssnano({ zindex: false }))
            .pipe(gulp.dest('dist/css'));
    });



//JS
    gulp.task('js', function() {
        // return gulp.src([
        //         'app-src/js/libs/**/*.js',
        //         '!app-src/js/vendors/**/*.js', //код для ie
        //         'app-src/js/**/*.js',
        //     ])
        //     .pipe(concat('script.js'), { newLine: ';' })
        //     .pipe(uglify())
        //     .pipe(gulp.dest('dist/js/'));
    });


//Копирование файлов в dest
    
    
    gulp.task('build', ['css', 'js'], function() {

        // css копируется в его задаче
            // var buildCss = gulp.src([
            //         'app-src/css/main.min.css',
            //     ])
            //     .pipe(gulp.dest('dist/css'));

        var buildFonts = gulp.src('app-src/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));

        var buildFavicon = gulp.src('app-src/*.ico')
            .pipe(gulp.dest('dist/'));

        var buildImage = gulp.src('app-src/img/**/*.*')
            .pipe(gulp.dest('dist/img/'));


        // var buildJsVendors = gulp.src('app-src/js/vendors/*')
        //     .pipe(gulp.dest('dist/js/vendors'));

        var buildJsAll = gulp.src('app-src/js/**/*.*')
            .pipe(gulp.dest('dist/js/'));

        var buildHtml = gulp.src('app-src/*.html')
            .pipe(gulp.dest('dist'));

    });


    gulp.task('clean', function() {
        return del.sync('dist');
    });




//LiveEdit и watch

    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: 'app-src'
            },
            notify: false
        });
    });


    gulp.task('watch', ['browser-sync', 'css', 'js', 'build'], function() {
        gulp.watch('app-src/sass/**/*.sass', ['sass']);
        gulp.watch('app-src/sass/**/*.scss', ['sass']);
        gulp.watch('app-src/sass/**/*.js', ['js']);
        gulp.watch('app-src/*.html', ['build']);
        gulp.watch('app-src/*.html', browserSync.reload);
        gulp.watch('app-src/js/**/*.js', ['sass'], browserSync.reload);
    });
//Команды запуска задач


    gulp.task('default', ['watch']);

    
        
