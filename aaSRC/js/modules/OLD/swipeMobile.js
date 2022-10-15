
export function fnSwipePopupGallery(){ 

  const $msGallery = document.querySelectorAll('.--js_scroll-y');
  const step = 100,
        maxCounter = 200 ;
   let counter = -170;

	if ($msGallery.length > 0) {  //p   проверка элемента
		for(let i = 0; i < $msGallery.length; i++) {

      let x1 = null; 
      let y1 = null; 

      let $gallery = $msGallery[i];
      $gallery.addEventListener('touchstart', fnHandleTouchStart , false);
      $gallery.addEventListener('touchmove',fnHandleTouchMove, false); // 


      function fnHandleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;  y1 = firstTouch.clientY; 
        // console.log("касание =" +  x1 ,y1);
      }

      function fnHandleTouchMove(event) {
        if(!x1 || !y1){return false;} // нет изменения координат
        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY ;
        // console.log("Движение =" + x2 ,y2);
        // console.log(x2);
        let xDiff = x1 - x2;
        let leftGallery =  parseInt(getComputedStyle($gallery).left) ; 

        console.log(xDiff);
        if (xDiff > 0 && counter  < maxCounter ) { // вниз V    ВПРАВО
          console.log("ВПРАВО");
          counter = counter + 25;
          $gallery.style.left = leftGallery - step + "px"; 
          $gallery.style.left = leftGallery - step + "px"; 
         }
        if (xDiff < 0 && counter  > 0 - maxCounter) {  //  влево
          counter = counter - 25;
          $gallery.style.left = leftGallery + step + "px"; 
          $gallery.style.left = leftGallery + step + "px"; 
         }

         x1 = null; //break
      }

      // $gallery.addEventListener('touchstart', function(event) {  });//pi touchstart

    }//FOR
  }//if

};//-- END fnSwipePopupGallery //p   ===----





function fnPopUpMobileScrollGallery(){
  const $msGallery = document.querySelectorAll('.--js_scroll-y');
  const step = 25,
        maxCounter = 300 ;
        
  let counter = -300;
	if ($msGallery.length > 0) {  //p   проверка элемента
		for(let i = 0; i < $msGallery.length; i++) {
 
      let $gallery = $msGallery[i];
      $gallery.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel);  
        

        let leftGallery =  parseInt(getComputedStyle($gallery).left) ; 
        
        if (event.deltaY > 0 && counter  < maxCounter ) { // вниз V  //fix   
          counter = counter + 25;
          $gallery.style.left = leftGallery - step + "px"; 
          $gallery.style.left = leftGallery - step + "px"; 
         }
        if (event.deltaY < 0 && counter  > 0 - maxCounter) {    //fix   
          counter = counter - 25;
          $gallery.style.left = leftGallery + step + "px"; 
          $gallery.style.left = leftGallery + step + "px"; 
         }
       };
		}//-- END  for  ===----
  }//-- END  if ===----


}// END  Pop Up mobile scroll gallery //pi 

