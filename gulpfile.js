const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const addsrc = require('gulp-add-src');

const config = {
    source: './src/',
    dist: './public/'
};

const paths = {
    assets: "assets/",
    html: "**/*.html",
    js: "js/**/*.js",
    sass: "scss/**/*.scss",
    jquery: "js/vendor/jquery-3.2.1.min.js",
    mainSass: "scss/main.scss",
    mainJS: "js/app.js"
};

const sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js: config.source + paths.assets + paths.js,
    jquery: config.source + paths.assets + paths.jquery,
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('icons', () =>{
   gulp.src(sources.assets + 'icons/**/*').pipe(gulp.dest(config.dist + paths.assets + 'icons'));
});

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', function () {
    gulp.src(sources.rootSass)
        .pipe(sass().on("error", sass.logError)) //sass({outputStyle: "compressed"})
        .pipe(gulp.dest(config.dist + paths.assets +
            "css"));
});

gulp.task('js', function () {
    return gulp.src([sources.assets + "js/vendor/bootstrap.min.js", sources.assets + "js/utils/*.js", sources.assets + "js/components/*.js", sources.rootJS])
        .pipe(concat('app.js'))
        .pipe(browserify())
        .pipe(rename("bundle.js"))
        .pipe(addsrc(sources.jquery))
        .pipe(gulp.dest(config.dist + paths.assets + "js"))
});

gulp.task('sass-watch', ["sass"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ["js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ["html"], function (done) {
    browserSync.reload();
    done();
});


gulp.task('start', ['icons', 'html', 'sass', 'js']);


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.js, ["js-watch"]);
});

