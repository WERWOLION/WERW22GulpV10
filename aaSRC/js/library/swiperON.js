import Swiper, { Autoplay , Navigation} from 'swiper';  //  плагин




export function sliderA () { //------------------------------------
  
   const swiper = new Swiper(".slider-a-js--on", {
          // modules: [ Mousewheel, Autoplay ,  Navigation, Pagination],   
        modules: [ Autoplay ,Navigation],   
        allowSlideNext: true,
        allowSlidePrev: true,

        grabCursor:false,
          // slidesPerView: "auto", // устанваливать автоширину слайдов
        slidesPerView:3,    // количество слайдов в блоке прокрутки
        spaceBetween:60,      // отступы
        initialSlide : 1,   // стартовый слайдер при загрузке
          // slidesPerGroup:3, // кол-во элм - группа прокрутки! 
          // Responsive breakpoints
        breakpoints: {
              900: { // when window width
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup:1, // кол-во элм - группа прокрутки! 
              },
              1400: { // when window width is >= 640px
                slidesPerView: 3,  
                spaceBetween: 60,
                initialSlide : 1, // стартовый слайдер при загрузке
                slidesPerGroup:1, // кол-во элм - группа прокрутки! 
              }
            },// END breakpoints

        autoHeight:false,    // автовысоата
        loop:true,          // бесконечная прокрутка
        loopedSlides:3,       // кол-во слайдеров в бескон прокрутке
        speed:2200,  // speed:300,
        delay: 100,

    
        autoplay: { //  ▼ ▼ ▼ ▼ 
          loop: true, 
          enabled: true,
          delay: 5000,
          disableOnInteraction:false,
          reverseDirection: false, //pi revers  
          waitForTransition: true ,
        },

        navigation: {   
          nextEl: '.--js_swiper__nav-next',
          prevEl: '.--js_swiper__nav-prev',
        },

                              
  });  // -END----------   const swiper
   

  const swiperB = new Swiper(".slider-b-js--on", {
          // modules: [ Mousewheel, Autoplay ,  Navigation, Pagination],   
        modules: [ Autoplay ,Navigation],   
        allowSlideNext: true,
        allowSlidePrev: true,
        
        grabCursor:false,
        // slidesPerView: "auto", // устанваливать автоширину слайдов
        slidesPerView:1,    // количество слайдов в блоке прокрутки
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
              900: { // when window width is >= 640px
                slidesPerView: 2,
                spaceBetween: 30,
                initialSlide : 1, // стартовый слайдер при загрузке
                slidesPerGroup:1, // кол-во элм - группа прокрутки! 
              }
            },// END breakpoints

        autoHeight:false,    // автовысоата
        loop:true,          // бесконечная прокрутка
        loopedSlides:2,       // кол-во слайдеров в бескон прокрутке
        speed:2900,  // speed:300,
        delay: 2100,

    
        autoplay: { //  ▼ ▼ ▼ ▼ 
          loop: true, 
          enabled: true,
          delay: 2100,
          disableOnInteraction:false,
          reverseDirection: true, //pi revers  
          waitForTransition: true ,
        },

        navigation: {   
          nextEl: '.--js_swiper__nav-next--b',
          prevEl: '.--js_swiper__nav-prev--b',
        },

                              
  });  // -END----------   const swiper





} /// -END----------  sliderA

