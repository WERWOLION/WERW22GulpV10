import webp from 'gulp-webp'
import imagemin from "gulp-imagemin"
// import gulpAvif  from "gulp-avif"



export const images = () => {

  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES',
        message: 'Error: <%= error.message %>'
      })
    ))
    // // gulpAvif
    // .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images))) // досступ
    // .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))  // проверка новых
    // .pipe(app.plugins.if(app.isBuild, gulpAvif({

    // })))
    // .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))// выгрузка


    //webp
    .pipe(app.plugins.newer(app.path.build.images)) // вызов плагина новых картинок
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))// выгрузка

    //    imagemin
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))// досступ
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))// проверка новых
    .pipe(app.plugins.if(app.isBuild, imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 4 // 0 to 7
    })))
    .pipe(app.gulp.dest(app.path.build.images))// выгрузка сжатых

    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images)) // выгрузка svg
    .pipe(app.plugins.browserSync.stream())
}

//npm i -D gulp-webp gulp-imagemin