// gulpfile.js
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

import { src, dest, watch } from 'gulp';
import rename from 'gulp-rename';

function buildStyles() {
  return src('src/**/*.scss', { base: './' })
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: '.css' }))
    .pipe(dest('./'));
}

export default function() {
  watch('src/**/*.scss', buildStyles);
}
