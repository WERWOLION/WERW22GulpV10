import {fnEnterKey} from './enterKey.js';

export function cover(){ 
  fnAddOrders();
  fnEnterKey();
  

}//-- END    ===----





function fnAddOrders (){
  const $headBtn = document.getElementById("formHeadBtn");
  const $tailBtn = document.getElementById("formTailBtn");

  const $body = document.querySelector('body'); 
  const $ordersTable = document.getElementById('ordersTable'); 
  
  const $headInput = document.getElementById("formHeadInput");
  const $tailInput = document.getElementById("formTailInput");
  
  const $errorFieldHead = document.getElementById("errorFieldHead");
  const $errorFieldTail = document.getElementById("errorFieldTail");

  let idCounter = 0;

  const  $popUpTakeBet = document.getElementById('popUpTakeBet');
  const  $$ttlPopUP = $popUpTakeBet.querySelector('.pop-up_ttl');
  const  $popUPValue = $popUpTakeBet.querySelector('.bet-value');
  const  $popupConfirmBtn = document.getElementById("popupConfirmBtn");
  const  $ruletConfirmBtn = document.getElementById("ruletConfirmBtn");


  // ---------------------

  const $displayTotalFlips = document.getElementById("totalFlips"),
        $displayTopBid = document.getElementById("topBid"),
        $displayTail = document.getElementById("tailDisplay"),
        $displayHead = document.getElementById("headDisplay");
  let headsCounter = 0,
      tailsCounter = 0,
      totalFlips= 0,
      topBid = 0;



  
  
  $headBtn.addEventListener("click", function(){
    let inpValue = $headInput.value;
 
    if (!isNaN(inpValue) &&  inpValue >= 1 ) { 
      $errorFieldHead.innerHTML= "";
      inpValue = Math.floor(inpValue * 100) / 100 ;

      fnClosePopUp();
      fnCreateOrder("Head",inpValue);
      if(inpValue > topBid){
        topBid = inpValue;
        $displayTopBid.innerHTML = inpValue + " NEAR"; 
      }
      $headInput.value= "";
      fnSorted();
      return;

    } else{
      // console.log('error');
      $errorFieldTail.innerHTML= "Error! Enter the number more than 1";
    }


  });


  $tailBtn.addEventListener("click", function(){
    
    let inpValue = $tailInput.value;
    // console.log('!isNaN(inpValue) =' + !isNaN(inpValue)  ) ;
    
    if (!isNaN(inpValue) &&  inpValue >= 1 ) { 
        $errorFieldTail.innerHTML= "";
        inpValue = Math.floor(inpValue * 100) / 100 ;

        fnClosePopUp();
        fnCreateOrder("Tail",inpValue);
        if(inpValue > topBid){
          topBid = inpValue;
          $displayTopBid.innerHTML = inpValue + " NEAR"; 
        }
        
        $tailInput.value= "";
        fnSorted();
        return;
 
    } else{     
      // $errorFieldTail.innerHTML= "Ошибка! Введите число больше 1";
      $errorFieldTail.innerHTML= "Error! Enter the number more than 1";
    }
  });






  function fnClosePopUp() {
    let $activePopUp = document.querySelector(".--js_open-pop-up");
    // console.log('click');
    $activePopUp.classList.remove("--js_open-pop-up");
    $body.classList.remove("--js-lock__body");
  };


  function fnSorted(){
    let $arItems = document.querySelectorAll('.orders__row');
    let $table = document.querySelector('.orders_table');

    let arSorted = [...$arItems].sort(function(a, b) {
      return b.children[1].innerHTML.replace(/[^0-9]/gim, "") - a.children[1].innerHTML.replace(/[^0-9]/gim, "");
    });
    // console.log(arSorted);
    // console.log(arSorted[0].children[1].innerHTML);
    // console.log(arSorted[0].children[1].innerHTML.replace(/[^0-9]/gim, ""));
    $table.innerHTML = "";
    for (let ul of arSorted) {
      $table.appendChild(ul);
    }

  };



  function fnCreateOrder(coin , valueBet) {
    // console.log('CreateOrder');
    const countTimer = 30;
    if(idCounter > 100000){idCounter = 0;}
    idCounter++;

    
    let $newUl= document.createElement("ul");
    $newUl.id="orders" + idCounter;
    $newUl.className="orders__row";
    
    $ordersTable.prepend($newUl);
    


    let $li1= document.createElement("li");
    $li1.className="orders__coin";
    $li1.innerHTML= coin;
    $newUl.append($li1);


    let $li2= document.createElement("li");
    $li2.className="orders__flips";
    $li2.innerHTML= valueBet;
    $newUl.append($li2);
      let $li2Span= document.createElement("span");
      $li2Span.innerHTML=" NEAR";
      $li2.append($li2Span);


    let $li3= document.createElement("li");
    $li3.className="orders__time";
    $li3.innerHTML= countTimer + " min"; // + " min";
    $newUl.append($li3);
    //   let $li3Span= document.createElement("span");
    //   $li3Span.innerHTML=" min";
    //   $li3.append($li3Span);

    let $liBtn= document.createElement("li");
    $liBtn.className="orders_table__btn";
    $newUl.append($liBtn);
      let $li4link= document.createElement("a");
      $li4link.setAttribute('href', "#!");
      $li4link.innerHTML="accept a bid and flip";
      $liBtn.append($li4link);

      fnTakeBet($newUl,valueBet ,coin ,$liBtn );
      
      // window.setInterval( fnOrderTimer($newUl), 6000);
      fnOrderTimer($newUl);// таймер

      return;
  };//-- END    ===----


   function fnOrderTimer($order){
    if($order){
        let $timerDisplay = $order.childNodes[2];
        // console.log($timerDisplay.innerHTML);
        setInterval( fnTimerBody, 60000);
          function fnTimerBody(){
            let val = $timerDisplay.innerHTML.replace(/[^0-9]/gim, "") - 1;
            $timerDisplay.innerHTML = val + " min";

            if (val == 0){  $order.remove(); }else{ return;};
          };//fnTimerBod
          
    }else{ return;}
    // setTimeout(() => $order.remove(), timeoutOrders);
   }//-- END  fnOrderTimer  ===----



   function fnTakeBet($order,valueBet,coin,$btn){
    // console.log('coin =' + coin);
    if(coin == "Tail"){coin = "Head" ;} else {coin = "Tail" ;}
    // console.log('$popUpTakeBet =' + $popUpTakeBet);
    // console.log('$ttlPopUP =' + $$ttlPopUP);

      let lastClicked = 0;

      $btn.addEventListener("click", function(){
        if($order){
          $popUpTakeBet.classList.add("--js_open-pop-up");
          $body.classList.add("--js-lock__body");

          $$ttlPopUP.innerHTML = coin;   
          $popUPValue.innerHTML = valueBet + " NEAR";  
          //----------------------------
          $popupConfirmBtn.addEventListener("click", function fnConf(e){
            $popupConfirmBtn.removeEventListener("click", fnConf, false);
            let now = new Date();
            if(now - lastClicked > 30000) {
              lastClicked = now;
            setTimeout(() => fnTimeoutConfirm(), 200 );
            function  fnTimeoutConfirm(){
            // alert('fnCoinRulet 00000');
            e.preventDefault();
            
      

                if($order){
                  $popUpTakeBet.classList.remove("--js_open-pop-up");
                  $body.classList.remove("--js-lock__body");
        
                  fnCoinRulet(coin, $order);
                  $order.remove();
                  
                }

            }
            }
            return; 

           });//$popupConfirmBtn ------------------------
          return;   
        }
        return;
   
        
      });



     return;
   }//-- END  fnTakeBet  ===----






   function  fnCoinRulet(coin , $order){
    
    const  $coinRulet = document.getElementById('popUpCoinRulet');
    const  $coinRuletClose = $coinRulet.querySelector('.btn');
    const  $anmCoin =  $coinRulet.querySelector('.pop-up__coin');

    const  $resultRuletCoin = $coinRulet.querySelector(' .-js_coin-roulette__result');
    let prise = null;

    // messenger
    const  $coinRulMess = $coinRulet.querySelector('.pop-up_ttl'),
           $coinRulSubMess = $coinRulet.querySelector('.pop-up_sub-ttl');
 
  
    $coinRulet.classList.add("--js_open-pop-up");
    $body.classList.add("--js-lock__body");
    // console.log('$anmCoin = ' + $anmCoin);
    $anmCoin.classList.add("-js_anm");
    
    // Анимация 3 секунды!
    setTimeout(() => $anmCoin.classList.remove("-js_anm"), 3200 );
    setTimeout(() => $coinRuletClose.classList.remove("--js_hide"), 3100 );
    setTimeout(() => $ruletConfirmBtn.classList.remove("--js_hide"), 3100 );
   

    // Рандом!
    let ruletRandom =  Math.random() * 2;
    if(ruletRandom == 1){ruletRandom =  Math.random() * 2;}
    // console.log('ruletRandom  = '+ ruletRandom);
   
    
    if (ruletRandom < 1){ 
        setTimeout(() =>   $resultRuletCoin.innerHTML = "HEAD" , 3000 );}
    if (ruletRandom >= 1){ 
      setTimeout(() =>   $resultRuletCoin.innerHTML = "TAIL" , 3000 ); }
    
    // examination
    if(coin == "Head"  && ruletRandom < 1){ prise = "Success!";}
    if(coin == "Tail"  && ruletRandom >= 1){ prise = "fail...";}
    if(coin == "Tail"  && ruletRandom < 1){ prise = "fail...";}
    if(coin == "Tail"  && ruletRandom >= 1){ prise = "Success!";}

    //Udate
    
    fnUdateDisplay(); 
    function fnUdateDisplay(){
        let pause = 500;
        // alert('totalFlips =' + totalFlips);
        
        totalFlips++;
        setTimeout(() => $displayTotalFlips.innerHTML = totalFlips , pause );  
        topBid = 0; // $displayTopBid 
        
        if (ruletRandom < 1){ 
          headsCounter++;
          setTimeout(() => $displayHead.innerHTML = headsCounter , pause ); 
        }
        if (ruletRandom >= 1){ 
          tailsCounter++;
          setTimeout(() => $displayTail.innerHTML = tailsCounter , pause );   
        }
        return ;
    } // end  UdateDisplay



    setTimeout(() => fnMessage() , 3000 );
    function fnMessage(){
      if(prise == "Success!") {
        $coinRulMess.innerHTML = "Success!";
        $coinRulSubMess.innerHTML = "You won...";
        $coinRulMess.classList.remove("--js_hide");
        $coinRulSubMess.classList.remove("--js_hide");
      }else{
        $coinRulMess.innerHTML = "fail";
        $coinRulSubMess.innerHTML = "You have lost...";
        $coinRulMess.classList.remove("--js_hide");
        $coinRulSubMess.classList.remove("--js_hide");
      }
    } //-- END  fnMessage  ===----
   
    

    //Close
    $coinRuletClose.addEventListener('click', function(e){
      e.preventDefault();
      $resultRuletCoin.innerHTML = "";
      $coinRuletClose.classList.add("--js_hide");
      $coinRulMess.classList.add("--js_hide");
      $coinRulSubMess.classList.add("--js_hide");
      $ruletConfirmBtn.classList.add("--js_hide");

      $coinRulMess.innerHTML = "";
      $coinRulSubMess.innerHTML = "";
    });


    return;
   }; //-- END  fnCoinRulet  ===----


}








  // function  fnCatchInput($input, inpValue){ //FIX
  //   if($input){
  //   let timeoutOrders = 60000 * 30;
  //   let val = $input.value;
  //   inpValue = val;
  //   $input.value= "";
  //   return inpValue;
  //   } else{return;} 
  //  }//-- END    ===----
  