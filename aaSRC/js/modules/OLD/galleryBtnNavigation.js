import { libFindElm,libChangeClass,libTimeout,libForEachEvent,libEvent} from '../library/lib.js';



export function fnGalleryBtnNavigation(){
  const $msBtnGallery = libFindElm( 2 , '.--js_btn-glr');

  $msBtnGallery.forEach(($elm) => {
    $elm.addEventListener( 'click', function(e) {
      // console.log('НАЖАТ бургер');
      libChangeClass(1,$elm,'--js_anm');
      setTimeout(() => { libChangeClass(-1,$elm,'--js_anm'); }, 1400);// libTimeout( targetA = libChangeClass(-1,$elm,'--js_anm'),1200);
     }); 
   });



  // const $twoDGalrPrev = libFindElm( 1 , '#twoDGalrPrev'),
  //       $twoDGalrNext = libFindElm( 1 , '#twoDGalrNext'),
  //       $threeGalrPrev = libFindElm( 1 , '#threeGalrPrev'),
  //       $threeGalrNext = libFindElm( 1 , '#threeGalrNext');
  
  // const $twoDServiceGalr = libFindElm( 1 , '#twoDServiceGalr'),  
  //       $threeDServiceGalr = libFindElm( 1 , '#threeDServiceGalr');  

  // const stepScroLL = 300;

  // console.log($twoDGalrNext);
  // console.log($twoDServiceGalr);
  // function fnGallerysScrolling(){
  //   $twoDGalrNext.addEventListener('click', function(e) {       // запрет перезагрузки
  //       console.log('нажатие2');
  //       $twoDServiceGalr.scrollBy({ top: stepScroLL, behavior: 'smooth' });
  //   }); //.addEventListener   BtnPrev
  //   $twoDGalrPrev.addEventListener('click', function(e) {       // запрет перезагрузки
  //     console.log('нажатие ВВЕРХ');
  //     $twoDServiceGalr.scrollBy({ top: -stepScroLL, behavior: 'smooth' });
  //   });
  // }



} //-- END  export function  ===----




function fnGallerysScrolling($next,$prev, $target,step = 300 ){
  $next.addEventListener('click', function(e) { 
    e.preventDefault();      
    $target.scrollBy({ top: step, behavior: 'smooth' });
    });
    $prev.addEventListener('click', function(e) { 
      e.preventDefault();      
      $target.scrollBy({ top: -step, behavior: 'smooth' });
    }); 
 }//-- END    ===----

// fnGallerysScrolling($twoDGalrNext,$twoDGalrPrev,$twoDServiceGalr, stepScroLL);
// fnGallerysScrolling($threeGalrNext,$threeGalrPrev,$threeDServiceGalr, stepScroLL);
