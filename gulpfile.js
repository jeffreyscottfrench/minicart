var gulp = require('gulp');
var sass = require('gulp-sass');
var mmq = require('gulp-merge-media-queries');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
gulp.task('sass', function(){
  return gulp.src('src/**/*.+(scss|sass)')
  .pipe(sass()) // Using gulp-sass
  .pipe(gulp.dest('build/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});
gulp.task('mmq', function () { // Multiple media queries
  gulp.src('src/**/*.css')
    .pipe(mmq({
      log: true
    }))
    .pipe(gulp.dest('dist'));
});
gulp.task('clean:dist', function(){
  return del.sync('dist');
})
gulp.task('cache:clear', function(){
  return cache.clearAll(callback)
});
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'test/functional'
      },
    })
});
// gulp watch
gulp.task('watch', ['browserSync', 'sass', ], function(){
  gulp.watch('src/themes/**/*.+(scss|sass)', ['sass']);
  gulp.watch('src/themes/**/*.+(html|php)', browserSync.reload);
  gulp.watch('src/**/*.js', browserSync.reload);
});
gulp.task('build', function(callback){
  runSequence('clean:dist',
    ['sass', 'mmq'],
    callback
  )
});
gulp.task('default', function (callback){
  runSequence(['sass', 'browserSync', 'watch'],
  callback
  )
});
