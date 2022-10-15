export function fnEnterKey(){ 
  const $$popUPs = document.querySelectorAll(".--js-popup");

  
  $$popUPs.forEach(($elm) => { 
    // alert('ПРОВЕРКА! POP');
    // console.log('$elm =' + $elm);
    const $enterTarger = $elm.querySelector(".-js_enter");
      if($enterTarger){
        document.addEventListener("keyup", function fnEvntTarger(e) {
          
          e.preventDefault();
          if(e.keyCode == 13 && $elm.classList.contains("--js_open-pop-up") && !$enterTarger.classList.contains("--js_hide")  ) {
              // alert('ПРОВЕРКА!'); 
              $enterTarger.click();
              // document.addEventListener.removeEventListener("keyup", fnEvntTarger, false);
          } // if
         
          return;

      }); // "keyup"

    }

  });//addEventListener keyup

  fnEnterOfInput();
}//-- END    ===----




function fnEnterOfInput(){
  const $inputA = document.getElementById("formHeadInput");
  const $inputB = document.getElementById("formTailInput");


  fnEnterOf($inputA);
  fnEnterOf($inputB);

  function fnEnterOf($el){
    // console.log($el);
    $el.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        // alert(event.key  + " " + event.which);
        event.preventDefault();
      }
    });
  }
}