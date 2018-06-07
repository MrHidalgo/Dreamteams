const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  pathFolder.src.image + '/*.{gif, svg}'
];



/**
 * @description
 */
gulp.task('imgCopy', function() {
  return gulp
    .src(srcPath)
      .pipe(gulp.dest(pathFolder.dest.img));
});


/**
 * @description
 */
gulp.task('imgCopy:watch', function() {
  gulp.watch(
    srcPath,
    ['imgCopy']
  );
});
