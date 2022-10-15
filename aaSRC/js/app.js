import * as flsFunctions from './modules/functionsWebp.js';  // импорт всей функций =   * as
flsFunctions.isWebp(); 

 /* todo  IMPORT                     */
// import {sliderA} from './library/swiperON.js'; // Внешний слайдер
import {popUP} from './modules/popUP.js';  // модалка  
// import {stickyHeader} from './modules/header.js'; //
// import {burgerMenu} from './modules/burgerMenu.js'; //

// import {followCursor} from './modules/followCursor.js'; //
import {cover} from './modules/cover.js'; //
//import {costomScroll} from './modules/costomScroll.js'; //
// import {formMess} from './modules/formMess.js';  // импорт  Отправка формы
// import {tgMessage} from './modules/tgMess.js';  // импорт  Отправка формы

// import {greenSock } from "./library/GreenSock.js"; // анимация  greenSock
// import {SugarJS} from './library/sugar.min.js';  // jQuery}  

// import {swipeButton} from './modules/swipeButton.js'; // Кнопка - свайп
// import {rotation} from './modules/rotation.js'; // Вращение Элемента

// import {accordionClickCheked} from './modules/accordion.js'; // Внешний слайдер

// import {toTopBtn} from './modules/toTopBtn.js'; // 

// import Swal from 'sweetalert2'; // ES6 Modules or TypeScript
// const Swal = require('sweetalert2') ;// CommonJS


// import {jQuery} from './js-OLD/jquery-3.6.0.min.js';  // jQuery}  
// import {testModul} from './js- стар/test.js';  // импорт всей вункций =   * as  //тестовая функция
// import {formMessExport} from './modules/formMess.js';  // импорт -- Отправка формы

// import {popUP3} from './modules/popUP.js';  // модалка 2


 /* todo  form                       */
document.addEventListener('DOMContentLoaded', function () { // оболочка  -выполнение после  загрузки сайта
	// jQuery(); // 1 //fix
	// SugarJS();   // 2
	// greenSock(); //  3

	//bl  ✦✦✦✦    moduls      ✦✦✦✦✦✦✦                */																		
	// testModul();  // TEST
	
	popUP();          // сообщения
	cover();
  // followCursor(); //		
	// coverB();
	// formMess(); // модуль отправки форм
	// tgMessage();
	
	// stickyHeader ();
	// burgerMenu();
	// costomScroll(); 

	// accordionClickCheked(); //  accordion
	// toTopBtn();       //  к шапке
	// swipeButton();       //  кнопка свайп
	// rotation();          //  поворот
  
}); /// -END-- -----------------------
 /* todo   - END - - - form                       */

 // ------LIBRARY----
 // дом дерево--                  $name
 //                                $_name (массив дерево)
 // классы - верхний регистр      Aname
 // объекты  - &   å               _name  - массив
 // объекты  - &   å              o_name  - объект
 // функции  - @   ü  $1          f_name