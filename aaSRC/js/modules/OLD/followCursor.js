export async function followCursor () { // объявляем функцию followCursor
  // MouseMove, 200, 100

  fnSwipeFollowCursory();

    const $el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target; // определяем, где находится курсор
      if (!target) return
      // if (target.closest('a')) { // если курсор наведён на ссылку
      //   $el.classList.add('follow-cursor_active') // элементу добавляем активный класс
      // } else { // иначе
      //   $el.classList.remove('follow-cursor_active') // удаляем активный класс
      // }
      //w центровка  -  centring 
      // const centr = -2040 ;  //fix
      // const centrTop = -1980 ;
      //6000х4000
      // let pageWidth = document.documentElement.scrollWidth;
      // let centrA = -3000 ;
      // let centrTopA = -2000 ;

      // if(pageWidth >= 2400){
      //     centrA = -3240 ;
      //     centrTopA = -2135 ;
      // }
      // if(pageWidth < 2400 && pageWidth >= 2000  ){
      //      centrA = -3120 ;
      //      centrTopA = -2070 ;
      // }
      // if(pageWidth < 2000) {
      //     centrA = -3000 ;
      //     centrTopA = -2000 ;
      // }
 
      const centr = -3000;
      const centrTop = -2000;
 

      let leftMover = e.pageX + centr;
      let topMover =  e.pageY + centrTop;
      // console.log( 'мышка ' + 'e.pageX = '+ e.pageX + ' /e.pageY'+ e.pageY );
  
      $el.style.left = leftMover + 'px' ;// задаём элементу позиционирование слева
      $el.style.top = topMover + 'px'; // задаём элементу позиционирование сверху
    });



    

  
}//-- END    ===----


function fnSwipeFollowCursory(){

  const $el = document.querySelector('.follow-cursor'); 

  let x1 = null; 
  let y1 = null; 


  window.addEventListener('touchstart', e => { // при движении курсора
    
    const centr = -3000;
    const centrTop = -2000;

    const firstTouch = e.touches[0];
        x1 = firstTouch.clientX;  
        y1 = firstTouch.clientY; 
    // console.log('Touch = '+ x1  + ' /TouchY'+ y1 );

    let leftMover = x1 + centr;
    let topMover =  y1 + centrTop;

    // console.log('e.pageX = '+ e.pageX + ' /e.pageY'+ e.pageY );


    $el.style.left = leftMover + 'px' ;// задаём элементу позиционирование слева
    $el.style.top = topMover + 'px'; // задаём элементу позиционирование сверху

    $el.classList.toggle("--js-mask-touch");
  });




  window.addEventListener('touchmove', e => { // при движении курсора
    
    if(!x1 || !y1){return false;}// нет изменения координат
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY ;

    const centr = -3000;
    const centrTop = -2000;

    let leftMover = x2 + centr;
    let topMover =  y2 + centrTop;


    $el.style.left = leftMover + 'px' ;// задаём элементу позиционирование слева
    $el.style.top = topMover + 'px'; // задаём элементу позиционирование сверху
  });

}
