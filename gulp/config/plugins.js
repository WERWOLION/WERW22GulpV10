import replace from 'gulp-replace' // Поиск и замена @img
import plumber from 'gulp-plumber' // Обработка ошибок
import notify from 'gulp-notify' // Сообщения (подсказки)
import browserSync from 'browser-sync' // Локальный сервер
import newer from 'gulp-newer' // Проверка обновления картинки
import ifPlugin from 'gulp-if' // Условное ветление

export const plugins = { 
  replace: replace, // @img
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin
}

//npm i -D gulp-plumber gulp-notify
//npm i -D gulp-if   