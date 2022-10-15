const body = document.querySelector('body');  
// const color = $elem.style.backgroundColor;
const $header = document.querySelector('header');  
const headerHeight = $header.offsetHeight;// - высота шапки 


export { libFindElm, libChangeClass, libTimeout , libForEachEvent , libEvent};
// pi import { PI as PIValue } from './constants';


// JS                          
function libFindElm(ind , elm) {
  if (ind == 1){ return document.querySelector(elm);}
  if (ind == 2){ return document.querySelectorAll(elm);}
  if (ind == 3){ return document.getElementById(elm);}
  else{ console.log('Lib error Find');return false;}
}
function libChangeClass(i,$el,classA){
if (i=== -1){return $el.classList.remove( classA );}
if (i===1){return $el.classList.add( classA );}
if (i===2){return $el.classList.toggle( classA );}
else{ console.log('Lib error Change');return false;}
}
function libTimeout(fnTarget,timeoutA){
   setTimeout(() => { fnTarget; }, timeoutA);
   setTimeout(fnTarget,3000, "парам 1" , "парам 2" );
} //setInterval

function libForEachEvent($msElm,action, fnToElm){
  if( action == 1 ) { action = 'click'; }
  $msElm.forEach(($elm) => {
      $elm.addEventListener( action, fnToElm() );   //action = 'click'
  });
}  // pi  function(e)    e.preventDefault(); 

function libEvent($elm,action,fnToElm){
  if( action === 1 ) { action = 'click'; }
  if( action === 2 ) { action = 'scroll'; }
  $elm.addEventListener( action,function(e) { fnToElm($elm); } );   //action = 'click'
}


//P addEventListener  + $elm.style
  let $elm = null;
      $elm = document.querySelector('.----rr3333'); 
  $elm.addEventListener("click", function fnConf(e){
    $elm.removeEventListener("click", fnConf, false);
    e.preventDefault();  
    $elm.style.left = targetLeft + newLeft + 'px';
  });

  $elm.addEventListener("click", fnTestListen);
  $elm.addEventListener("click", fnTestListen);
  function fnTestListen(event) {$elm.removeEventListener('mouseup', fnTestListen);}
  function fnEndTestListen() { $elm.removeEventListener('mouseup', fnTestListen);} // onmousedown
//pi - END    ===...........................................................                                -----------------




function LibScrolling($next,$prev, $target,step = 300 ){
  $next.addEventListener('click', function(e) { 
  e.preventDefault();      
  $target.scrollBy({ top: step, behavior: 'smooth' });
  });
  $prev.addEventListener('click', function(e) { 
    e.preventDefault();      
    $target.scrollBy({ top: -step, behavior: 'smooth' });
  }); 
} //-- END  LibScrolling  ===----


//e                                                                          
//pi  if (curentPopup && unlock)  - проверка окна + переменной unlock 
//pi  element.closest("#my-id");
//pi  if (!e.target.closest('.popUP__content'))


//pi
// if ($elem.length > 0) { // длинна массива
//   for(let i = 0; i < $elem.length; i++) {
//     $elem[i].addEventListener("click", function(){//console.log("пойман клик" + i);
//         this.classList.toggle('--js-rotation');    });
// }}


function  libDragNDrop($mark, $target,limitA){
    $mark.onmousedown = function(event) { event.preventDefault(); // предотвратить запуск выделения (действие браузера)
      let xPosition = event.clientX;
      let targetLeft =  parseInt(getComputedStyle($target).left) ;   
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      
      function onMouseMove(event) {
        let newLeft = event.clientX - xPosition ;

        if(newLeft >  limitA ){newLeft = limitA};
        if(newLeft <  -limitA ){newLeft = -limitA};
        $target.style.left = targetLeft + newLeft + 'px';
      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove); } //-- END    ===----
    }; // onmousedown
    $mark.ondragstart = function() { return false; };
}


  

 
   


  /* todo     БАЗА  ▼ ▼ ▼ ▼  */
 //rotationTrackingBox.offsetLeft    .offsetLeft   смещение самого элемента
  // IIFE  function
  (function(){
    // проверяем поддержку
  })();















