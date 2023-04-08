import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import pug from "gulp-pug";
import uglify from "gulp-uglify";
import gulpSass from "gulp-sass";
import sassPkg from "sass";

const { src, dest, series, watch } = gulp;
const sass = gulpSass(sassPkg);

const pugs = () => src("./src/pug/pages/*.pug").pipe(pug()).pipe(dest("./project/html"));
const js = () => src("./src/js/**/*.js").pipe(dest("./project/js"));
const json = () => src("./src/api/*.json").pipe(dest("./project/api"));
const assets = () => src("./src/assets/**/*.*").pipe(dest("./project/assets"));

const scss = () =>
	src("./src/sass/pages/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(autoprefixer("last 2 versions"))
		.pipe(dest("./project/css"));

const watching = () => {
	watch("./src/pug/**/*.pug", pugs);
	watch("./src/js/**/*.js", js);
	watch("./src/api/**/*.json", json);
	watch("./src/sass/**/*.scss", scss);
	watch("./src/assets/**/*.*", assets);
};

export default series(pugs, js, json, scss, assets, watching);
