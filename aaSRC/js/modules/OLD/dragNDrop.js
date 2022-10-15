export function fnDragNDrop(){ 
  const $thumbA = document.querySelector('.--js-thumb_target-a'),
        $thumbMarkA = document.querySelector('.--js-thumb_mark-a'),
        $thumbMarkAB = document.querySelector('.--js-thumb_mark-ab'),
        $thumbB = document.querySelector('.--js-thumb_target-b'),
        $thumbMarkB = document.querySelector('.--js-thumb_mark-b'),
        $thumbMarkBB = document.querySelector('.--js-thumb_mark-bb'),
        $thumbC = document.querySelector('.--js-thumb_target-c'),
        $thumbMarkC = document.querySelector('.--js-thumb_mark-c'),
        $thumbMarkCB = document.querySelector('.--js-thumb_mark-cb');

  const limit = 500;

  fnfnDragNDropBase($thumbMarkA, $thumbA,limit);
  fnfnDragNDropBase($thumbMarkAB, $thumbA,600);

  fnfnDragNDropBase($thumbMarkB, $thumbB,600);
  fnfnDragNDropBase($thumbMarkBB, $thumbB,limit);

  fnfnDragNDropBase($thumbMarkC, $thumbC,limit);
  fnfnDragNDropBase($thumbMarkCB, $thumbC,700);

  //mobile Swipe
  fnSwipeDragNDrop($thumbMarkA, $thumbA,90);
  fnSwipeDragNDrop($thumbMarkAB, $thumbA,90);

  fnSwipeDragNDrop($thumbMarkB, $thumbB,90);
  fnSwipeDragNDrop($thumbMarkBB, $thumbB,90);

  fnSwipeDragNDrop($thumbMarkC, $thumbC,90);
  fnSwipeDragNDrop($thumbMarkCB, $thumbC,90);


  function  fnfnDragNDropBase($mark, $target,limitA){
    $mark.onmousedown = function(event) { event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let xPosition = event.clientX;
      let targetLeft =  parseInt(getComputedStyle($target).left) ;   

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        // console.log(limitA);
        // console.log('xPosition =' + xPosition);
        // console.log(' targetLeft =' + targetLeft);
        let newLeft = event.clientX - xPosition ;

        if(newLeft >  limitA ){newLeft = limitA};
        if(newLeft <  -limitA ){newLeft = -limitA};
        // console.log('newLeft =' + newLeft);
        $target.style.left = targetLeft + newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    }; // onmousedown
      $mark.ondragstart = function() {
        return false;
      };

  }

  // function  fnSwipeDragNDrop($mark, $target,limitA){

  //   let x1 = null; 
  //   let y1 = null; 

  //   $mark.addEventListener('touchstart', fnHandleTouchStart , false);
  //   $mark.addEventListener('touchmove',fnHandleTouchMove, false); // 

  //   function fnHandleTouchStart(event) {
  //     const firstTouch = event.touches[0];
  //     x1 = firstTouch.clientX;  y1 = firstTouch.clientY; 
  //     // console.log("касание =" +  x1 ,y1);
  //   }
  //   function fnHandleTouchMove(event) {
  //     if(!x1 || !y1){return false;} // нет изменения координат
  //     let x2 = event.touches[0].clientX;   // let y2 = event.touches[0].clientY ;
  //     let targetLeft =  parseInt(getComputedStyle($target).left) ;   
  //     let newLeft = x1 - x2;

  //     if(targetLeft < 100 || targetLeft > -100){
  //       if(newLeft >  limitA ){newLeft = limitA};
  //       if(newLeft <  -limitA ){newLeft = -limitA};
  //       return $target.style.left = targetLeft - newLeft * 2  + 'px';
  //     }else{ return;}

  //     }

  //     // function onMouseUp() {
  //     //   document.removeEventListener('mouseup', onMouseUp);
  //     //   document.removeEventListener('mousemove', onMouseMove);
  //     // }

  // }; // onmousedown


   




function fnSwipeDragNDrop($mark, $target,limitA){ 
  const step = 300;
  let counter = 0;
  if ($mark) { 
    // console.log("ТЕСТ!" );
      let x1 = null; 
      let y1 = null; 

      $mark.addEventListener('touchstart', fnHandleTouchStart , false);
      $mark.addEventListener('touchmove',fnHandleTouchMove, false); // 

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
        let leftTarget =  parseInt(getComputedStyle($target).left) ; 
        // console.log("leftTarget = " + leftGallery );

        if (xDiff > 0 && leftTarget > -200 ) { // вниз V    ВПРАВО
          // console.log("ВПРАВО" + 'counter =' + counter);
          $target.style.left = leftTarget - step + "px"; 
          $target.style.transition = "left 1s ease-out ";
          return ;
         }
        if (xDiff < 0 && leftTarget < 200) {  //  влево
          $target.style.left = leftTarget + step + "px";
          $target.style.transition = "left 1s ease-out ";
          return ;
         }
         x1 = null; //break
         return;
      }
      }//if
    };//-- END fnSwipePopupGallery //p   ===----



}