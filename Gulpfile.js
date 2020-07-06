const gulp = require("gulp");
const util = require("gulp-util");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglifyjs");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const jshint = require("gulp-jshint");
const stylish = require("jshint-stylish");

const input = ["./assets/scss/main.scss"];
const output = "./src/dist/css";
const inputJs = ["./assets/js/**/*.js"];
const outputJs = "./src/dist/js";
const inputFont = ["./assets/fonts/*.*"];
const outputFont = "./src/dist/fonts";
const inputImage = ["./assets/images/*.*"];
const inputImageFolder = ["./assets/images/**/*.*"];
const outputImage = "./src/dist/images";
const inputSassWatch = ["./assets/scss/**/*.scss"];

//task area
gulp.task("sass", function() {
    return gulp
        .src(input)
        .pipe(util.env.env === "prod" ? util.noop() : sourcemaps.init())
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(util.env.env === "prod" ? cleanCSS() : sourcemaps.write())
        .pipe(gulp.dest(output));
});

gulp.task("jshint", function() {
    return gulp
        .src(inputJs)
        .pipe(jshint(".jshintrc"))
        .pipe(jshint.reporter(stylish));
});

gulp.task("js", function() {
    return gulp
        .src(inputJs)
        .pipe(util.env.env === "prod" ? util.noop() : sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(util.env.env === "prod" ? uglify() : sourcemaps.write())
        .pipe(gulp.dest(outputJs));
});

gulp.task("img", function() {
    return gulp.src(inputImage).pipe(gulp.dest(outputImage));
});

gulp.task("imgVectors", function() {
    return gulp.src(inputImageFolder).pipe(gulp.dest(outputImage));
});

gulp.task("fonts", function() {
    return gulp.src(inputFont).pipe(gulp.dest(outputFont));
});

gulp.task("watch", function() {
    return gulp.watch(inputSassWatch, ["sass"]).on("change", function(event) {
        console.log(
            "File " + event.path + " was " + event.type + ", running tasks..."
        );
    });
});

gulp.task("watchJs", function() {
    return gulp.watch(inputJs, ["js"]).on("change", function(event) {
        console.log(
            "File " + event.path + " was " + event.type + ", running tasks..."
        );
    });
});

gulp.task("default", ["build", "watch", "watchJs"]);
gulp.task("build", ["sass", "js", "img", "imgVectors", "fonts"]);
