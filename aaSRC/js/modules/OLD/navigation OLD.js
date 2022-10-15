export function fnNavigation(){
  const pageWidth = document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;
  // console.log('pageHeight' + pageHeight);
  
  const  $accordionACheck = document.querySelector("#accordionACheck");


  const  $heroNextBtn = document.querySelector("#heroScreenNextBtn"),
         $preloader = document.querySelector(".preloader"),
         $heroScreen = document.querySelector(".hero-screen");


  const   $services = document.querySelector(".services"),
          $servicesBtnPrev = document.querySelector("#servicesBtnPrev"),
          $servicesMapScroll = document.querySelector(".--js_services-map-scroll"),
          $servicesBtnNext = document.querySelector("#servicesBtnNext");

  const   $nft = document.querySelector(".nft"),
          $nftBtnPrev = document.querySelector("#nftBtnPrev"),
          $nftBtnNext = document.querySelector("#nftBtnNext");
          // $nftMapTopObserver = document.querySelector(".container_nft");

  //4
  const   $jobs = document.querySelector("#jobsAbout"),
          $jobsJobs = document.querySelector(".jobs"),
          $jobsBtnPrev = document.querySelector("#jobsBtnPrev"),
          $jobsBtnNext = document.querySelector("#jobsBtnNext");
          // $jobsMap = document.querySelector(".--js-jobs-map");
  //5
  const   $about = document.querySelector(".about"),
          $aboutBtnPrev = document.querySelector("#aboutBtnPrev"),
          $aboutBtnNext = document.querySelector("#aboutBtnNext");
          // $aboutMap = document.querySelector(".--js-about-map");
  
  //6
  const   $contacts = document.querySelector(".contacts"),
          $contactsBtnPrev = document.querySelector("#contactsBtnPrev");

  
//pi 1      -= .hero-screen =-         
  if(pageWidth < 1020){
    fnObserverBottom('.--js_mark-bottom', $heroScreen ,$heroNextBtn ); 
    }else{
      fnScrollingNewVB($heroScreen,0,$heroNextBtn );//($map,$prev,$next) 
    } //scroll
    

    $heroNextBtn.addEventListener('click', function(e) {   e.preventDefault();     // запрет перезагрузки
        fnHeroClose();
        setTimeout(() => { fnLoadingBlok($services);  }, 4);  //console.log('setTimeout');
    });//-- END $heroNextBtn.addEventListener   ===----

    //pi 2                                   ($mark ,$map , $click)
      if(pageWidth < 1020){
        fnScrollingNew($servicesMapScroll, $servicesBtnPrev  , $servicesBtnNext);
        }else{
          fnScrollingNewVB($servicesMapScroll,$servicesBtnPrev,$servicesBtnNext);//($map,$prev,$next) 
        } //scroll

   
    $servicesBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
        fnCloseBlok($services);
        setTimeout(() => {   fnHeroLoadingA();  }, 1200);
    }); //.addEventListener   BtnPrev

    $servicesBtnNext.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
        fnCloseBlok($services);
        setTimeout(() => {  fnLoadingBlok($nft);  }, 1200);
    }); //.addEventListener   BtnPrev


    //pi 3                                  ($markBottom ,$mapElm , $click)
    if(pageWidth < 1020 && pageHeight > 800){
      fnScrollingNew($nft, $nftBtnPrev  , $nftBtnNext);  }
    if(pageWidth < 1020 && pageHeight < 800){
      fnScrollingMobile($nft, $nftBtnPrev  , $nftBtnNext);
      }else{
        fnScrollingNewVB($nft, $nftBtnPrev  , $nftBtnNext);//($map,$prev,$next) 
      } //scroll
     
    $nftBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      // console.log('$nftBtnPrev');
      fnCloseBlok($nft);
      setTimeout(() => {   fnLoadingBlok($services);   }, 1200);
    }); //.addEventListener   BtnPrev
    $nftBtnNext.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      fnCloseBlok($nft);
      $nft.classList.add('--js-hidden-alternative');
      setTimeout(() => {  fnLoadingJobs(); }, 400);
    }); //.addEventListener   BtnPrev

    //pi 4                                 ($markBottom ,$mapElm , $click)
    if(pageWidth < 1025){
      fnScrollingNew($jobsJobs, $jobsBtnPrev  , $jobsBtnNext);
    }else{
      // fnHighScreenScrolling($jobsJobs,$jobsBtnPrev,$jobsBtnNext );
      fnScrollingNewVB($jobsJobs,$jobsBtnPrev,$jobsBtnNext);//($map,$prev,$next) 
    }

    $jobsBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      fnCloseJobsR();
      setTimeout(() => {   fnLoadingBlok($nft);  }, 1200);
    }); //.addEventListener   BtnPrev

    $jobsBtnNext.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      // console.log('jobsBtnNext нажата');
      $jobs.classList.remove('js-loading','jobs-about__js-to-right' ,
      'jobs-about__js-to-left', '--js_return');
      $jobs.classList.add('jobs-about__js-to-left');
      setTimeout(() => {   fnLoadingBlok($about);   }, 1200);
      setTimeout(() => {   $accordionACheck.click();   }, 2230);


    }); //.addEventListener   BtnPrev

    //pi 5                                         
    if(pageWidth < 1020){
      fnScrollingNew($about, $aboutBtnPrev  , $aboutBtnNext);
      }else{
        // fnHighScreenScrolling($about, $aboutBtnPrev,$aboutBtnNext);
        fnScrollingNewVB($about, $aboutBtnPrev,$aboutBtnNext);//($map,$prev,$next) 
      }
 
    $aboutBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      $jobs.classList.remove('--js_return');
      $jobs.classList.remove('jobs-about__js-to-left');
      $jobs.classList.add('jobs-about__js-to-right');
    }); //.addEventListener   BtnPrev
    $aboutBtnNext.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      fnCloseJobsL();
      setTimeout(() => {   fnLoadingBlok($contacts);   }, 700);
    }); //.addEventListener   BtnPrev

    //pi 6                                         
    if(pageWidth < 1020){
      fnHighScreenScrolling($contacts, $contactsBtnPrev , 0);
      }else{
        fnScrollingNewVB($contacts, $contactsBtnPrev , 0);//($map,$prev,$next) 
      }
    
    
    $contactsBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      fnCloseBlok($contacts);
      setTimeout(() => {   fnLoadingAbout(); }, 800);
    }); //.addEventListener   BtnPrev

    //p  MENU - NAV    = = = = = = = = = = =                                    

    const   $heroBtnNft = document.querySelector("#heroBtnNft"),
            $heroBtnServices = document.querySelector("#heroBtnServices"),
            $heroBtnJobs = document.querySelector("#heroBtnJobs"),
            $heroBtnAbout = document.querySelector("#heroBtnAbout"),
            $heroBtnContacts = document.querySelector("#heroBtnContacts");

    const   $servicesBtnNft = document.querySelector("#servicesBtnNft"),
            $servicesBtnJobs = document.querySelector("#servicesBtnJobs"),
            $servicesBtnAbout = document.querySelector("#servicesBtnAbout"),
            $servicesBtnContacts = document.querySelector("#servicesBtnContacts");

    const   $nftBtnJobs = document.querySelector("#nftBtnJobs"),
            $nftBtnAbout = document.querySelector("#nftBtnAbout"),
            $nftBtnContacts = document.querySelector("#nftBtnContacts");

    const   $aboutBtnServices = document.querySelector("#aboutBtnServices"),
            $aboutBtnNft = document.querySelector("#aboutBtnNft"),
            $aBtnContacts = document.querySelector("#aboutBtnContacts");

    const   $contactsBtnServices = document.querySelector("#contactsBtnServices"),
            $contactsBtnNft = document.querySelector("#contactsBtnNft"),
            $contactsBtnJobs = document.querySelector("#contactsBtnJobs");
            



    //pi 1                       
    $heroBtnNft.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnHeroClose();
    setTimeout(() => {   fnLoadingBlok($nft);   }, 100); }); 
    $heroBtnJobs.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnHeroClose();
    setTimeout(() => {   fnLoadingBlok($jobs);   }, 100); }); 
    $heroBtnAbout.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnHeroClose();
    $jobs.classList.remove('js-loading');
    setTimeout(() => {   fnLoadingAbout();   }, 700); }); 
    $heroBtnContacts.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnHeroClose();
    setTimeout(() => {   fnLoadingBlok($contacts);   }, 500); }); 
    $heroBtnServices.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnHeroClose();
    setTimeout(() => {   fnLoadingBlok($services);   }, 500); }); 
    //pi 2                       
    $servicesBtnNft.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($services);
    setTimeout(() => {   fnLoadingBlok($nft);   }, 1000); }); 
    $servicesBtnJobs.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($services);
    setTimeout(() => {   fnLoadingJobs();  }, 500); }); 
    $servicesBtnAbout.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($services);
    setTimeout(() => {   fnLoadingAbout();  }, 900); }); 
    $servicesBtnContacts.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($services);
    setTimeout(() => {   fnLoadingBlok($contacts);   }, 500); }); 
    //pi 3                       
    $nftBtnJobs.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($nft);
    setTimeout(() => {   fnLoadingJobs();   }, 500); }); 
    $nftBtnAbout.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($nft);
    setTimeout(() => {   fnLoadingAbout();  }, 500); }); 
    $nftBtnContacts.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($nft);
    setTimeout(() => {   fnLoadingBlok($contacts);   }, 500); });
    
    //pi 5                       
    $aboutBtnServices.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseJobsL();
    setTimeout(() => {   fnLoadingBlok($services);   }, 500); }); 
    $aboutBtnNft.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseJobsL();
    setTimeout(() => {   fnLoadingBlok($nft);   }, 500); }); 

    $aBtnContacts.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
      $aboutBtnNext.click();
     }); 
    
    //pi 6                       
    $contactsBtnServices.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($contacts);
    setTimeout(() => { fnLoadingBlok($services);   }, 500); }); 
    $contactsBtnNft.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($contacts);
    setTimeout(() => {   fnLoadingBlok($nft);   }, 500); }); 
    $contactsBtnJobs.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
    fnCloseBlok($contacts);
    setTimeout(() => {  fnLoadingJobs();  }, 500); }); 
    
    //pi       JobsR          
    function fnCloseJobsR(){
      $jobs.classList.remove('jobs-about__js-to-right' ,'js-loading', '--js_return'); 
      $jobs.classList.add('--js-hidden');
    }

    function fnCloseJobsL(){ //pi 5
        $jobs.classList.add('--js-hidden--left');
        setTimeout(() => { $jobs.classList.remove(
          'jobs-about__js-to-right' , 'js-loading', '--js_return' );  }, 1000);  
    }
    
    function fnLoadingAbout(){
      // console.log('Переход на 5й блок');
      fnLoadingJobs() ;
      setTimeout(() => { $jobsBtnNext.click();}, 600); 
    }
    function fnLoadingJobs() {
        fnLoadingBlok($jobs);
        $jobs.classList.remove('--js-hidden--left');  
    }



    //pi           Close    function                                    
    function fnHeroClose() {
      $preloader.classList.add('--js-hidden');
      $preloader.classList.remove('js-loading'); 
      $heroScreen.classList.add('--js-hidden');
      $heroScreen.classList.remove('js-loading');
      $heroScreen.classList.remove('--js_return');
    }
    function fnCloseBlok($elmA) {
      $elmA.classList.remove('js-loading','--js_return');
      $elmA.classList.add('--js-hidden');
    }

    //pi    loading  function     
    function fnHeroLoadingA(){   
      $heroScreen.classList.remove('--js-hidden');
      $heroScreen.classList.add('--js_return');
      // $heroScreen.classList.add('js-loading');   
    }
    function fnLoadingBlok($elmB){
      $elmB.classList.remove('--js-not-visible','--js-hidden','--js-hidden-alternative' ); 
      $elmB.classList.add('--js_return');
    }



    //pi      High Screen Scrollin          
    function fnHighScreenScrolling($map,$prev,$next) {
      // console.log('Высокий экран');
      let counter = 0;
      $map.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel);  
          if (event.deltaY < 0  ) { // вниз V  //fix   
            counter = counter + 27; 
            // console.log('Top onwheel  вверх // counter =' + counter +  '// event.deltaY =' + event.deltaY );
        } if (counter> 100 ) {
            // console.log('Top onwheel  - counter > 100' + '// клик Top onwheel ');
            counter = 0;
            $prev.click();
            return;
        } if (event.deltaY > 0  ){
            counter = counter - 27; 
          }if (counter < -100 ){
            counter = 0;
            if ( $next !== 0){ $next.click();}
            return;
          } 
          return;
    };//-- END    ===----

  }//  fnHighScreenScrolling


  

 }//p - END  fnNavigation()  ===- - - -


//pi      Hig ScrScrol  New        
function fnScrollingNew($map,$prev,$next) {
    // console.log('New узкий экран');
    let counter = 0;
    $map.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel);  
        if (event.deltaY < 0  ) { // вниз V  //fix   
          counter = counter + 27; 
          // console.log('Top onwheel  вверх // counter =' + counter +  '// event.deltaY =' + event.deltaY );
      } if (counter> 200 ) {
          // console.log('Top onwheel  - counter > 100' + '// клик Top onwheel ');
          if ( $prev !== 0 ){ 
            counter = 0;
            $prev.click();
            return;
          }
      } if (event.deltaY > 0  ){
          counter = counter - 27; 
        }if (counter < -200 ){
          if ( $next !== 0 ){ 
            counter = 0;
            $next.click();
            return;
          }
        } 
        return;
  };//-- END    ===----
}//  fnHighScreenScrolling
//w  fnScrollingMobile
function fnScrollingMobile($map,$prev,$next) {
    console.log('Мобилка');
    let counter = 0;
    $map.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel);  
        if (event.deltaY < 0  ) { // вниз V  //fix   
          counter = counter + 27; 
          // console.log('Top onwheel  вверх // counter =' + counter +  '// event.deltaY =' + event.deltaY );
      } if (counter> 300 ) {
          // console.log('Top onwheel  - counter > 100' + '// клик Top onwheel ');
          if ( $prev !== 0 ){ 
            $prev.click();
            return counter = 0;
          }
      } if (event.deltaY > 0  ){
          counter = counter - 27; 
        }if (counter < -300 ){
          if ( $next !== 0 ){ 
            $next.click();
            return counter = 0;
          }
        }  else { return }
  };//-- END    ===----
}//  fnHighScreenScrolling



//pi      Hig ScrScrol  New   V2      
function fnScrollingNewVB($map,$prev,$next) {
    let counterA = 0;
    let counterB = 0;
    const limit = 70;

    $map.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel); 
      if (event.deltaY < 0  ) { // вниз V  //fix   
          counterA = counterA + 27; 
      } if (counterA > limit ) {
          if ( $prev !== 0 ){ 
            $prev.click();
            counterA = 0;
            return;
          }
      } if (event.deltaY > 0  ){
          counterB = counterB - 27; 
        }if (counterB < -limit ){
          if ( $next !== 0 ){ 
            $next.click();
            counterB = 0;
            return;
          }
        } 
        // counterA = 0;
        // counterB = 0;
        return;
    };
}//-- END    ===----







//p       -= Observer =-         
 function  fnObserverBottom($markBottom ,$mapElm , $click){  //pi  bottom
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          // console.log( 'Нижняя метка видна' );
          // fnScrollClick ($heroScreen); 
          // change.target.classList.add('element-show');
          fnScrollBottomClick($mapElm , $click);  
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll($markBottom); //w mark      
    
    for (let elm of elements) {  observer.observe(elm);  }
}//-- END Observer   ===----



//p       -= Нижний Скрол=-         

function fnScrollBottomClick ($mapElm,$click){    // $elm.click();
  let  counterB = 0;


  $mapElm.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel);  
    // vectorY = vectorY + event.deltaY ;
    if (event.deltaY > 0  ) { // вниз V  //fix   
        counterB = counterB + 27; 
        // console.log('bottom onwheel - вниз' + ' deltaY = ' + event.deltaY  + '// counter = ' + counterB);
        }
      if ( counterB > 200 ) {
        // console.log('bottom onwheel - вниз' + '// counter = ' + counterB +  '// bottom onwheel - клик');
        $click.click();
        return;
      }
      if (event.deltaY < 0 ) {    //fix   
        counterB = 0;
        // console.log('bottom onwheel - вверх - сброс' + ' deltaY = ' + event.deltaY  + '// counter = ' + counterB);
        return;
      } 
  };//-- END    ===----
  return;
} //-fnScrollClick 





