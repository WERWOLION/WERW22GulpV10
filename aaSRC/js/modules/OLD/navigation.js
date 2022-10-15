export function fnNavigation(){
  window.scrollTo(0, 0);
  const pageWidth = document.documentElement.scrollWidth;
  let pageHeight = document.documentElement.scrollHeight;
  // console.log('pageHeight' + pageHeight);
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

    fnScrolling($heroScreen,0 ,$heroNextBtn );//($map,$prev,$next) 
    


    $heroNextBtn.addEventListener('click', function(e) {   e.preventDefault();     // запрет перезагрузки
        fnHeroClose();
        setTimeout(() => { fnLoadingBlok($services);  }, 4);  //console.log('setTimeout');
    });//-- END $heroNextBtn.addEventListener   ===----

    //pi 2                                   ($mark ,$map , $click)
     
    fnScrolling($servicesMapScroll,$servicesBtnPrev,$servicesBtnNext);//($map,$prev,$next) 
    
   
    $servicesBtnPrev.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
        fnCloseBlok($services);
        setTimeout(() => {   fnHeroLoadingA();  }, 1200);
    }); //.addEventListener   BtnPrev

    $servicesBtnNext.addEventListener('click', function(e) {  e.preventDefault();      // запрет перезагрузки
        fnCloseBlok($services);
        setTimeout(() => {  fnLoadingBlok($nft);  }, 1200);
    }); //.addEventListener   BtnPrev


    //pi 3                                  ($markBottom ,$mapElm , $click)
    fnScrolling($nft, $nftBtnPrev  , $nftBtnNext);//($map,$prev,$next) 

     
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
    fnScrolling($jobsJobs, $jobsBtnPrev  , $jobsBtnNext);
 

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
    fnScrolling($about, $aboutBtnPrev  , $aboutBtnNext);
    
 
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
    fnScrolling($contacts, $contactsBtnPrev , 0);


    
    
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




 }//p - END  fnNavigation()  ===- - - -




//pi      fnScrolling    
function fnScrolling($map,$prev,$next) {
  // let pageHeight = document.documentElement.scrollHeight;
  //not scroll
  let counterA = 0;
  let counterB = 0;
  const limitB = 160;

  //not scroll
  let counterScrollA = 0;
  let counterScrollB = 0;
  let stepScroll =  20 ;
  const limitScroll = 140;
  const limitScrollB = 250;


  $map.onwheel = function(event) {  // elem.addEventListener("wheel", onWheel); 
    if  (window.innerWidth > document.body.clientWidth ||  $map.offsetWidth > $map.clientWidth){
      // console.log('есть скролл');
      let scrollTop  = window.pageYOffset || document.documentElement.scrollTop;  
      console.log("scrollTop  =" + scrollTop );
      console.log("counterScrollA  =" + counterScrollA);
      console.log("counterScrollB  =" + counterScrollB);
      if (counterScrollA < -500 && scrollTop == 0){ return counterScrollA = 0; }
      if (counterScrollB < -100 ){ return counterScrollB = -100; } 


      if (event.deltaY < 0  ) { // вниз V  
        counterScrollA = counterScrollA + stepScroll; 
        counterScrollB = counterScrollB - stepScroll; 
      } 
      if (counterScrollA > limitScroll  && $prev !== 0 && scrollTop == 0) {
        $prev.click();window.scrollTo(0, 0);
        return counterScrollA = 0 , counterScrollB = 0 ;
      }
      if (event.deltaY > 0  ){ counterScrollA = counterScrollA - stepScroll; }
      
      
      if (scrollTop > 0 && scrollTop > 0 ){counterScrollB = counterScrollB + stepScroll; }
      if (scrollTop < 0 && scrollTop > 0 ){counterScrollB = counterScrollB - stepScroll; }

    

      if(scrollTop > 0  && counterScrollB > limitScrollB && scrollTop > 0 && $next !== 0  ){
        $next.click();window.scrollTo(0, 0);
        return counterScrollA = -200 , counterScrollB = 0 ;  }  return;

    } else {
      console.log('нет скролла');
      console.log('counterA = ' + counterA);

      if (event.deltaY < 0  ) { // вниз V  //fix   
        counterA = counterA + 27; 
        counterB = 0;
      } 
      if (counterA > limitB && $prev !== 0) {
          $prev.click();
          window.scrollTo(0, 0);
          return counterA = 0 , counterB = 0;
        }
      if (event.deltaY > 0  ){
          counterB = counterB - 27;
          counterA = 0; }
      if (counterB < -limitB  && $next !== 0 ){
        $next.click();
        window.scrollTo(0, 0);
        return counterA = 0 , counterB = 0;}
      return;
    } //  not scroll
  };// $map.onwheel

}//  fnScrolling












