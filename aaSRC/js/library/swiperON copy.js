import Swiper, { Autoplay} from 'swiper';  //  плагин
// import Swiper, { , Autoplay,  Navigation, Pagination} from 'swiper';  //  плагин
// import Swiper, { Mousewheel , Autoplay} from 'swiper';  //  плагин
// import Swiper , { Pagination, Mousewheel } from '../library/swiper.min.js';

 /* todo https://swiperjs.com/swiper-api  */
// import "swiper/scss";  // import 'swiper.scss';// import 'swiper/scss/mousewheel';// import "swiper/scss";
 /* todo CLASS */
// .slider-js--on === .swiper  // .swiper-wrapper // .swiper-slide

// .swiper-pagination
//  .slider_head__nav--next//  .slider_head__nav--prev
//  .reviews-slader-elm__text

export function sliderA () { //------------------------------------
  
   const swiper = new Swiper(".slider-a-js--on", {
          // modules: [ Mousewheel, Autoplay ,  Navigation, Pagination],   
          modules: [  Autoplay ],   
          // pagination: {
          //-   el: ".swiper-pagination",
          //   clickable: true,
          // },

          // navigation: {  //  ▼ ▼ ▼ ▼  
          // nextEl: '.slider_head__nav--next',
          // prevEl: '.slider_head__nav--prev',
          // },

          grabCursor:false,
          // slidesPerView: "auto", // устанваливать автоширину слайдов
          slidesPerView:3,    // количество слайдов в блоке прокрутки
          spaceBetween:60,      // отступы
          initialSlide : 1,   // стартовый слайдер при загрузке
          // slidesPerGroup:3, // кол-во элм - группа прокрутки! 
          // Responsive breakpoints
            breakpoints: {
              // 576: { // when window width
              //   slidesPerView: 1,
              //   spaceBetween: 20,
              //   slidesPerGroup:1, // кол-во элм - группа прокрутки! 
              // },
              // 768: { // when window width is >= 640px
              //   slidesPerView: 1,
              //   spaceBetween: 30,
              //   initialSlide : 1, // стартовый слайдер при загрузке
              //   slidesPerGroup:1, // кол-во элм - группа прокрутки! 
              // }
            },// END breakpoints

          autoHeight:false,    // автовысоата
          loop:true,          // бесконечная прокрутка
          loopedSlides:3,       // кол-во слайдеров в бескон прокрутке
          speed:7200,  // speed:300,

          // freeMode: {
          //   enabled: true,
          //   sticky: true,
          // },

          autoplay: { //  ▼ ▼ ▼ ▼ 
            loop: true, 
            enabled: true,
            delay: -1,
            disableOnInteraction:false,
            reverseDirection: true, //pi revers  
            waitForTransition: true ,
          },

          // mousewheel:{ //  ▼ ▼ ▼ ▼  
          //   sensitivity:1,
          //   eventsTarget:".slider_feedback__txt", // класс по которому работаёт колесо мыши
          // },

                              
  });  // -END----------   const swiper




} /// -END----------  sliderA