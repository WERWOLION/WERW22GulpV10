export function fnNavigationBurger(){
   const  $heroScreen = document.querySelector(".hero-screen");
   const  $services = document.querySelector(".services");
   const  $contacts = document.querySelector(".contacts");
   const  $jobs = document.querySelector("#jobsAbout");
   const  $nft = document.querySelector(".nft");



const   $heroBtnNft = document.querySelector("#heroBtnNft"),
        $heroBtnServices = document.querySelector("#heroBtnServices"),
        $heroBtnJobs = document.querySelector("#heroBtnJobs"),
        $heroBtnAbout = document.querySelector("#heroBtnAbout"),
        $heroBtnContacts = document.querySelector("#heroBtnContacts");

const   $sBtnNft = document.querySelector("#servicesBtnNft"),
        $servicesBtnJobs = document.querySelector("#servicesBtnJobs"),
        $servicesBtnAbout = document.querySelector("#servicesBtnAbout"),
        $servicesBtnContacts = document.querySelector("#servicesBtnContacts"),
        $servicesBtnPrev = document.querySelector("#servicesBtnPrev"),
        $servicesBtnNext = document.querySelector("#servicesBtnNext"); 



const   
        $nBtnAbout = document.querySelector("#nftBtnAbout"),
        $nBtnContacts = document.querySelector("#nftBtnContacts"),
        $nBtnPrev = document.querySelector("#nftBtnPrev"),
        $nBtnNext = document.querySelector("#nftBtnNext");
     
const   $jBtnPrev = document.querySelector("#jobsBtnPrev"),
        $jBtnNext = document.querySelector("#jobsBtnNext");

const   $aBtnServices = document.querySelector("#aboutBtnServices"),
        $aBtnNft = document.querySelector("#aboutBtnNft"),
        $aBtnPrev = document.querySelector("#aboutBtnPrev"),
        $aBtnNext = document.querySelector("#aboutBtnNext");

//----


//pi     1Screen  
const   
  $hBurgPrevBtn = document.querySelector("#hBurgPrevBtn"),
  $hBurgNextBtn = document.querySelector("#hBurgNextBtn"),
  $hBurgeBtnNft = document.querySelector("#hBurgeBtnNft"),
  $hBurgrBtnServices = document.querySelector("#hBurgrBtnServices"),
  $hBurgrBtnJobs = document.querySelector("#hBurgrBtnJobs"),
  $hBurgrBtnContacts = document.querySelector("#hBurgrBtnContacts"),
  $hBurgrBtnAbout = document.querySelector("#hBurgrBtnAbout");
//pi     2Screen   
const   
  $sBurgPrevBtn = document.querySelector("#sBurgPrevBtn"),
  $sBurgNextBtn = document.querySelector("#sBurgNextBtn"),
  $sBurgeBtnNft = document.querySelector("#sBurgeBtnNft"),
  $sBurgrBtnHome = document.querySelector("#sBurgrBtnHome"),
  $sBurgrBtnJobs = document.querySelector("#sBurgrBtnJobs"),
  $sBurgrBtnContacts = document.querySelector("#sBurgrBtnContacts"),
  $sBurgrBtnAbout = document.querySelector("#sBurgrBtnAbout");
//pi     3Screen   
const   
  $nBurgrBtnHome = document.querySelector("#nBurgrBtnHome"),
  $nBurgPrevBtn = document.querySelector("#nBurgPrevBtn"),
  $nBurgNextBtn = document.querySelector("#nBurgNextBtn"),
  $nBurgeBtnServices = document.querySelector("#nBurgeBtnServices"),
  $nBurgrBtnJobs = document.querySelector("#nBurgrBtnJobs"),
  $nBurgrBtnContacts = document.querySelector("#nBurgrBtnContacts"),
  $nBurgrBtnAbout = document.querySelector("#nBurgrBtnAbout");

//pi     4Screen     
const   
  $jBurgrBtnHome = document.querySelector("#nBurgrBtnHome"),
  $jBurgPrevBtn = document.querySelector("#jBurgPrevBtn"),
  $jBurgNextBtn = document.querySelector("#jBurgNextBtn"),
  $jBurgeBtnServices = document.querySelector("#jBurgeBtnServices"),
  $jBurgrBtnNft = document.querySelector("#jBurgrBtnNft"),
  $jBurgrBtnAbout = document.querySelector("#jBurgrBtnAbout"),
  $jBurgrBtnContacts = document.querySelector("#jBurgrBtnContacts");
//pi     5Screen     
const   
  $aBurgPrevBtn = document.querySelector("#aBurgPrevBtn"),
  $aBurgNextBtn = document.querySelector("#aBurgNextBtn"),
  $aBurgrBtnHome = document.querySelector("#aBurgrBtnHome"),
  $aBurgeBtnServices = document.querySelector("#aBurgeBtnServices"),
  $aBurgrBtnNft = document.querySelector("#aBurgrBtnNft"),
  $aBurgrBtnJobs = document.querySelector("#aBurgrBtnJobs"),
  $aBurgrBtnContacts = document.querySelector("#aBurgrBtnContacts");
//pi     6Screen     

  const   $cBurgrBtnHome = document.querySelector("#cBurgrBtnHome"),
          $cBtnServices = document.querySelector("#contactsBtnServices"),
          $cBtnNft = document.querySelector("#contactsBtnNft"),
          $cBurgPrevBtn = document.querySelector("#cBurgPrevBtn"),
          $cBurgNextBtn = document.querySelector("#cBurgNextBtn"),
          $cBtnPrev = document.querySelector("#contactsBtnPrev"),
          $cBurgeBtnServices = document.querySelector("#cBurgeBtnServices"),
          $cBurgrBtnNft = document.querySelector("#cBurgrBtnNft"),
          $cBurgrBtnJobs = document.querySelector("#cBurgrBtnJobs"),
          $cBurgrBtnAbout = document.querySelector("#cBurgrBtnAbout");
  




//pi     1Screen    
  fnBurgerMenuClick($hBurgPrevBtn , $heroBtnContacts); //  
  fnBurgerMenuClick($hBurgNextBtn , $heroBtnServices); //  

  fnBurgerMenuClick($hBurgrBtnContacts , $heroBtnContacts); //  
  fnBurgerMenuClick($hBurgrBtnServices , $heroBtnServices); //  
  fnBurgerMenuClick($hBurgrBtnJobs , $heroBtnJobs); //  
  fnBurgerMenuClick($hBurgeBtnNft , $heroBtnNft); //  
  fnBurgerMenuClick($hBurgrBtnAbout , $heroBtnAbout); //  
  
//pi     2Screen    
  fnBurgerMenuClick($sBurgPrevBtn , $servicesBtnPrev); //  
  fnBurgerMenuClick($sBurgNextBtn , $servicesBtnNext); //  

  fnBurgerMenuClick($sBurgrBtnContacts , $servicesBtnContacts); //  
  fnBurgerMenuClick($sBurgrBtnHome , $servicesBtnPrev); //  
  fnBurgerMenuClick($sBurgeBtnNft , $sBtnNft); //  
  fnBurgerMenuClick($sBurgrBtnJobs , $servicesBtnJobs); //  
  fnBurgerMenuClick($sBurgrBtnAbout, $servicesBtnAbout); //  
//pi     3Screen    
  fnBurgerMenuClick($nBurgPrevBtn , $nBtnPrev); //  
  fnBurgerMenuClick($nBurgNextBtn , $nBtnNext); //  
  

  fnGoHome($nBurgrBtnHome,$nft) ;
  fnBurgerMenuClick($nBurgeBtnServices,$nBtnPrev) ;
  fnBurgerMenuClick($nBurgrBtnContacts , $nBtnContacts); //  /  
  fnBurgerMenuClick($nBurgrBtnJobs , $nBtnNext); //  
  fnBurgerMenuClick($nBurgrBtnAbout, $nBtnAbout); //  
//pi     4Screen    
  fnBurgerMenuClick($jBurgPrevBtn , $jBtnPrev); //  
  fnBurgerMenuClick($jBurgNextBtn , $jBtnNext); //  

  fnGoHomeOnJobs( $jBurgrBtnHome);
  fnJobsScreenMenu($jBurgeBtnServices, $services);

  fnBurgerMenuClick($jBurgrBtnNft , $jBtnPrev); // 
  fnBurgerMenuClick($jBurgrBtnAbout, $jBtnNext); // 

  fnJobsScreenMenu($jBurgrBtnContacts , $contacts); //  /  
//pi     5Screen    
  fnBurgerMenuClick($aBurgPrevBtn , $aBtnPrev); //  
  fnBurgerMenuClick($aBurgNextBtn , $aBtnNext); //  
  fnGoHomeOnJobs( $aBurgrBtnHome);

  fnBurgerMenuClick($aBurgeBtnServices,$aBtnServices) ;
  fnBurgerMenuClick($aBurgrBtnContacts , $aBtnNext); //  /  
  fnBurgerMenuClick($aBurgrBtnJobs , $aBtnPrev); //  
  fnBurgerMenuClick($aBurgrBtnNft, $aBtnNft); //
   
//pi     6Screen    
  fnBurgerMenuClick($cBurgPrevBtn , $cBtnPrev); //  
  fnBurgerMenuClick($cBurgNextBtn , $cBurgrBtnHome); //  

  fnGoHome($cBurgrBtnHome,$contacts) ; 

  fnBurgerMenuClick($cBurgeBtnServices,$cBtnServices) ;
  fnBurgerMenuClick($cBurgrBtnAbout , $cBtnPrev); //  /  
  fnBurgerMenuClick($cBurgrBtnJobs , $cBtnPrev); //  
  fnBurgerMenuClick($cBurgrBtnNft, $cBtnNft); //
   





  function fnJobsScreenMenu($activ,$target){
    if ($activ){
      $activ.addEventListener('click', function(e){
          document.body.classList.remove("--js-lock__body--burgerMenu");  
            $jobs.classList.remove(
              'js-loading',
              '--js_return',
              'jobs-about__js-to-right' );
              $jobs.classList.add('--js-hidden');

          setTimeout(() => { 
            $target.classList.remove('--js-not-visible','--js-hidden'); 
            $target.classList.add('--js_return');}, 500);
          e.preventDefault();})
   }};//-- END    ===----




 function  fnBurgerMenuClick($activ, $targetClick){ 
  if ($activ){
    $activ.addEventListener('click', function(e){
        document.body.classList.remove("--js-lock__body--burgerMenu");  
        $targetClick.click();
        e.preventDefault();})
  }};


  function fnGoHome( $activ ,$closeElmA){
    if ($activ){
    $activ.addEventListener('click', function(e){ 
      document.body.classList.remove("--js-lock__body--burgerMenu");  
      e.preventDefault();

      $closeElmA.classList.remove('js-loading','--js_return');
      $closeElmA.classList.add('--js-hidden');
      setTimeout(() => {  
      $heroScreen.classList.remove('--js-hidden');
      $heroScreen.classList.add('--js_return');   }, 300);  })
    }};// goHome



  function fnGoHomeOnJobs( $activ){
    if ($activ){
    $activ.addEventListener('click', function(e){ 
      document.body.classList.remove("--js-lock__body--burgerMenu");  
      e.preventDefault();

      $jobs.classList.remove(
              'js-loading',
              '--js_return',
              'jobs-about__js-to-right' );
              $jobs.classList.add('--js-hidden');
      setTimeout(() => {  
      $heroScreen.classList.remove('--js-hidden');
      $heroScreen.classList.add('--js_return');   }, 400);  })
    }};// goHome







}//-- END    ===----