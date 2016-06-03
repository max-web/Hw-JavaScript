/****************************************************************
Загрузка установленных модулей
*****************************************************************/
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglifyjs'),
        cssnano = require('gulp-cssnano'), 
        rename = require('gulp-rename'),
        autoprefixer = require('gulp-autoprefixer'),
        notify = require('gulp-notify'), 
        sourcemaps = require('gulp-sourcemaps'), 
        del = require('del'); 
        imagemin = require('gulp-imagemin'), 
        pngquant = require('imagemin-pngquant'); 
        cache = require('gulp-cache'); 



/****************************************************************
CSS
*****************************************************************/

    // sass, конктенация, автопрефиксер
    gulp.task('sass', function() {
        return gulp.src([
                '!app-src/sass/vendors/**/*.**',
                'app-src/sass/**/*.sass',
                'app-src/sass/**/*.scss'
            ])
            .pipe(sourcemaps.init()) 
            .pipe(sass())
            .on('error', notify.onError("SASS-ERROR: \n <%= error.message %>"))
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
            .pipe(concat('style.css')) 
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('app-src/css'))
            .pipe(browserSync.reload({ stream: true }));
    });

    // css - взять, сжать, положить в build
    gulp.task('css', ['sass'], function() {
        return gulp.src([
                '!app-src/css/vendors/**/*.css', //кроме vendors (ie8+) - он обрабатывается отдельно
                'app-src/css/**/*.css' 
            ])
            .pipe(cssnano({ zindex: false }))
            .pipe(gulp.dest('dist/css/'));
    });
    gulp.task('css-vendors', function() { //vendors (ie8+)
        return gulp.src([
                'app-src/css/vendors/**/*.css',  
            ])
            .pipe(cssnano({ zindex: false }))
            .pipe(gulp.dest('dist/css/vendors/'));
    });


/****************************************************************
JS
*****************************************************************/

    gulp.task('js', function() {
        return gulp.src([
                '!app-src/js/vendors/**/*.js', //код для ie
                'app-src/js/libs/**/*.js',
                'app-src/js/plugins/*.js',
                'app-src/js/**/*.js',
            ])
            .pipe(concat('script.js'), { newLine: ';' })
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'));
    });


/****************************************************************
Копирование файлов в dist    
*****************************************************************/
        
    
    gulp.task('build', ['css', 'js'], function() {


        var buildFonts = gulp.src('app-src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

        var buildFavicon = gulp.src('app-src/*.ico')
        .pipe(gulp.dest('dist/'));

        var buildJsVendors = gulp.src('app-src/js/vendors/*')
        .pipe(gulp.dest('dist/js/vendors'));

        var buildHtml = gulp.src('app-src/*.html')
        .pipe(gulp.dest('dist'));

    });


    gulp.task('clean', function() {
        return del.sync('dist');
    });

/****************************************************************
Обработка изображений
*****************************************************************/
gulp.task('img', function() {
    return gulp.src('app-src/img/**/*') // Берем все изображения из app-src
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});



/****************************************************************
Перезапуск задач по обновлению
*****************************************************************/

    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: 'app-src'
            },
            notify: false
        });
    });


    gulp.task('watch', ['browser-sync', 'css', 'css-vendors', 'js', 'build', 'img'], function() {
        gulp.watch('app-src/sass/**/*.sass', ['sass']);
        gulp.watch('app-src/sass/**/*.scss', ['sass']);
        gulp.watch('app-src/sass/**/*.js', ['js']);
        gulp.watch('app-src/*.html', ['build']);
        gulp.watch('app-src/js/**/*.js', ['sass'], browserSync.reload);
        // gulp.watch('dist/*.html', browserSync.reload);
    });


/****************************************************************
Команда по умолчанию
*****************************************************************/
gulp.task('default', ['watch']);

    

