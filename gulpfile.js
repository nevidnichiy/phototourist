"use strict";

var gulp = require('gulp');

//boild tools
var del = require('del');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');
//dist minification
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');

//where we place out source code
var srcPath = "client/src";
var bouildPath = "client/build";
var vendorBuildPath = buildPath + "/vendor";

var distPath = "public/client";

var bowerPath = "bower_components";

var cfg = {
    root_html: { src: srcPath + "/index.html", bld: buildPath },
    css:       { src: srcPath + "/css/**/*.css", bld: buildPath + "/css" },
    js:        { src: srcPath + "/js/**/*.js" },
    html:      { src: [srcPath + "/**/*.html", "!" + srcPath + "/*.html"]},
    bootstrap_sass: { src: bowerPath + "/bootstrap-sass/assets/stylesheets/" },
    bootstrap_fonts: { src: bowerPath + "/bootstrap-sass/assets/stylesheets/"}
};

