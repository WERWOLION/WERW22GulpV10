export function tgMessage(){

  const  $formTg = document.getElementById('formMess');

  // переменные модалок  
  // 1 модалка ошибок на сайте
  //const $modalFieldAlert = document.getElementById('popUpTextFormAlert');  // let modalFieldAlert = document.getElementsByClassName('.popUP-form1__text--allert');
  // const $btnToAlert = document.getElementById('btnToAlert');  // кнопка вызова Alert
  // модалка ответа с сервера
  // const $modalFieldMessage = document.getElementById('popUpTextFormMessage');  // let modalFieldAlert = document.getElementsByClassName('.popUP-form1__text--allert');
  const $btnToMessage = document.getElementById('btnToMessage');  // кнопка вызова Alert



  $formTg.addEventListener('submit', function (event) { // запуск
    event.stopPropagation(); // сброс тандартного поведения переменной содержащей данные формы как объект
    // console.log('отправка формы');
    event.preventDefault();// СБРОС ПОВЕДЕНИЯ КНОПКИ


    //w валидация
    let error = fnFormValidate($formTg); // formValidate нов функция  //------------- валидация форм--------

    // ответ на валидацию
    if (error === 0){ // если нет ошибок = 0
      $formTg.classList.add('_sending'); // добовляется класс, включающий спинер
      eventRun(this);// передаём контекст this в переменную thisTg - продолжаем выполнение функции  function (event)
    } else {  // если есть еррор валидации то выводим ошибку
      // $modalFieldAlert.textContent =  'Заполните обязательные поля и подтвердите ваше согласие.';
      // $btnToAlert.click();


    }//-- END ответ на валидацию   ===----


    function eventRun(thisTg){
    let form = thisTg,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    // data.append( 'name', 		$('[name="name"]', form).val() );
    // data.append( 'phone', 		$('[name="phone"]', form).val() );
    data.append( 'email', 		$('[name="email"]', form).val() );
    data.append( 'text', 		$('[name="message"]', form).val() );
    // data.append( 'file', 		$('[name="file"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'files/ajaxTelegram.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }
            return myXhr;
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            // console.log('сообщение успешно отправлено');
            form.reset();
            $formTg.classList.remove('_sending');
            // $modalFieldMessage.textContent = 'Сообщение успешно отправлено.';
            $btnToMessage.click();
        }
    });
    return false;
  }
});

 
}//-- END  tgMessage()   ===----





//e  ДОП функции
function fnFormValidate($formJs) { //------------------------------------------------------------------------------------------------------------------------------------------------------
  let error = 0;
  let $formReq = document.querySelectorAll('._req');  // класс ._req - обезат поле

  for (let index=0 ; index < $formReq.length; index++){
    const input = $formReq[index];
    formRemoveError(input);

      if (input.classList.contains('_email')){

        if (emailTest(input)){formAddError(input);error++;}
      }else{
        if (input.value === ''){
          formAddError(input);
          error++;
        }else if(input.getAttribute('type') === "checkbox" && input.checked === false){
          formAddError(input);
          error++;
        }

      } 
  } // --for--
  return error;
}// end function formValidate------------------------------------------------------------------------





//2
function formAddError(input) {        // добавление клаасса еррор---------------------------------------------------------------------------
  input.parentElement.classList.add('_error');
  input.classList.add('_error');  
}// end func




// function formAddError(input) {        // добавление клаасса еррор---------------------------------------------------------------------------
//   input.parentElement.classList.add('--js_tg-error'); // родителю  добавление клаасса еррор
//   input.classList.add('--js_tg-error');  // еллементу
// }// end function ------------------------------------------------------------------------------------------------

function formRemoveError(input) {           // удаление клаасса ерро---------------------------------------------------------------------------
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}// end function ------------------------------------------------------------------------

//3
function emailTest(input) { // удаление клаасса ерро---------------------------------------------------------------------------
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);// простой Регулятор регулярной проверки электронной почты
  // return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test());
}// end function ------------------------------------------------------------------------------------------------
